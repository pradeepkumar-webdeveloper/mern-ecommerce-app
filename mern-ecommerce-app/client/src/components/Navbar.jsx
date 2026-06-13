import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

export default function Navbar() {
  const { user } = useSelector(s => s.auth);
  const { items } = useSelector(s => s.cart);
  const dispatch = useDispatch();
  return (
    <nav style={{ background:'#1B3A6B', padding:'12px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', color:'#fff' }}>
      <h2 style={{ margin:0, fontSize:20 }}>🛒 ShopMERN</h2>
      <div style={{ display:'flex', gap:20, alignItems:'center' }}>
        <a href="/" style={{ color:'#fff', textDecoration:'none' }}>Products</a>
        <a href="/cart" style={{ color:'#fff', textDecoration:'none' }}>Cart ({items.length})</a>
        {user ? (
          <>
            <span style={{ fontSize:14 }}>Hi, {user.name}</span>
            <button onClick={() => dispatch(logout())}
              style={{ background:'#e74c3c', color:'#fff', border:'none', padding:'6px 14px', borderRadius:6, cursor:'pointer' }}>
              Logout
            </button>
          </>
        ) : (
          <a href="/login" style={{ color:'#fff', textDecoration:'none' }}>Login</a>
        )}
      </div>
    </nav>
  );
}
