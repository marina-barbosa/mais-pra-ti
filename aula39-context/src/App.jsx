
import './App.css'
import { CartProvider } from './contexts/cartContext';
import { FavoritesProvider } from './contexts/favoritesContext';
import { LayoutPreferencesProvider } from './contexts/layoutPreferencesContext';
import { NavigationHistoryProvider } from './contexts/navigationHistoryContext';

import ProductList from './components/productList';
import Cart from './components/cart';
import AddToFavorites from './components/addToFavorites';
import FavoritesList from './components/favoritesList';
import LayoutSwitcher from './components/layoutSwitcher';
import StyledComponent from './components/styledComponent';
import NavigationTracker from './components/navigationTracker';
import HistoryList from './components/historyList';


export function App() {



  return (
    <CartProvider>
      <FavoritesProvider>
        <LayoutPreferencesProvider>
          <NavigationHistoryProvider>
            <div className="p-6 flex bg-slate-300">
              <div className='flex flex-col justify-between p-6'>
                <div className="border">
                  <NavigationTracker />
                </div>
                <div className="border">
                  <HistoryList />
                </div>
                <div className="border flex-1">
                  <ProductList />
                </div>
              </div>
              <div className='flex flex-col justify-between p-6'>
                <div className="border">
                  <AddToFavorites />
                  <FavoritesList />
                </div>
                <div className="border">
                  <Cart />
                </div>
                <div className="border">
                  <LayoutSwitcher />
                  <StyledComponent />
                </div>
              </div>

            </div>
          </NavigationHistoryProvider>
        </LayoutPreferencesProvider>
      </FavoritesProvider>
    </CartProvider>
  )
}

