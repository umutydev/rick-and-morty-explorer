export default function CharacterTable({ characters, onSelectCharacter }) {
  if (!characters || characters.length === 0) {
    return <p className="text-center text-gray-500">No characters to display.</p>;
  }


  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Status</th>
            <th>Species</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((char) => (
            <tr
              key={char.id}
              className="cursor-pointer hover:bg-base-200"
              onClick={() => onSelectCharacter(char)}
            >
              <td>
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={char.image} alt={char.name} />
                  </div>
                </div>
              </td>
              <td>{char.name}</td>
              <td>{char.status}</td>
              <td>{char.species}</td>
              <td>{char.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
