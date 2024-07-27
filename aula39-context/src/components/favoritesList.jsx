import { useContext } from 'react';
import { FavoritesContext } from '../contexts/favoritesContext';

const FavoritesList = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Favorites</h2>
      <ul>
        {favorites.length === 0 ? (
          <li>No favorites added</li>
        ) : (
          favorites.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - {item.price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FavoritesList;
