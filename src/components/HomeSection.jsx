import React from 'react';
import { ArrowRight } from 'lucide-react';

const HomeSection = ({ onOrderNow, popularItems }) => {
  return (
    <section className="bg-white">
      {/* Hero / Banner Promo */}
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#333333]">
              Hangatnya Masakan Rumah, Setiap Saat
            </h1>
            <p className="mt-3 text-[#555] leading-relaxed">
              Nikmati sajian khas Nusantara dengan cita rasa rumahan. Bahan segar terpilih, diolah dengan penuh kasih sayang.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onOrderNow}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white bg-[#D96C4E] hover:bg-[#c15f44] shadow-md transition-transform hover:-translate-y-0.5"
              >
                Pesan Sekarang <ArrowRight size={18} />
              </button>
              <span className="text-sm text-[#777]">Gratis ongkir area sekitar</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl p-6 bg-[#FFF8E7] border border-[#F2F2F2] shadow-sm">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1400&auto=format&fit=crop"
                  alt="Promo masakan rumahan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#777]">Promo Hari Ini</p>
                  <p className="text-lg font-semibold text-[#333333]">Paket Hemat Keluarga</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs bg-[#9DC183] text-[#333333] font-semibold">-15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* subtle background tint */}
        <div className="absolute inset-0 -z-10 bg-[#FFF8E7]/40" />
      </div>

      {/* Menu Populer */}
      <div className="max-w-6xl mx-auto px-4 pb-14">
        <h2 className="text-xl font-bold text-[#333333] mb-4">Menu Populer</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularItems.map((item) => (
            <div key={item.id} className="group rounded-xl overflow-hidden border border-[#F2F2F2] bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" />
              </div>
              <div className="p-3">
                <div className="text-[13px] text-[#777]">{item.category}</div>
                <div className="text-sm font-semibold text-[#333333]">{item.name}</div>
                <div className="text-[13px] text-[#D96C4E] font-bold mt-1">Rp {item.price.toLocaleString('id-ID')}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
