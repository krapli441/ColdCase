import React from "react";

interface InfoWindowProps {
  caseData: any;
  position: { lat: number; lng: number };
  closeInfoWindow: () => void;
}

const InfoWindow: React.FC<InfoWindowProps> = ({
  caseData,
  position,
  closeInfoWindow,
}) => {
  return (
    <div>
      <h3>{caseData.title}</h3>
      <p>{caseData.description}</p>
      <a href={caseData.link}>자세히 보기</a>
      <button onClick={closeInfoWindow}>닫기</button>
    </div>
  );
};

export default InfoWindow;
