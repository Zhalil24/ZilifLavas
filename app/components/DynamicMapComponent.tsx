import dynamic from 'next/dynamic';

// 1. Dinamik olarak içe aktar:
export const DynamicMapComponent = dynamic(
  // MapComponent'in doğru dosya yolunu kontrol edin:
  // Örn: '../components/MapComponent'
  () => import('../components/Map'), 
  { 
    ssr: false, // 🛑 Sunucu Tarafı Renderlamayı KAPAT
    loading: () => <div className="h-[400px] flex items-center justify-center">Harita Yükleniyor...</div>
  }
);