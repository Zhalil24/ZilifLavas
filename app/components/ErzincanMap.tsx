"use client";

import React, { useEffect, useState, useRef } from "react";

const ErzincanMap: React.FC = () => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const svgRef = useRef<HTMLDivElement | null>(null); // div olarak değişti

  useEffect(() => {
    fetch("/assets/Turkey_provinces_blank_gray.svg")
      .then((res) => res.text())
      .then((data) => setSvgContent(data));
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const erzincanPath = svgRef.current.querySelector(
      "path[title='Erzincan']"
    ) as SVGPathElement | null;

    if (erzincanPath) {
      erzincanPath.setAttribute("fill", "#8B0000");
      erzincanPath.style.cursor = "pointer";

      erzincanPath.addEventListener("click", () => {
        alert("Erzincan seçildi!");
      });
    }
  }, [svgContent]);

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      {svgContent && (
        <div
          ref={svgRef}
          dangerouslySetInnerHTML={{ __html: svgContent }}
          className="w-full h-auto"
        />
      )}
    </div>
  );
};

export default ErzincanMap;
