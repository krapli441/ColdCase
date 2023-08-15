const missingCaseData = [
  {
    title: "김천 직지사 30대 남성 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EA%B9%80%EC%B2%9C%20%EC%A7%81%EC%A7%80%EC%82%AC%2030%EB%8C%80%20%EB%82%A8%EC%84%B1%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.11916700000001, lng: 127.96611099999998 },
  },
  {
    title: "구미 여대생 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EA%B5%AC%EB%AF%B8%20%EC%97%AC%EB%8C%80%EC%83%9D%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.198396400000036, lng: 129.0069571 },
  },
  {
    title: "김명철 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EA%B9%80%EB%AA%85%EC%B2%A0%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.40736950000001, lng: 127.1162181 },
  },
  {
    title: "김춘자 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EA%B9%80%EC%B6%98%EC%9E%90%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.22465609999998, lng: 128.88770640000004 },
  },
  {
    title: "김해 부산 부녀자 연쇄실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EA%B9%80%ED%95%B4%20%EB%B6%80%EC%82%B0%20%EB%B6%80%EB%85%80%EC%9E%90%20%EC%97%B0%EC%87%84%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.272135500000005, lng: 128.8452281 },
  },
  {
    title: "나카무라 미나코 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EB%82%98%EC%B9%B4%EB%AC%B4%EB%9D%BC%20%EB%AF%B8%EB%82%98%EC%BD%94%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.55865450000002, lng: 126.79447389999999 },
    img: "https://i.namu.wiki/i/Hsx6z8TszF1SGjc_rsmzo30EwsFrXX7XlRI6HNTDhrxnslOxH4niWBpmwKwKeHx5K352yG0_PlfgqWpGSlzHZ1QBBH9ib0B-F_9VmkOrul3l0gZg3kBmckixD5j3JFioILerEdtLbppiN5CZwxCi6g.webp",
  },
  {
    title: "남해고속도로 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EB%82%A8%ED%95%B4%EA%B3%A0%EC%86%8D%EB%8F%84%EB%A1%9C%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.17201100000001, lng: 128.1592553 },
  },
  {
    title: "대구 봉덕동 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EB%8C%80%EA%B5%AC%20%EB%B4%89%EB%8D%95%EB%8F%99%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.82928880000001, lng: 128.595772 },
  },
  {
    title: "대구 여학생 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EB%8C%80%EA%B5%AC%20%EC%97%AC%ED%95%99%EC%83%9D%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.884342000000025, lng: 128.55580099999997 },
  },
  {
    title: "모영광 군 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EB%AA%A8%EC%98%81%EA%B4%91%20%EA%B5%B0%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.167835600000004, lng: 129.17907670000002 },
  },
  {
    title: "부산 신혼부부 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B6%80%EC%82%B0%20%EC%8B%A0%ED%98%BC%EB%B6%80%EB%B6%80%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.1531696, lng: 129.11866600000002 },
  },
  {
    title: "부산 엄궁동 초등생 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B6%80%EC%82%B0%20%EC%97%84%EA%B6%81%EB%8F%99%20%EC%B4%88%EB%93%B1%EC%83%9D%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.1273277, lng: 128.97103579999998 },
  },
  {
    title: "부산 여대생 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B6%80%EC%82%B0%20%EC%97%AC%EB%8C%80%EC%83%9D%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.18113940000001, lng: 129.167494 },
  },
  {
    title: "부산 중소기업 사장부부 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B6%80%EC%82%B0%20%EC%A4%91%EC%86%8C%EA%B8%B0%EC%97%85%20%EC%82%AC%EC%9E%A5%EB%B6%80%EB%B6%80%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.09742059999999, lng: 129.03036309999996 },
  },
  {
    title: "부평구 네모녀 연쇄 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EB%B6%80%ED%8F%89%EA%B5%AC%20%EB%84%A4%EB%AA%A8%EB%85%80%20%EC%97%B0%EC%87%84%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.49667250000002, lng: 126.72120890000002 },
    img: "https://image.fmkorea.com/files/attach/new/20200508/486263/799739237/2897754790/99b983892094b5c6d2fc3736e15da7d1.png",
  },
  {
    title: "서천 종천면 할머니 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EC%84%9C%EC%B2%9C%20%EC%A2%85%EC%B2%9C%EB%A9%B4%20%ED%95%A0%EB%A8%B8%EB%8B%88%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.111648399999986, lng: 126.69083 },
  },
  {
    title: "수원 자동차 영업사원 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EC%88%98%EC%9B%90%20%EC%9E%90%EB%8F%99%EC%B0%A8%20%EC%98%81%EC%97%85%EC%82%AC%EC%9B%90%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.28064569999999, lng: 126.9704299 },
    img: "https://wimg.mk.co.kr/meet/neds/2020/05/image_readtop_2020_452853_15884587444185113.jpg",
  },
  {
    title: "순천 여고생 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EC%88%9C%EC%B2%9C%20%EC%97%AC%EA%B3%A0%EC%83%9D%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 34.83185230000004, lng: 127.34163030000002 },
  },
  {
    title: "양산 여학생 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%96%91%EC%82%B0%20%EC%97%AC%ED%95%99%EC%83%9D%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.410134000000006, lng: 129.1445966 },
  },
  {
    title: "우정선 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%9A%B0%EC%A0%95%EC%84%A0%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.407114599999986, lng: 127.2575348 },
  },
  {
    title: "이방연 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EC%9D%B4%EB%B0%A9%EC%97%B0%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.46737090000003, lng: 126.9453359 },
    img: "https://img.sbs.co.kr/newimg/news/20140705/200762372_500.jpg",
  },
  {
    title: "이종운 변호사 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%9D%B4%EC%A2%85%EC%9A%B4%20%EB%B3%80%ED%98%B8%EC%82%AC%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.372737600000036, lng: 127.1228562 },
    img: "https://i.namu.wiki/i/ksg8m73IzK-n0WHn-XJsOsErcjSMweT2QP3u8vzGSqPl-qxs8aVKtUXa--sU4OK3j-ViQxNPW8ks2SPMpPS1x9Qw-esvYkH2uRoMRN0qqXWWaCLio6LvznOOqBGVjScQEKLX2X8LNxLlFIk5HCUxGA.webp",
  },
  {
    title: "전북대 수의대생 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%A0%84%EB%B6%81%EB%8C%80%20%EC%88%98%EC%9D%98%EB%8C%80%EC%83%9D%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.847770699999984, lng: 127.13022420000001 },
  },
  {
    title: "진천 초등학생 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%A7%84%EC%B2%9C%20%EC%B4%88%EB%93%B1%ED%95%99%EC%83%9D%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.98876009999999, lng: 127.43869429999998 },
  },
  {
    title: "천안 여고생 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%B2%9C%EC%95%88%20%EC%97%AC%EA%B3%A0%EC%83%9D%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.81561719999996, lng: 127.15176929999998 },
  },
  {
    title: "청주 부녀자 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EC%B2%AD%EC%A3%BC%20%EB%B6%80%EB%85%80%EC%9E%90%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.61140839999997, lng: 127.32784269999999 },
  },
  {
    title: "청주 여고생 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%B2%AD%EC%A3%BC%20%EC%97%AC%EA%B3%A0%EC%83%9D%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 36.61415679999999, lng: 127.50773530000001 },
  },
  {
    title: "최준원 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EC%B5%9C%EC%A4%80%EC%9B%90%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.60222719999997, lng: 127.10648379999998 },
  },
  {
    title: "춘천 목사 노부부 사망 및 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EC%B6%98%EC%B2%9C%20%EB%AA%A9%EC%82%AC%20%EB%85%B8%EB%B6%80%EB%B6%80%20%EC%82%AC%EB%A7%9D%20%EB%B0%8F%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.826790700000025, lng: 127.52418650000001 },
    img: "https://i1.daumcdn.net/thumb/C230x300/?fname=https://blog.kakaocdn.net/dn/IkrUa/btrVT5MmrHh/I7kKYrHAdgbSDu2Ac2hsUk/img.jpg",
  },
  {
    title: "경주 일본여대생 실종사건",
    date: "",
    link: "https://namu.wiki/w/%EA%B2%BD%EC%A3%BC%20%EC%9D%BC%EB%B3%B8%EC%97%AC%EB%8C%80%EC%83%9D%20%EC%8B%A4%EC%A2%85%EC%82%AC%EA%B1%B4",
    latlng: { lat: 35.78448370000002, lng: 129.32363679999997 },
  },
  {
    title: "송혜희 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%86%A1%ED%98%9C%ED%9D%AC%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.0537596, lng: 127.1088269 },
  },
  {
    title: "윤영실 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%9C%A4%EC%98%81%EC%8B%A4%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.52714780000001, lng: 127.0334517 },
    img: "https://i.namu.wiki/i/E4CpCgz-eEbUxB0z84YVlxYs0n0C6kI5VXseTxcLh5GPI9ip5mLcstGdjDo1Ua2ZItH82_jaGdO2Da8uKONEWsZG5p9Lm7c0N5i6XLW5hUJDS2nm5NVUZ_WTioHzqK17LRorxSYU5OG0DD_TnOR9Aw.webp",
  },
  {
    title: "조두형 유괴사건",
    date: "",
    link: "https://namu.wiki/w/%EC%A1%B0%EB%91%90%ED%98%95%20%EC%9C%A0%EA%B4%B4%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.55071369999998, lng: 126.96177809999995 },
    img: "https://i.namu.wiki/i/bH4LC_KPwwGLZZuHtQE6h1qvM3Zj1VEvn3Z5HaU0NKp2zpU_wsmGqr6EwcK_c8EfickpqsqKV9dKBD4BOxJ8fVn3FpLyIeidV0BPJ6KzHEzCEHkLcI4apvKOCWzqlcgsZyBvUJwY_gHBZMZ_pN1-3g.webp",
  },
  {
    title: "지한별 실종 사건",
    date: "",
    link: "https://namu.wiki/w/%EC%A7%80%ED%95%9C%EB%B3%84%20%EC%8B%A4%EC%A2%85%20%EC%82%AC%EA%B1%B4",
    latlng: { lat: 37.48960230000001, lng: 127.1187913 },
    img: "https://i.namu.wiki/i/Uf5NXujxxJIK9GAfae8IBQ8a0yxy181lWfFc3PfZjBRd2_M7bmG5cQZOIczsebEPvC3TJXGHKVyo2y4JL5975zOS7SdRHhDVzGvTVDP5erj5UzDmk6aM0wpd64WA0UUmwe7jtyG42Q5jykz0ogr-jQ.webp",
  },
];

export default missingCaseData;
