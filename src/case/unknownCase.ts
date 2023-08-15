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
    img : "https://img.sbs.co.kr/newimg/news/200804/200262805.jpg"
  },
  {
    title: "김경숙 의문사 사건",
    date: "",
    link: "https://namu.wiki/w/%EA%B9%80%EA%B2%BD%EC%88%99%20%EC%9D%98%EB%AC%B8%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.13672600000004, lng: 128.4844588 },
    img:"https://mblogthumb-phinf.pstatic.net/MjAyMjA0MjNfMjk5/MDAxNjUwNzExNTExODMw.aqb5C5UcjNgYQy77r_iXxcYtYb0dbCCL2-hD8ADK6Ykg.gkVnZB-xYsAvNZ1mt1IuEeI6Vt24ElsGwvfJ4YKW5nEg.PNG.ganghanii/20220423_195208.png?type=w800"
  },
  {
    title: "대구 일가족 변사사건",
    date: "",
    link: "https://namu.wiki/w/%EB%8C%80%EA%B5%AC%20%EC%9D%BC%EA%B0%80%EC%A1%B1%20%EB%B3%80%EC%82%AC%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.810310399999985, lng: 128.6563446 },
    img:"https://image.kmib.co.kr/online_image/2016/0925/201609251121_61120010951711_2.jpg"
  },
  {
    title: "보은 콩나물밥 독극물 사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B3%B4%EC%9D%80%20%EC%BD%A9%EB%82%98%EB%AC%BC%EB%B0%A5%20%EB%8F%85%EA%B7%B9%EB%AC%BC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.49918090000001, lng: 127.72312669999997 },
    img:"https://mblogthumb-phinf.pstatic.net/MjAxODExMDdfMzgg/MDAxNTQxNTU1NzYwNzIy.g6mRo_3rPDQaDaCSCThM6JEM_Bl9oK08gIpK_g-wZ1sg.wN7oqD1e2w_BxZm4J3j9YuetuhHx2Xi_4LWOCmlGklcg.JPEG.pressfree/990FD73359C3B3C213.jpg?type=w800"
  },
  {
    title: "부산 고교생 매물도 변사 사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B6%80%EC%82%B0%20%EA%B3%A0%EA%B5%90%EC%83%9D%20%EB%A7%A4%EB%AC%BC%EB%8F%84%20%EB%B3%80%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 34.639997900000026, lng: 128.5724251 },
    img : "https://file3.instiz.net/data/file3/2020/10/21/3/0/0/3003c141da09224a471f85fcdfd32293.jpg"
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
    img: "https://mblogthumb-phinf.pstatic.net/MjAxNzAyMTJfOTIg/MDAxNDg2ODg3OTM2NzE3.QQt1RDpcyHoeaCK0dUPcOEmWZDfLyOazEo5LG01YLncg.4mOt3pbojWWT3IOhOSbWHepV5xUw3vPV3SAkG0-rbD4g.JPEG.ahsjdk0807/3.jpg?type=w800"
  },
  {
    title: "안산 남성 변사 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%95%88%EC%82%B0%20%EB%82%A8%EC%84%B1%20%EB%B3%80%EC%82%AC%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.293333300000015, lng: 126.5925 },
    img : "https://blog.kakaocdn.net/dn/cI23SD/btqv3IbSPQv/cTmyyQonGWJzuaM6woBDe0/img.jpg"
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
    img : "data:image/jpeg;base64,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"
  },
  {
    title: "오창 맨홀 변사사건",
    date: "",
    link: "https://namu.wiki/w/%EC%98%A4%EC%B0%BD%20%EB%A7%A8%ED%99%80%20%EB%B3%80%EC%82%AC%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.73810740000002, lng: 127.41371270000002 },
    img : "https://i.namu.wiki/i/Y4YvwqTUTwENsTs1Xk3-oMWRGZ6nsYwFcdF-DdANOLklCH_Tu-J95pUd72UOMFf6obJ5HMlywj89z5EAMNxCXAxSjRbGyzyW3OB00p-15rfhBdRmXCZh1F0s8Bpsm2fqUg9ilg2lvFmA9JKExQUPOA.webp"
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
    img: "https://i.namu.wiki/i/vLYNdOxnveUxorNijrdg5K61Zfjf87GUECazgeXlashPSRIQ04LkmZXpiplLUMwYr2biZdVfBqQL0hMrElxPgcdxSmUePUNK6CPg9w61lg492WY0sX5aOc0hG5YKu1hO9pAw0boNOc7LeZJZdph-kw.webp"
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
    img : "https://mblogthumb-phinf.pstatic.net/MjAxNzA1MTVfOTkg/MDAxNDk0Nzg0MjU2MTE4.0xJONcdFkXIyPVnLVGeoWILu6kkparJg4VP6V4Ofdt0g.8HRs0z-K0r5YcMCdkzVZ2IO5uGXMVfgwrr2s2x-PJ4Ag.JPEG.ahsjdk0807/2.jpg?type=w800"
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
    img: "https://www.sisajournal.com/news/photo/201903/182724_88331_3628.jpg"
  },
];

export default unknownCaseData;
