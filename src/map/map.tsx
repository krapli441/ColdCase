// 리액트 라이브러리
import React, { useState, useEffect } from "react";

// 리액트 컴포넌트
import getCurrentPosition from "./geolocation";
import CaseMarkers from "./caseMarker";

// 외부 라이브러리
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

// Chakra UI
import {
  Box,
  Text,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

// 사건 데이터
import murderCase from "../case/murderCase"; // 살인사건 데이터
import missingCase from "../case/missingCase"; // 실종사건 데이터
import unknownCase from "../case/unknownCase"; // 의문사 사건 데이터

// 미제 사건 유형을 하나로 합침
const murder = [...murderCase];
const missing = [...missingCase];
const unknown = [...unknownCase];

// 마커 이미지
const murderImage = { src: "./img/kill.png", size: { width: 24, height: 35 } };
const missingImage = {
  src: "./img/missing.png",
  size: { width: 24, height: 35 },
};
const unknownImage = {
  src: "./img/unknown.png",
  size: { width: 24, height: 35 },
};

// 커스텀 오버레이 스타일
const infoWindowStyle = {
  display: "flex",
  bottom: "40px", // 마커 높이에 맞게 조정
  padding: "5px",
  left: "50%", // 부모 요소의 중앙에 위치
  transform: "translateX(-50%)", // 자신의 너비의 절반만큼 왼쪽으로 이동
  color: "#000",
  backgroundColor: "white",
  borderRadius: "5px",
  boxShadow: "1px 1px 5px 1px rgba(0,0,0,0.5)",
};

const KakaoMap: React.FC = () => {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [center, setCenter] = useState({ lat: 36.5, lng: 127.5 }); // 대한민국 중심 좌표

  const [loading, setLoading] = useState(true);
  const [openedMurderCaseInfoWindow, setOpenedMurderCaseInfoWindow] = useState<
    number | null
  >(null); // 살인사건 클릭에 대한 상태 관리

  const [openedMissingCaseInfoWindow, setOpenedMissingCaseInfoWindow] =
    useState<number | null>(null); // 실종사건 클릭에 대한 상태 관리

  const [openedUnknownCaseInfoWindow, setOpenedUnknownCaseInfoWindow] =
    useState<number | null>(null); // 신원미상 & 의문사 클릭에 대한 상태 관리

  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getCurrentPosition()
      .then((coords) => {
        setUserLocation({ lat: coords.latitude, lng: coords.longitude });
        setLoading(false);
      })
      .catch(() => {
        // 위치 정보를 가져오지 못했을 때의 처리
        setUserLocation({ lat: 36.14709004467551, lng: 127.87682888504136 });
        setLoading(false);
      });
  }, []);

  if (loading || !userLocation) {
    return (
      <>
        <Box
          className="loading-screen"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Spinner color="red.500" size={"lg"} />
          <Text color={"white"}>지도를 불러오는 중입니다.</Text>
        </Box>
      </>
    );
  }

  return (
    <Map
      center={center}
      style={{ width: "90vw", height: "80vh" }}
      level={13}
      isPanto={true}
    >
      <MapMarker position={userLocation} clickable={true} onClick={onOpen}>
        <Button onClick={onOpen}>자세히 보기</Button>
      </MapMarker>
      {isOpen && (
        <>
          <CustomOverlayMap position={userLocation}>
            <Modal
              motionPreset="none"
              isOpen={isOpen}
              onClose={onClose}
              isCentered
            >
              <ModalOverlay />
              <ModalContent
                maxWidth={"80vw"}
                maxHeight={"80vh"}
                overflowY={"scroll"}
              >
                <ModalHeader fontSize={"4xl"}>천안 토막 살인 사건</ModalHeader>
                <Box
                  className="evidencePicture"
                  display={"flex"}
                  flexWrap={"wrap"}
                >
                  <Image
                    boxSize={"max-content"}
                    src="https://i.namu.wiki/i/mXNlhJnQP7mMEWg2ieBemyaTtsuYq9aU2dx-ShbzvsKRS-7b20PE7rggRg8_Nl3_aPzc6Hz_MSWM-Drv3vIyaPxbsVFaxyZLKdZ1VciMAdZXk0AxpkMrpGuYMslKKxnmJtbce3Jtj92boSjgNmuoiQ.webp"
                  />
                  <Image
                    boxSize={"max-content"}
                    src="https://i.namu.wiki/i/RjP7vtxM-QOYA2cJYDXv-zwM9EWL2_26u1P2ta1cWXMieXSe8TZn2CexxfWddVwkG_wllJsu4-PDgGeucdqHV03O0YJWtZcJkOhrv_Z8sctpGrpZkKUndjYqK39V4ca0qlmTOjAy37Av3cuarCbBBQ.webp"
                  />
                  <Image
                    boxSize={"max-content"}
                    src="https://i.namu.wiki/i/E3Z50TYE56MCrcHqatjjuwkNwFcD1A2F4g3w5EF4YRebxef1RGXSddMpPJ4cTbVL9rY66k7fugHoDKHIwZ5OPp_NDviEzU2csPdLAMoiqpeNUZXK-oPv03hBloCve4nfXr7uSm__OuIc77-yoHS1eA.webp"
                  ></Image>
                </Box>
                <ModalHeader fontSize={"3xl"}>개요</ModalHeader>
                <ModalCloseButton />
                <ModalBody fontSize={"lg"}>
                  2006년 1월 10일 오전 9시 20분쯤 충청남도 천안시 성환읍 성월2길
                  19 대성하이츠빌라 쓰레기 적치장에서&nbsp;
                  <Text as="span" fontWeight={"bold"}>
                    신원을 알 수 없는 여성 변사체
                  </Text>
                  가
                  <br /> 고물을 수거하던 고물 수집상 43살 신 모씨에 의해 발견된
                  사건입니다.
                </ModalBody>
                <ModalHeader fontSize={"2xl"}>
                  쓰레기들 사이에서 발견된 변사체
                </ModalHeader>
                <ModalBody fontSize={"lg"}>
                  그날 신 씨는 이른 아침부터 고물을 찾아 쓰레기 적치장에서
                  쓰레기 더미를 뒤지고 있었는데, 그 중에서 헌 옷으로 꽁꽁 싸여진
                  채 버려진 쓰레기 봉투를 발견했다고 합니다.
                  <br />
                  헌 옷은 일반 파지나 고철보다 단가가 약 두 배 이상 높았기에 신
                  씨는 봉투를 가져가려 했으나, 이상하게도 옷이 들었다기에는
                  쓰레기봉투가 한 손으로 들기 버거울 정도로 무거웠습니다.
                  <br />
                  <br />
                  단순히 젖은 옷으로 생각한 신 씨가 봉투 안을 뜯어보니 무언가
                  묵직한 것들이 검은 비닐봉지와 헌옷에 이중으로 싸여서 들어
                  있었고
                  <br />
                  이를 풀어보니 나온 것은 예리한 흉기로 목과 다리 등 관절 부분이
                  잘려{" "}
                  <Text as="span" fontWeight={"bold"} color={"red"}>
                    7부분으로 토막난 사람의 시체
                  </Text>
                  였습니다.
                  <br />
                  <br />
                  이에 신 씨는 즉시 경찰에 신고했고 10분 뒤 경찰이 사건 현장에
                  도착했습니다. 그런데 발견한 시체에서는 팔과 몸통이 보이지
                  않았기에 경찰은 쓰레기 적치장을 샅샅이 수색했지만
                  <br />
                  나머지 부위나 유류품 등 단서 일체를 발견하지 못했습니다. 특히,
                  팔이 잘려나간 탓에{" "}
                  <Text as="span" fontWeight={"bold"}>
                    지문 대조가 불가능
                  </Text>
                  했습니다.
                  <br />
                  <br />
                  결국 시신은 나머지 부위를 전부 발견하지 못한 채로 수습되어
                  국과수에 보내졌고, 시신의 감식 결과 다음과 같은 사실을 알 수
                  있었습니다.
                  <br />
                  <br />
                  <UnorderedList>
                    <ListItem>50대 중후반으로 추정되는 여성</ListItem>
                    <ListItem>키는 150~155cm로 추정</ListItem>
                    <ListItem>계란형 얼굴로 이마가 넓고 쌍꺼풀이 없음</ListItem>
                    <ListItem>돌출형 입</ListItem>
                    <ListItem>미간사이 옅은 점</ListItem>
                    <ListItem>77사이즈, 통통한 체형으로 추정</ListItem>
                    <ListItem>
                      윗 앞니와 왼쪽 아래 어금니 3개 발치 후 보철치료를 함
                    </ListItem>
                    <ListItem>사인은 목이 졸려 사망한 것으로 추정</ListItem>
                    <ListItem>사망한 지 1~2일 정도 경과함</ListItem>
                    <ListItem>
                      절단한 부위들이 상당히 깨끗하게 잘려나감
                    </ListItem>
                  </UnorderedList>
                  <br />
                  독특하게도 시신의 훼손부위는 불필요한 훼손이 없이 너무나도
                  깔끔하게 관절 부위만 절단되어 있었습니다. 법의학자와 같은
                  전문가들도 힘들어하는 작업이기 때문에 경찰은 범인의 직업을
                  정형사나 또는 적어도 도축을 한 경험이 있는 사람으로 보았으며,
                  실제 정형사들도 시신 사진들을 보고 발골의 경험이 있는 사람의
                  소행으로 보았습니다.
                  <br />
                  <br />
                  이를 토대로 경찰은 사건 현장 인근에 위치한 도축을 전문으로
                  하는 업체와 그 업체에 근무하는 사람들을 대상으로 조사를
                  벌였지만, 유력한 단서는 찾지 못했습니다.
                  <br />
                  <br />
                  시신의 앞니에는 독특하게도 중국인이나 조선족에게 자주 나타나는
                  v자형 홈이 있다는 특징이 남아 있었는데, 이는 껍데기가 있는
                  해바라기씨를 어렸을 때부터 자주 까먹어서 생기는 특징으로
                  중국인 혹은 중국 내의 조선족들에게 많이 나타나는 특성이라고
                  합니다. 물론 한국에서도 해바라기씨를 간식으로 간혹 먹지만 보통
                  겉 껍데기를 미리 까서 먹기 편하게 처리하고 판매하는 게 많은데
                  중국, 베트남, 튀르키예 등은 사먹는 사람이 앞니로 씨앗
                  겉껍데기를 직접 하나하나 까서 먹도록 파는 게 대부분이라고
                  합니다.
                  <br />
                  <Text as="span" fontWeight={"bold"}>
                    즉 피해자가 한국 국적이 아니었기에
                  </Text>
                  , 내국인을 상대로 벌인 조사에서 신원을 파악하지 못했을 경우도
                  있다는 것이죠.
                </ModalBody>
                <ModalHeader fontSize={"2xl"}>난항에 빠진 수사</ModalHeader>
                <ModalBody fontSize={"lg"}>
                  70명의 수사진으로 전담반을 구성한 경찰은 피해자의 얼굴을
                  토대로 몽타주를 그려서 천안은 물론 인근 지역인 아산, 평택,
                  안성에 이르기까지 4만 5천장을 배포하였고
                  <br />
                  심지어 이 사건과 피해자의 몽타주가 실린 신문을 만들어 중국으로
                  배포했으며, 특명 공개수배를 통해 방송에서도 공개적으로
                  신원수배를 하였으며 25만명을 대상으로 수사를 했지만 <br />{" "}
                  범인은 커녕 피해자의 신원조차 밝혀지지 않은 채 오리무중에
                  빠졌습니다. 시신의 치아 상태에도 주목해 천안시내 모든 치과를
                  통해 확보한 13만건의 진료 기록을 조회하고 <br /> 천안시와 인근
                  아산시, 연기군에 이르는 지역의 모든 치과병원을 수사했으나,
                  성과는 없었습니다.
                  <br />
                  <br /> 단 사건 당일 쓰레기를 수거한 환경미화원의 진술을 토대로
                  시신이 유기된 시간만은 유추할 수가 있었는데, 당일 새벽 3시경에
                  쓰레기를 수거한 미화원은
                  <br /> 시신이 들어있는 50리터 흰색 쓰레기봉투는 보지 못했다고
                  진술한것으로 보아 범인이 시신을 유기한 시각은 새벽 3시
                  이후부터 오전 9시 경까지로 추정됩니다.
                  <br />
                  <br />
                  한편 경찰은 시신과 같이 쓰레기봉투에 들어있었던 11점의 헌 옷과
                  이 옷들의 출처를 토대로 피해자의 신원을 추적하기 시작했습니다.
                  <br />
                  피해자의 옷들로 추정되는 옷들은 대부분 한국에서 알려지지
                  않았고 판매되지도 않는 중국에서 판매되는 브랜드였고, 함께
                  유류품으로 남은 의류 중에서는 <br />
                  범인의 것으로 보이는 건설 현장에서 쓰이는 페인트와 폴리우레탄
                  부스러기가 묻은 남성용 바지가 발견되었습니다.
                  <br />
                  경찰은 유류품 중에서 발견된 한국에서 제조된 빨간 바지와 이를
                  구매한 9건의 기록을 토대로 신원을 추적했으나 옷을 구입한 9명
                  중 7명은 카드로 계산하여 신원이 확인되었고
                  <br />
                  현금으로 구매한 나머지 2명 중에서도 1명은 신원이 확인되었지만
                  2005년 12월 24일에 구입한 나머지 1명의 신원파악이 안 된걸로
                  봐서는 이 구매자가 피해자일 가능성이 높았습니다.
                  <br />
                  하지만 CCTV의 기록은 지워진 상태였고 구매하는 것을 목격한
                  사람은 나타나지 않아 유류품을 통해 피해자와 범인의 신원을
                  파악하는 시도도 물거품으로 돌아가게 됩니다.
                  <br />
                  <br />
                  한편 사건을 전담한 수사진들은 범인이 시신을 유기하면서 범인과
                  피해자의 의류를 한 군데에 몽땅 모아 버린 모습에서 범인의{" "}
                  <Text as="span" fontWeight={"bold"}>
                    두려움과 공포
                  </Text>
                  를 추측했습니다.
                  <br />
                  <br />
                  쓰레기봉투에 담아 길가의 쓰레기장에 유기한 것은 쓰레기장에
                  쓰레기와 함께 유기하면 자연스럽게 쓰레기차가 수거해가며
                  <br />
                  완전범죄를 이룰 수 있을것이라 생각했기 때문에 이런 방법으로
                  유기된 것으로 추정했으며, 그렇다면 굳이 멀리 있는 지역에서
                  <br />
                  범행 현장까지 와서 유기하는 방법을 선택하지는 않을테니범인은
                  현장 주변에서 살던 사람일 가능성이 높다고 추측했습니다.
                </ModalBody>
                <ModalHeader fontSize={"2xl"}>원점으로 돌아간 수사</ModalHeader>
                <ModalBody fontSize={"lg"}>
                  그러던 7개월 후, 서울특별시 성동구 송정동 중랑하수처리장에서
                  한 직원이 검은 비닐봉투를 발견했습니다. 그 안에는 {""}
                  <Text as={"span"} fontWeight={"bold"}>
                    팔과 몸통만 들어있는 시체
                  </Text>
                  가 들어있었습니다. <br />
                  국과수의 감식 결과 이 시신의 주인은 6개월~1년 전에 사망한
                  것으로 추정되었고 중년 여성으로 밝혀졌습니다. <br />이 결과에
                  경찰은 매우 흥분했는데 천안시에서 발견된 시신은 팔과 몸통이
                  없었고, 성동구에서 발견된 시신은 팔과 몸통만 남아 있었기
                  때문입니다. 거기다 사망 시점도 대체적으로 일치했습니다.
                  <br />
                  <br />
                  만일 이 시신이 천안시에서 발견된 시신의 일부라면 약 100km에
                  가까운 거리를 두고 운반된 셈이었습니다.
                  <br /> 일단 발견된 시신의 DNA를 조회하기 위해 국과수에 조회를
                  맡기고 천안경찰서와 성동경찰서는 공조수사를 시작했습니다.
                  <br />
                  <br />
                  하지만, 두 지역에서 발견된 시신은 {""}
                  <Text as="span" fontWeight={"bold"}>
                    DNA가 불일치
                  </Text>
                  했습니다. 이렇게 사건은 원점으로 돌아갔고 현재도 시신의 신원은
                  밝혀지지 않고 있습니다.
                  <br />
                  <br />
                  성동구에서 발견된 시신은 남편이 의처증으로 부인을 살인하였던
                  것으로, 범인이 검거되었습니다.
                </ModalBody>
                <ModalHeader fontSize={"2xl"}>현재</ModalHeader>
                <ModalBody fontSize={"lg"}>
                  결국 시신은 무연고자로 분류되어 천안시 동남구의 무연고 묘지에
                  매장되었으며, 사건은 충남지방경찰청 미제사건수사팀으로
                  이관되어 남아있는 출입국사무소의 자료를 토대로 수사 중입니다.
                  <br />
                  당시 사건의 수사를 맡은 수사관은 누군가의 아내이자 어머니였을
                  피해자의 죽음이 퇴직 후에도 여전히 생각이 난다며 깊은 아쉬움을
                  남겼습니다.
                  <br /> 더불어 이 사건은 국내의 외국인들과 외국교포들이 얼마나
                  범죄에 취약한지 다시 깨닫게 해주는 사건이기도 합니다.
                  <br />
                  <br />
                  변사자의 신원을 알고 있는 사람은 천안서북경찰서 041-536-1325로
                  제보해주세요.
                </ModalBody>
                <ModalFooter>
                  <Button
                    transition={"none"}
                    size={"lg"}
                    backgroundColor={"black"}
                    color={"white"}
                    _hover={{ backgroundColor: "black" }}
                    onClick={onClose}
                  >
                    닫기
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </CustomOverlayMap>
        </>
      )}

      {/* 살인사건 마커 */}
      <CaseMarkers
        cases={murder}
        markerImage={murderImage}
        setOpenedCaseInfoWindow={setOpenedMurderCaseInfoWindow}
        openedCaseInfoWindow={openedMurderCaseInfoWindow}
        infoWindowStyle={infoWindowStyle}
        setCenter={setCenter}
      />
      {/* 실종사건 마커 */}
      <CaseMarkers
        cases={missing}
        markerImage={missingImage}
        setOpenedCaseInfoWindow={setOpenedMissingCaseInfoWindow}
        openedCaseInfoWindow={openedMissingCaseInfoWindow}
        infoWindowStyle={infoWindowStyle}
        setCenter={setCenter}
      />
      {/* 의문사 사건 마커 */}
      <CaseMarkers
        cases={unknown}
        markerImage={unknownImage}
        setOpenedCaseInfoWindow={setOpenedUnknownCaseInfoWindow}
        openedCaseInfoWindow={openedUnknownCaseInfoWindow}
        infoWindowStyle={infoWindowStyle}
        setCenter={setCenter}
      />
    </Map>
  );
};

export default KakaoMap;
