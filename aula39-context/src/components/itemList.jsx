import { useUserPreferences } from '../contexts/userPreferencesContext';

const ItemList = () => {
  // const { viewMode } = useUserPreferences();
  const { viewMode } = useUserPreferences();

  return (
    <div className={viewMode === 'list' ? 'flex flex-col space-y-2' : 'grid grid-cols-3 gap-2'}>

      <div className='w-16 h-8 bg-red-500'>item</div>
      <div className='w-16 h-8 bg-red-500'>item</div>
      <div className='w-16 h-8 bg-red-500'>item</div>
      <div className='w-16 h-8 bg-red-500'>item</div>
      <div className='w-16 h-8 bg-red-500'>item</div>
    </div>
  );
};

export default ItemList;
