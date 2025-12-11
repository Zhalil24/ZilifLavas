"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useIntl } from "react-intl";
import { useEffect, useState } from "react";

export default function MapComponent() {
  const [L, setL] = useState<any>(null);

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet);
    });
  }, []);

  const intl = useIntl();
  const erzincan: [number, number] = [39.7481929, 39.4885533];

  if (!L) return <div className="h-[400px]">Loading map...</div>;

  const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });

  return (
    <div className="max-w-4xl mx-auto mt-6 rounded-2xl shadow-xl border border-gray-200 overflow-hidden bg-white">
      <div className="bg-dark-red text-white px-4 py-3">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          📍 {intl.formatMessage({ id: "12x" })}
        </h2>
      </div>

      <div className="w-full h-[400px]">
        <MapContainer center={erzincan} zoom={25} scrollWheelZoom className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={erzincan} icon={icon}>
            <Popup>
              📍 <strong>Zilif Lavaş Fırını</strong> <br />
              Erzincan, Türkiye
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="p-4 text-sm text-gray-700 bg-gray-50 border-t">
        <strong>{intl.formatMessage({ id: "asi" })}:</strong> Merkez Çarşısı 13. Sok. Erzincan Merkez, Türkiye
      </div>

      <div className="p-4 text-center">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${erzincan[0]},${erzincan[1]}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-dark-red text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {intl.formatMessage({ id: "33x" })}
        </a>
      </div>
    </div>
  );
}
