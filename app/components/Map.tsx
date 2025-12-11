"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useIntl } from "react-intl";

export default function MapComponent() {
    
    // L'yi burada bir değişkende saklayacağız.
    let L: any; 

    // Sadece window tanımlıysa (yani tarayıcıdaysak) Leaflet'i içeri al.
    // Bu, L'yi global olarak import etmekten daha güvenli bir yöntemdir.
    if (typeof window !== 'undefined') {
        L = require('leaflet');
    }

    // Leaflet'in istemci tarafında yüklendiğinden emin olduktan sonra icon'u tanımlıyoruz.
    let icon: L.Icon | undefined;
    if (L) {
        icon = L.icon({
            iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
            shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });
    }


    const erzincan: [number, number] = [39.7481929, 39.4885533];
    const intl = useIntl();
    
    // Eğer L tanımlanamadıysa (yani build sırasında sunucudaysak) haritayı göstermeyebiliriz
    // Veya MapContainer'a sadece icon yüklenmediyse bir placeholder gösterebiliriz.

    if (!icon) {
         // Harita yüklenirken boş bir div döndürmek build hatasını engeller.
         return <div className="h-[400px] flex items-center justify-center">Harita Yükleniyor...</div>;
    }


    return (
        <div className="max-w-4xl mx-auto mt-6 rounded-2xl shadow-xl border border-gray-200 overflow-hidden bg-white">
            {/* ... Diğer sabit kısımlar ... */}
            <div className="w-full h-[400px]">
                <MapContainer
                    center={erzincan}
                    zoom={25}
                    scrollWheelZoom={true}
                    className="h-full w-full"
                >
                    <TileLayer
                        attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Sadece icon tanımlıysa Marker'ı render et */}
                    {icon && (
                        <Marker position={erzincan} icon={icon}>
                            <Popup>
                                📍 <strong>Zilif Lavaş Fırını</strong> <br />
                                Erzincan, Türkiye
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
            {/* ... Kodun geri kalanı ... */}
        </div>
    );
}