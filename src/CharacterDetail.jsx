export default function CharacterDetail({ character, onClose }) {
  if (!character) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center p-6 z-50 overflow-auto">
      <div className="relative max-w-md w-full">
      <button
  onClick={onClose}
  className="btn btn-sm btn-circle absolute -top-6 right-2 bg-black bg-opacity-60 text-white hover:bg-opacity-80 transition cursor-pointer"
  aria-label="Close detail"
>
  ✕
</button>
        <img
          src={character.image}
          alt={character.name}
          className="rounded-md w-full max-h-[60vh] object-contain"
        />
      </div>

      <div className="text-center max-w-md space-y-2 mt-6">
        <h2 className="text-3xl font-bold">{character.name}</h2>
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Origin:</strong> {character.origin.name}</p>
        <p><strong>Location:</strong> {character.location.name}</p>
      </div>
    </div>
  );
}
