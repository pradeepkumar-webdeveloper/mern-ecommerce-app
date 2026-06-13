import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/slices/authSlice';
import cartReducer from './redux/slices/cartSlice';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';

const store = configureStore({
  reducer: { auth: authReducer, cart: cartReducer }
});

export default function App() {
  const path = window.location.pathname;
  const Page = path === '/login' ? LoginPage : path === '/cart' ? CartPage : HomePage;
  return (
    <Provider store={store}>
      <Navbar />
      <Page />
    </Provider>
  );
}
