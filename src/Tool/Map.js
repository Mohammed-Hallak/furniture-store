import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // إنشاء عنصر div لعرض الخريطة فيه
    const mapElement = L.map("map", {
      center: [33.526, 36.282],
      zoom: 15,
    });

    // إضافة خريطة OpenStreetMap كطبقة للخريطة
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      // attribution:
      //   'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(mapElement);

    const customIcon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
      iconSize: [32, 38],
    });

    // إنشاء علامة وإضافتها إلى الخريطة
    const marker = L.marker([33.526, 36.282], {
      icon: customIcon,
      title: "My Marker",
    }).addTo(mapElement);

    // حفظ الخريطة في حالة الحالية
    setMap(mapElement);

    // تنظيف الخريطة عندما يتم إزالة المكون
    return () => {
      mapElement.remove();
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ height: "450px" }}></div>
    </div>
  );
}
