export default function FilterBar({ filters, onFilterChange }) {
  return (
    <div className="mb-6 p-4 bg-base-200 rounded-md">
      {/* Arama inputu ortalanmış ve tek satır */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-md h-10" 
          value={filters.name}
          onChange={(e) => onFilterChange("name", e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <select
          className="select select-bordered w-full max-w-xs"
          value={filters.status}
          onChange={(e) => onFilterChange("status", e.target.value)}
        >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select
          className="select select-bordered w-full max-w-xs"
          value={filters.gender}
          onChange={(e) => onFilterChange("gender", e.target.value)}
        >
          <option value="">All Genders</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
}

