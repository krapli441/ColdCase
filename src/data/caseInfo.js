const urls = [
  "https://www.google.com/maps/d/u/0/viewer?mid=1GElhR1Zm5WGw1P5kyiPdBGoo184--Bs&ll=33.25412050000004%2C126.560076&z=8",
  "https://www.google.com/maps/d/u/0/viewer?mid=1GElhR1Zm5WGw1P5kyiPdBGoo184--Bs&ll=35.86937889999997%2C128.5105366&z=8",
  "https://www.google.com/maps/d/u/0/viewer?mid=1GElhR1Zm5WGw1P5kyiPdBGoo184--Bs&ll=36.07128109999999%2C129.02678769999997&z=8",
  "https://www.google.com/maps/d/u/0/viewer?mid=1GElhR1Zm5WGw1P5kyiPdBGoo184--Bs&ll=33.4596401%2C126.33813789999998&z=8",
  "https://www.google.com/maps/d/u/0/viewer?mid=1GElhR1Zm5WGw1P5kyiPdBGoo184--Bs&ll=37.53101810000006%2C127.02811309999997&z=8",
  "https://www.google.com/maps/d/u/0/viewer?mid=1GElhR1Zm5WGw1P5kyiPdBGoo184--Bs&ll=37.61915940000003%2C126.93556689999998&z=8",
  "https://www.google.com/maps/d/u/0/viewer?mid=1GElhR1Zm5WGw1P5kyiPdBGoo184--Bs&ll=37.5406979%2C126.84727220000003&z=8",
  "https://www.google.com/maps/d/u/0/viewer?mid=1GElhR1Zm5WGw1P5kyiPdBGoo184--Bs&ll=36.743027099999985%2C126.97880940000002&z=8",
  
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
