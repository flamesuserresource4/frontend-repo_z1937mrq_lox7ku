import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartCheckout = ({ items, onInc, onDec, onRemove, onCheckout, onClose }) => {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);
  return (
    <div className="fixed inset-0 z-30 flex justify-end bg-black/30" onClick={onClose}>
      <aside
        className="w-full sm:w-[420px] h-full bg-white shadow-xl border-l border-[#F2F2F2] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-[#F2F2F2]">
          <h3 className="font-semibold text-[#333333]">Keranjang</h3>
          <p className="text-xs text-[#777]">Pastikan pesanan Anda sudah benar</p>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-3">
          {items.length === 0 && (
            <div className="text-center text-[#777] text-sm py-8">Keranjang masih kosong</div>
          )}
          {items.map((it) => (
            <div key={it.id} className="flex items-center gap-3 p-3 rounded-xl border border-[#F2F2F2]">
              <img src={it.image} alt={it.name} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-[#333333] truncate">{it.name}</div>
                <div className="text-xs text-[#777]">Rp {it.price.toLocaleString('id-ID')}</div>
                <div className="mt-2 inline-flex items-center gap-2 bg-[#F2F2F2] rounded-full px-2 py-1">
                  <button onClick={() => onDec(it.id)} className="p-1 rounded-full hover:bg-white">
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-semibold text-[#333333] w-6 text-center">{it.qty}</span>
                  <button onClick={() => onInc(it.id)} className="p-1 rounded-full hover:bg-white">
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <button onClick={() => onRemove(it.id)} className="p-2 rounded-lg bg-[#FFF0EE] text-[#D96C4E] hover:bg-[#ffe5e0]">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-[#F2F2F2] bg-[#FFF8E7]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-[#555]">Total</span>
            <span className="text-lg font-bold text-[#333333]">Rp {total.toLocaleString('id-ID')}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white bg-[#D96C4E] hover:bg-[#c15f44] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Lanjutkan Checkout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartCheckout;
