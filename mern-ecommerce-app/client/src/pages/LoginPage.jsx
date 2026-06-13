import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/slices/authSlice';

export default function LoginPage() {
  const [form, setForm] = useState({ email:'', password:'' });
  const dispatch = useDispatch();
  const { loading, error } = useSelector(s => s.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div style={{ maxWidth:400, margin:'80px auto', padding:32, border:'1px solid #e0e0e0', borderRadius:16, boxShadow:'0 4px 20px rgba(0,0,0,0.08)' }}>
      <h2 style={{ textAlign:'center', marginTop:0, color:'#1B3A6B' }}>Login</h2>
      {error && <p style={{ color:'red', textAlign:'center' }}>{error}</p>}
      <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
        <input type="email" placeholder="Email" value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
          style={{ padding:'10px 14px', borderRadius:8, border:'1px solid #ddd', fontSize:15 }} />
        <input type="password" placeholder="Password" value={form.password}
          onChange={e => setForm({...form, password: e.target.value})}
          style={{ padding:'10px 14px', borderRadius:8, border:'1px solid #ddd', fontSize:15 }} />
        <button onClick={handleSubmit} disabled={loading}
          style={{ background:'#1B3A6B', color:'#fff', border:'none', padding:'12px', borderRadius:8, fontSize:16, fontWeight:700, cursor:'pointer' }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
      <p style={{ textAlign:'center', marginTop:16, fontSize:14 }}>
        Don't have an account? <a href="/register" style={{ color:'#1B3A6B' }}>Register</a>
      </p>
    </div>
  );
}
