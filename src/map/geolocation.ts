function getCurrentPosition(): Promise<GeolocationCoordinates> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
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
