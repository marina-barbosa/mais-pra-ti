import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pesquisa</h1>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite aqui"
          className="p-2 border border-slate-300 rounded flex-1"
        />
        <button
          type="submit"
          className="p-2 bg-sky-500 text-white rounded hover:bg-sky-600"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};
export default Search;
