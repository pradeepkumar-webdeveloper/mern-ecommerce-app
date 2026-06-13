import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import axios from 'axios';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products?search=${search}`)
      .then(r => setProducts(r.data));
  }, [search]);

  return (
    <div style={{ padding:24 }}>
      <input value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search products..."
        style={{ width:'100%', padding:'10px 16px', fontSize:15, borderRadius:8, border:'1px solid #ddd', marginBottom:24 }} />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:20 }}>
        {products.map(p => (
          <div key={p._id} style={{ border:'1px solid #e0e0e0', borderRadius:12, overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,0.07)' }}>
            <div style={{ background:'#f5f7fa', height:160, display:'flex', alignItems:'center', justifyContent:'center', fontSize:48 }}>🛍️</div>
            <div style={{ padding:16 }}>
              <h3 style={{ margin:'0 0 6px', fontSize:16 }}>{p.name}</h3>
              <p style={{ margin:'0 0 4px', color:'#666', fontSize:13 }}>{p.category}</p>
              <p style={{ margin:'0 0 12px', fontWeight:700, fontSize:18, color:'#1B3A6B' }}>₹{p.price}</p>
              <button onClick={() => dispatch(addToCart(p))}
                style={{ width:'100%', background:'#1B3A6B', color:'#fff', border:'none', padding:'10px', borderRadius:8, cursor:'pointer', fontWeight:600 }}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
