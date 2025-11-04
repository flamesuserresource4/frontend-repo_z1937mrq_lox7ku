import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import MenuAndAdmin from './components/MenuAndAdmin';
import CartCheckout from './components/CartCheckout';

const initialMenu = [
  {
    id: '1',
    name: 'Ayam Bakar Madu',
    category: 'Lauk',
    price: 28000,
    description: 'Ayam panggang dengan marinasi madu dan rempah pilihan. Manis gurih, empuk di dalam.',
    image:
      'https://images.unsplash.com/photo-1604908554027-4316325b5d0e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Rendang Sapi',
    category: 'Lauk',
    price: 35000,
    description: 'Khas Minang, dimasak lama hingga bumbu meresap sempurna.',
    image:
      'https://images.unsplash.com/photo-1633945274405-2f6c1c851157?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Sayur Asem',
    category: 'Sayur',
    price: 12000,
    description: 'Segar gurih dengan kuah bening dan banyak sayuran.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Nasi Uduk',
    category: 'Nasi',
    price: 10000,
    description: 'Nasi gurih wangi santan, cocok untuk segala lauk.',
    image:
      'https://images.unsplash.com/photo-1604908177217-43cb1b873c56?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Es Jeruk Segar',
    category: 'Minuman',
    price: 8000,
    description: 'Jeruk peras asli, manis alami tanpa pengawet.',
    image:
      'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Tempe Mendoan',
    category: 'Camilan',
    price: 9000,
    description: 'Tempe tipis balut tepung, renyah di luar lembut di dalam.',
    image:
      'https://images.unsplash.com/photo-1625941851852-9e03ba7ac729?q=80&w=1400&auto=format&fit=crop',
  },
];

function App() {
  const [view, setView] = useState('home');
  const [menu, setMenu] = useState(initialMenu);
  const [cart, setCart] = useState([]);

  const popularItems = useMemo(() => menu.slice(0, 4), [menu]);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((it) => it.id === item.id);
      if (exist) {
        return prev.map((it) => (it.id === item.id ? { ...it, qty: it.qty + 1 } : it));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const handleInc = (id) => {
    setCart((prev) => prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)));
  };
  const handleDec = (id) => {
    setCart((prev) => prev.flatMap((it) => (it.id === id ? (it.qty > 1 ? [{ ...it, qty: it.qty - 1 }] : []) : [it])));
  };
  const handleRemove = (id) => {
    setCart((prev) => prev.filter((it) => it.id !== id));
  };
  const handleCheckout = () => {
    alert('Terima kasih! Pesanan Anda diproses.');
    setCart([]);
    setView('home');
  };

  const handleAddNewItem = ({ name, price, category, description, image }) => {
    const id = String(Date.now());
    setMenu((m) => [{ id, name, price, category, description, image }, ...m]);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#333333]">
      <Header currentView={view} onNavigate={setView} cartCount={cart.length} />

      {view === 'home' && (
        <HomeSection onOrderNow={() => setView('menu')} popularItems={popularItems} />
      )}

      {view === 'menu' && (
        <MenuAndAdmin items={menu} onAddToCart={handleAddToCart} onAddNewItem={handleAddNewItem} />
      )}

      {view === 'admin' && (
        <MenuAndAdmin items={menu} onAddToCart={handleAddToCart} onAddNewItem={handleAddNewItem} />
      )}

      {view === 'cart' && (
        <CartCheckout
          items={cart}
          onInc={handleInc}
          onDec={handleDec}
          onRemove={handleRemove}
          onCheckout={handleCheckout}
          onClose={() => setView('home')}
        />
      )}

      <footer className="mt-10 border-t border-[#F2F2F2] bg-[#FFF8E7]">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-[#666] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Rumah Makan Adek</span>
          <span className="text-[#333333] font-medium">“Hangatnya Masakan Rumah, Setiap Saat.”</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
