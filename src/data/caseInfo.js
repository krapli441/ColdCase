const urls = [
  "https://www.google.com/maps/d/u/0/viewer?mid=1GElhR1Zm5WGw1P5kyiPdBGoo184--Bs&ll=37.47980740000003%2C126.97725680000002&z=8",
  
];

const coordinates = urls.map((url) => {
  const match = url.match(/ll=([\d.-]+)%2C([\d.-]+)/);
  if (match) {
    return {
      lat: parseFloat(match[1]),
      lng: parseFloat(match[2]),
    };
  }
  return null; // 좌표가 없는 경우
});

console.log(coordinates);
