export default function Pagination({ info, page, onPageChange }) {
  return (
    <div className="flex flex-col items-center mt-6 space-y-2">
      <div className="flex justify-center space-x-6">
        <button
          className="btn btn-outline btn-xl cursor-pointer hover:cursor-pointer"
          onClick={() => onPageChange(page - 1)}
          disabled={!info.prev}
          style={{ fontSize: "1.5rem", padding: "0.75rem 1.5rem" }}
        >
          «
        </button>

        <button
          className="btn btn-primary btn-xl cursor-default"
          style={{ fontSize: "1.5rem", padding: "0.75rem 1.5rem" }}
        >
          {page}
        </button>

        <button
          className="btn btn-outline btn-xl cursor-pointer hover:cursor-pointer"
          onClick={() => onPageChange(page + 1)}
          disabled={!info.next}
          style={{ fontSize: "1.5rem", padding: "0.75rem 1.5rem" }}
        >
          »
        </button>
      </div>

      {info.count && (
        <p className="text-sm text-gray-500">
        Total characters found: {info.count}
      </p>
      )}
    </div>
  );
}
