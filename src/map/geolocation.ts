function getCurrentPosition(): Promise<GeolocationCoordinates> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        console.log("사용자 접속 위치를 불러옴 : ", position.coords);
        resolve(position.coords); // 위치 정보를 성공적으로 가져올 경우
      },
      (error) => {
        console.log(error);
        reject("error"); // 오류가 발생할 경우
      },
      {
        enableHighAccuracy: true,
      }
    );
  });
}

export default getCurrentPosition;
