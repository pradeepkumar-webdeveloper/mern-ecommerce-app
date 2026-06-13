import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQty } from '../redux/slices/cartSlice';

export default function CartPage() {
  const { items } = useSelector(s => s.cart);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  if (!items.length) return (
    <div style={{ textAlign:'center', padding:60 }}>
      <p style={{ fontSize:20 }}>🛒 Your cart is empty</p>
      <a href="/" style={{ color:'#1B3A6B' }}>Continue Shopping</a>
    </div>
  );

  return (
    <div style={{ maxWidth:700, margin:'40px auto', padding:24 }}>
      <h2 style={{ color:'#1B3A6B' }}>Your Cart</h2>
      {items.map(item => (
        <div key={item._id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 0', borderBottom:'1px solid #eee' }}>
          <div>
            <p style={{ margin:0, fontWeight:600 }}>{item.name}</p>
            <p style={{ margin:0, color:'#888', fontSize:13 }}>₹{item.price}</p>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <button onClick={() => dispatch(updateQty({ id: item._id, qty: Math.max(1, item.qty - 1) }))}
              style={{ padding:'4px 10px', borderRadius:6, border:'1px solid #ddd', cursor:'pointer' }}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => dispatch(updateQty({ id: item._id, qty: item.qty + 1 }))}
              style={{ padding:'4px 10px', borderRadius:6, border:'1px solid #ddd', cursor:'pointer' }}>+</button>
            <button onClick={() => dispatch(removeFromCart(item._id))}
              style={{ background:'#e74c3c', color:'#fff', border:'none', padding:'6px 12px', borderRadius:6, cursor:'pointer' }}>Remove</button>
          </div>
        </div>
      ))}
      <div style={{ textAlign:'right', marginTop:20 }}>
        <p style={{ fontSize:20, fontWeight:700, color:'#1B3A6B' }}>Total: ₹{total}</p>
        <button style={{ background:'#1B3A6B', color:'#fff', border:'none', padding:'12px 28px', borderRadius:8, fontSize:16, fontWeight:700, cursor:'pointer' }}>
          Place Order
        </button>
      </div>
    </div>
  );
}
