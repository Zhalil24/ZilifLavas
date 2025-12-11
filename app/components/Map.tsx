
"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useIntl } from "react-intl";

const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapComponent() {
    const erzincan: [number, number] = [39.7481929, 39.4885533];
  const intl = useIntl();
    return (
        <div className="max-w-4xl mx-auto mt-6 rounded-2xl shadow-xl border border-gray-200 overflow-hidden bg-white">
            <div className="bg-dark-red text-white px-4 py-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    📍  {intl.formatMessage({ id: "12x" })}
                </h2>
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
