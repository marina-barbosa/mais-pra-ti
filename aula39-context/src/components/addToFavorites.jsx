import { useContext } from 'react';
import { FavoritesContext } from '../contexts/favoritesContext';

const AddToFavorites = () => {
  const { addToFavorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add to Favorites</h2>
      <button
        onClick={() => addToFavorites({ name: 'Favorite Item', price: '$40' })}
        className="bg-yellow-500 text-white py-1 px-4 rounded"
      >
        Add Favorite
      </button>
    </div>
  );
};

export default AddToFavorites;
