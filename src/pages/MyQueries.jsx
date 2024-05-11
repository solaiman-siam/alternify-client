import { Link } from "react-router-dom";

function MyQueries() {
  return (
    <div>
      <Link to="/add-queries" className="px-4 py-2 bg-orange-400">
        Add Queries
      </Link>
    </div>
  );
}

export default MyQueries;
