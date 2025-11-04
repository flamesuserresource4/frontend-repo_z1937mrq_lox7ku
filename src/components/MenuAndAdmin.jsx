import React, { useState } from 'react';
import { Plus, Minus, Eye, Trash2 } from 'lucide-react';

const MenuAndAdmin = ({ items, onAddToCart, onAddNewItem }) => {
  const [detail, setDetail] = useState(null);
  const [tab, setTab] = useState('menu');

  // Admin form state
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: 'Lauk',
    description: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    const price = parseInt(String(form.price).replace(/\D/g, ''), 10) || 0;
    onAddNewItem({
      name: form.name,
      price,
      category: form.category,
      description: form.description || 'Menu khas rumahan',
      image:
        form.image ||
        'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1400&auto=format&fit=crop',
    });
    setForm({ name: '', price: '', category: 'Lauk', description: '', image: '' });
    setTab('menu');
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-full text-sm ${tab === 'menu' ? 'bg-[#FFF8E7] text-[#333333]' : 'text-[#333333]/70 hover:bg-[#F2F2F2]'}`}
          onClick={() => setTab('menu')}
        >
          Menu Makanan
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm ${tab === 'admin' ? 'bg-[#FFF8E7] text-[#333333]' : 'text-[#333333]/70 hover:bg-[#F2F2F2]'}`}
          onClick={() => setTab('admin')}
        >
          Dashboard Admin
        </button>
      </div>

      {tab === 'menu' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.id} className="group rounded-2xl border border-[#F2F2F2] bg-white shadow-sm overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" />
              </div>
              <div className="p-4">
                <div className="text-xs text-[#777] mb-1">{item.category}</div>
                <h3 className="font-semibold text-[#333333]">{item.name}</h3>
                <p className="text-sm text-[#666] line-clamp-2 mt-1">{item.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-[#D96C4E] font-bold">Rp {item.price.toLocaleString('id-ID')}</div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setDetail(item)}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-[#333333] bg-[#F2F2F2] hover:bg-[#e9e9e9]"
                    >
                      <Eye size={16} /> Detail
                    </button>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-white bg-[#D96C4E] hover:bg-[#c15f44] shadow-sm"
                    >
                      <Plus size={16} /> Keranjang
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {tab === 'admin' && (
        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-[#F2F2F2] bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-[#333333] mb-4">Tambah Menu Baru</h3>
            <div className="grid gap-3">
              <div>
                <label className="text-sm text-[#555]">Nama Menu</label>
                <input
                  className="mt-1 w-full rounded-lg border border-[#EAEAEA] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9DC183]"
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Contoh: Ayam Bakar Madu"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-[#555]">Harga (Rp)</label>
                  <input
                    type="number"
                    className="mt-1 w-full rounded-lg border border-[#EAEAEA] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9DC183]"
                    value={form.price}
                    onChange={(e) => setForm((s) => ({ ...s, price: e.target.value }))}
                    placeholder="25000"
                    min={0}
                  />
                </div>
                <div>
                  <label className="text-sm text-[#555]">Kategori</label>
                  <select
                    className="mt-1 w-full rounded-lg border border-[#EAEAEA] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9DC183]"
                    value={form.category}
                    onChange={(e) => setForm((s) => ({ ...s, category: e.target.value }))}
                  >
                    <option>Lauk</option>
                    <option>Nasi</option>
                    <option>Sayur</option>
                    <option>Minuman</option>
                    <option>Camilan</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm text-[#555]">URL Gambar</label>
                <input
                  className="mt-1 w-full rounded-lg border border-[#EAEAEA] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9DC183]"
                  value={form.image}
                  onChange={(e) => setForm((s) => ({ ...s, image: e.target.value }))}
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="text-sm text-[#555]">Deskripsi</label>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-[#EAEAEA] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9DC183]"
                  value={form.description}
                  onChange={(e) => setForm((s) => ({ ...s, description: e.target.value }))}
                  placeholder="Deskripsi singkat menu"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-[#9DC183] hover:bg-[#86ad6f] font-semibold">
                  <Plus size={16} /> Simpan Menu
                </button>
              </div>
            </div>
          </form>

          <div className="rounded-2xl border border-[#F2F2F2] bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-[#333333] mb-4">Daftar Menu Saat Ini</h3>
            <div className="space-y-3 max-h-[420px] overflow-auto pr-1">
              {items.map((it) => (
                <div key={it.id} className="flex items-center gap-3 p-3 rounded-xl border border-[#F2F2F2]">
                  <img src={it.image} alt={it.name} className="w-14 h-14 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#333333] truncate">{it.name}</div>
                    <div className="text-xs text-[#777]">{it.category} • Rp {it.price.toLocaleString('id-ID')}</div>
                  </div>
                  <button
                    onClick={() => setDetail(it)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#F2F2F2] text-[#333333]"
                  >
                    Lihat
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {detail && (
        <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/30" onClick={() => setDetail(null)}>
          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video">
              <img src={detail.image} alt={detail.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="text-xs text-[#777] mb-1">{detail.category}</div>
              <h3 className="font-semibold text-[#333333] text-lg">{detail.name}</h3>
              <p className="text-sm text-[#666] mt-1">{detail.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-[#D96C4E] font-bold">Rp {detail.price.toLocaleString('id-ID')}</div>
                <button
                  onClick={() => {
                    onAddToCart(detail);
                    setDetail(null);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-[#D96C4E] hover:bg-[#c15f44]"
                >
                  <Plus size={16} /> Tambah ke Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuAndAdmin;
