import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get('query') || '';

  const results = query ? [`Result 1 for "${query}"`, `Result 2 for "${query}"`] : [];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Resultado da busca</h1>
      {results.length > 0 ? (
        <ul className="list-disc pl-5">
          {results.map((result, index) => (
            <li key={index} className="mb-2">{result}</li>
          ))}
        </ul>
      ) : (
        <p>Nada por aqui para &quot;{query.replace(/"/g, '&quot;')}&quot;.</p>
      )}
    </div>
  );
};

export default SearchResults;
