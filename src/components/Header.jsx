import React from 'react';
import { Home, Utensils, ShoppingCart, Settings } from 'lucide-react';

const Header = ({ currentView, onNavigate, cartCount }) => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-[#F2F2F2]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#FFF8E7] flex items-center justify-center shadow-sm">
            {/* Simple logo: bowl */}
            <div className="relative w-6 h-6">
              <span className="absolute inset-x-0 bottom-0 h-2 rounded-b-full bg-[#D96C4E]" />
              <span className="absolute left-1/2 -translate-x-1/2 -top-1 w-8 h-1 rounded-full bg-[#9DC183]" />
            </div>
          </div>
          <div>
            <div className="text-[15px] font-semibold tracking-wide text-[#333333]">Rumah Makan Adek</div>
            <div className="text-xs text-[#666]">“Hangatnya Masakan Rumah, Setiap Saat.”</div>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('home')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
              currentView === 'home' ? 'bg-[#FFF8E7] text-[#333333]' : 'text-[#333333]/70 hover:bg-[#F2F2F2]'
            }`}
            aria-label="Beranda"
          >
            <Home size={18} />
            <span className="hidden sm:inline">Beranda</span>
          </button>
          <button
            onClick={() => onNavigate('menu')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
              currentView === 'menu' ? 'bg-[#FFF8E7] text-[#333333]' : 'text-[#333333]/70 hover:bg-[#F2F2F2]'
            }`}
            aria-label="Menu"
          >
            <Utensils size={18} />
            <span className="hidden sm:inline">Menu</span>
          </button>
          <button
            onClick={() => onNavigate('admin')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
              currentView === 'admin' ? 'bg-[#FFF8E7] text-[#333333]' : 'text-[#333333]/70 hover:bg-[#F2F2F2]'
            }`}
            aria-label="Admin"
          >
            <Settings size={18} />
            <span className="hidden sm:inline">Admin</span>
          </button>
          <button
            onClick={() => onNavigate('cart')}
            className="relative inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors text-white bg-[#D96C4E] hover:bg-[#c15f44] shadow-sm"
            aria-label="Keranjang"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Keranjang</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#9DC183] text-[10px] text-[#333333] flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
