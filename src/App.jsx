import { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import CharacterTable from "./CharacterTable";
import Pagination from "./Pagination";
import CharacterDetail from "./CharacterDetail";

export default function App() {
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    gender: "",
  });

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API URL oluştur
  const buildUrl = () => {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    if (filters.name) url += `&name=${encodeURIComponent(filters.name)}`;
    if (filters.status) url += `&status=${filters.status}`;
    if (filters.gender) url += `&gender=${filters.gender}`;
    return url;
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(buildUrl())
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            setCharacters([]);
            setInfo({});
            setLoading(false);
            return null;
          }
          throw new Error("Characters not found");
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setCharacters(data.results);
          setInfo(data.info);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setCharacters([]);
        setInfo({});
        setLoading(false);
      });
  }, [filters, page]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  return (
    <div className="container mx-auto p-6 relative min-h-screen">
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />

      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-red-600 font-semibold">{error}</p>}

      {!loading && !error && (
        <>
          <CharacterTable
            characters={characters}
            onSelectCharacter={setSelectedCharacter}
          />

          <Pagination
            info={info}
            page={page}
            onPageChange={setPage}
            totalCount={characters.length}
          />


          {selectedCharacter && (
            <CharacterDetail
              character={selectedCharacter}
              onClose={() => setSelectedCharacter(null)}
            />
          )}

          {characters.length === 0 && (
            <p className="text-center text-gray-500">
              No characters found for the current search.
            </p>
          )}
        </>
      )}
    </div>
  );
}
