const unknownCaseData = [
  {
    title: "경인아라뱃길 훼손 시신 사건",
    date: "",
    link: "https://namu.wiki/w/%EA%B2%BD%EC%9D%B8%EC%95%84%EB%9D%BC%EB%B1%83%EA%B8%B8%20%ED%9B%BC%EC%86%90%20%EC%8B%9C%EC%8B%A0%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.572668100000016, lng: 126.70516269999999 },
    img: "https://i.namu.wiki/i/UznnoPUDhFKSHyD_p5q9GCHHCGBAhgH77jmvn_PyB-Vgtyvigiot6raQDyaQiNNvBNkyN7o8E6gvC5ser0kaClTaqvxo9bvLsriG47QrywvMH1bgAqz4BNuX8znoidAFFwH6GoEd0WLR6FRbRX9cgQ.webp",
  },
  {
    title: "고속도로 의문사 사건",
    date: "",
    link: "https://namu.wiki/w/%EA%B3%A0%EC%86%8D%EB%8F%84%EB%A1%9C%20%EC%9D%98%EB%AC%B8%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.45379510000003, lng: 127.25491069999998 },
  },
  {
    title: "김경숙 의문사 사건",
    date: "",
    link: "https://namu.wiki/w/%EA%B9%80%EA%B2%BD%EC%88%99%20%EC%9D%98%EB%AC%B8%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.13672600000004, lng: 128.4844588 },
  },
  {
    title: "대구 일가족 변사사건",
    date: "",
    link: "https://namu.wiki/w/%EB%8C%80%EA%B5%AC%20%EC%9D%BC%EA%B0%80%EC%A1%B1%20%EB%B3%80%EC%82%AC%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.810310399999985, lng: 128.6563446 },
  },
  {
    title: "보은 콩나물밥 독극물 사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B3%B4%EC%9D%80%20%EC%BD%A9%EB%82%98%EB%AC%BC%EB%B0%A5%20%EB%8F%85%EA%B7%B9%EB%AC%BC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.49918090000001, lng: 127.72312669999997 },
  },
  {
    title: "부산 고교생 매물도 변사 사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B6%80%EC%82%B0%20%EA%B3%A0%EA%B5%90%EC%83%9D%20%EB%A7%A4%EB%AC%BC%EB%8F%84%20%EB%B3%80%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 34.639997900000026, lng: 128.5724251 },
  },
  {
    title: "부산항 백골 시신 사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B6%80%EC%82%B0%ED%95%AD%20%EB%B0%B1%EA%B3%A8%20%EC%8B%9C%EC%8B%A0%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.11738810000001, lng: 129.0487465 },
  },
  {
    title: "부산 해양대학교 맨홀 변사 사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B6%80%EC%82%B0%20%ED%95%B4%EC%96%91%EB%8C%80%ED%95%99%EA%B5%90%20%EB%A7%A8%ED%99%80%20%EB%B3%80%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.0762886, lng: 129.08897509999997 },
  },
  {
    title: "부평 콘크리트 암매장 사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B6%80%ED%8F%89%20%EC%BD%98%ED%81%AC%EB%A6%AC%ED%8A%B8%20%EC%95%94%EB%A7%A4%EC%9E%A5%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.51625109999999, lng: 126.70523219999998 },
    img: "https://i.namu.wiki/i/v7cxqRQL3kMgAF4sAZDKDSd73SKDzqrIpjlnii0dCAqmdv1mbECkV8sB10mvtDrY0ZmOhdw-ulEjLodBTvRMUx5TytqYECLm2KkXeCnlsPdn6IBFog4XUfNlECWtHBHRH9yr2Llsq7TPwTVQp5NPBw.webp",
  },
  {
    title: "신호수 의문사 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%8B%A0%ED%98%B8%EC%88%98%20%EC%9D%98%EB%AC%B8%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 34.67545400000002, lng: 127.77202639999999 },
  },
  {
    title: "안산 남성 변사 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%95%88%EC%82%B0%20%EB%82%A8%EC%84%B1%20%EB%B3%80%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.293333300000015, lng: 126.5925 },
  },
  {
    title: "안산 원곡공원 영아 시신 유기 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%95%88%EC%82%B0%20%EC%9B%90%EA%B3%A1%EA%B3%B5%EC%9B%90%20%EC%98%81%EC%95%84%20%EC%8B%9C%EC%8B%A0%20%EC%9C%A0%EA%B8%B0%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.33344310000002, lng: 126.7947417 },
    img:"https://i.namu.wiki/i/KFM7z6xIlWy7pIUF6MIvVH8dc__6bvinT_QtCXsL9V-90LYGbH5zJFYWrXPMWbVvs0m-uRUa3QHRMYhMmJsjYszk_aCPpdyZS8LPnZGwk-l7nIQNiXOa2nCVKl6OS4ZJdiLZIGQ-GYF23tO6UdGbcQ.webp"
  },
  {
    title: "안양 h오피스텔 추락사건",
    date: "",
    link: "https://namu.wiki/w/%EC%95%88%EC%96%91%20h%EC%98%A4%ED%94%BC%EC%8A%A4%ED%85%94%20%EC%B6%94%EB%9D%BD%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.392491900000024, lng: 126.9608575 },
    img: "https://blog.kakaocdn.net/dn/HcyPg/btrKJ5cqccG/Klshtm1QdF550JufiNUXB0/img.jpg"
  },
  {
    title: "연기군 자동차 화재 변사 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%97%B0%EA%B8%B0%EA%B5%B0%20%EC%9E%90%EB%8F%99%EC%B0%A8%20%ED%99%94%EC%9E%AC%20%EB%B3%80%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.6053345, lng: 127.30171609999996 },
  },
  {
    title: "오창 맨홀 변사사건",
    date: "",
    link: "https://namu.wiki/w/%EC%98%A4%EC%B0%BD%20%EB%A7%A8%ED%99%80%20%EB%B3%80%EC%82%AC%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.73810740000002, lng: 127.41371270000002 },
  },
  {
    title: "울산 무거동 야산 토막살인사건",
    date: "",
    link: "https://namu.wiki/w/%EC%9A%B8%EC%82%B0%20%EB%AC%B4%EA%B1%B0%EB%8F%99%20%EC%95%BC%EC%82%B0%20%ED%86%A0%EB%A7%89%EC%82%B4%EC%9D%B8%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.53524219999999, lng: 129.2595839 },
  },
  {
    title: "울진 백골 유기사건",
    date: "",
    link: "https://namu.wiki/w/%EC%9A%B8%EC%A7%84%20%EB%B0%B1%EA%B3%A8%20%EC%9C%A0%EA%B8%B0%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.72984730000003, lng: 129.4367714 },
    img: "https://i.namu.wiki/i/w0NtjQhwh5nM8dsRsge7yZXwoygF-f6rIe2QChC0HPE_zqwcuxT955-prRWcEXCD_Kbd7HwXLnyFrgcdJRVtPlv2rbeCaQvCrlkUOvzib8b7XeasqhMhWaQChczopodOBowb9qeCoL4zTqKHDjt6Tg.webp",
  },
  {
    title: "인제대교 사체 유기 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%9D%B8%EC%A0%9C%EB%8C%80%EA%B5%90%20%EC%82%AC%EC%B2%B4%20%EC%9C%A0%EA%B8%B0%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 38.03997079999999, lng: 128.1528688 },
    img: "https://www.slist.kr/news/photo/201808/42213_107232_4928.jpg",
  },
  {
    title: "인천 굴포천 마대자루 시신 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%9D%B8%EC%B2%9C%20%EA%B5%B4%ED%8F%AC%EC%B2%9C%20%EB%A7%88%EB%8C%80%EC%9E%90%EB%A3%A8%20%EC%8B%9C%EC%8B%A0%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.51216180000001, lng: 126.73565019999998 },
    img: "https://menu.mt.co.kr/theleader/thumb/2016/12/06/2016122113507886342_1.jpg",
  },
  {
    title: "천안 토막 살인 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%B2%9C%EC%95%88%20%ED%86%A0%EB%A7%89%20%EC%82%B4%EC%9D%B8%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.91844680000001, lng: 127.1369349 },
  },
  {
    title: "충주 성심맹아원 의문사 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%B6%A9%EC%A3%BC%20%EC%84%B1%EC%8B%AC%EB%A7%B9%EC%95%84%EC%9B%90%20%EC%9D%98%EB%AC%B8%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.94879410000003, lng: 127.94100489999997 },
    img: "https://cdn.nbntv.kr/news/photo/201708/36592_19231.jpg",
  },
  {
    title: "파주 감악산 머리없는 시신 사건",
    date: "",
    link: "https://namu.wiki/w/%ED%8C%8C%EC%A3%BC%20%EA%B0%90%EC%95%85%EC%82%B0%20%EB%A8%B8%EB%A6%AC%EC%97%86%EB%8A%94%20%EC%8B%9C%EC%8B%A0%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.941738699999995, lng: 126.9689597 },
    img: "https://file2.nocutnews.co.kr/newsroom/image/2020/12/31/202012311653260790_8.jpg",
  },
  {
    title: "함광열 이병 의문사 사건",
    date: "",
    link: "https://namu.wiki/w/%ED%95%A8%EA%B4%91%EC%97%B4%20%EC%9D%B4%EB%B3%91%20%EC%9D%98%EB%AC%B8%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.64714789999997, lng: 126.93825800000002 },
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2IbfOENTUskPeaLS1EZstbsfYoiyXSvQVBtm2nKmrma7rRlvIdnxjmUkKdQ7QFh8Qnk&usqp=CAU"
  },
  {
    title: "함평 갯바위 유골 사건",
    date: "",
    link: "https://namu.wiki/w/%ED%95%A8%ED%8F%89%20%EA%B0%AF%EB%B0%94%EC%9C%84%20%EC%9C%A0%EA%B3%A8%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.08690829999998, lng: 126.4424473 },
  },
  {
    title: "분당 여자 변사체 전소사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B6%84%EB%8B%B9%20%EC%97%AC%EC%9E%90%20%EB%B3%80%EC%82%AC%EC%B2%B4%20%EC%A0%84%EC%86%8C%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.3793356, lng: 127.1060411 },
    img : "./img/cantfind.png"
  },
  {
    title: "산낙지 보험 사망 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%82%B0%EB%82%99%EC%A7%80%20%EB%B3%B4%ED%97%98%20%EC%82%AC%EB%A7%9D%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.4562557, lng: 126.70520619999999 },
    img: "https://mblogthumb-phinf.pstatic.net/MjAxNzA5MDhfMjQy/MDAxNTA0Nzk4NzQxNDE4.BAQsxEq2A4zmT3422OiOXkuvvwC1QwL0GzivJfEzzI8g.T--SM7mD5B-eTSXy21TR_OMYIh7Z1GjTWXHhbviOZgQg.PNG.ahsjdk0807/3.png?type=w800"
  },
  {
    title: "화성 해안초소 K2 소총 사취 사건",
    date: "",
    link: "https://namu.wiki/w/%ED%99%94%EC%84%B1%20%ED%95%B4%EC%95%88%EC%B4%88%EC%86%8C%20K2%20%EC%86%8C%EC%B4%9D%20%EC%82%AC%EC%B7%A8%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.250960000000006, lng: 126.92085899999998 },
    img: "https://i.namu.wiki/i/lydcQNou0te30BjQYx2gUMLbPmGSjZOL4Xo8TRYkPatq4miAV-V9hLgjfIRIQTUXQpwnPxEiwEcXWaBF9G6fzGzuMzMFt9oy8QxRv24gr5ToiBcEyWW-ZNA_25_71brODOLkX2Rz5vCGVLSAPlIGPg.webp"
  },
  {
    title: "강남경찰서 형사 의문사 사건",
    date: "",
    link: "https://namu.wiki/w/%EA%B0%95%EB%82%A8%EA%B2%BD%EC%B0%B0%EC%84%9C%20%ED%98%95%EC%82%AC%20%EC%9D%98%EB%AC%B8%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.15970020000002, lng: 127.81422869999997 },
  },
];

export default unknownCaseData;
