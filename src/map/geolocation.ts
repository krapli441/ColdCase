function getCurrentPosition(): Promise<GeolocationCoordinates> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
        reject("error");
        console.log(position.coords.latitude, position.coords.longitude);
        console.log("사용자 접속 위치를 불러옴 : ", position.coords);
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  });
}

export default getCurrentPosition;
