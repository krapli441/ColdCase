import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

const DisclaimerModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const disclaimerAccepted = localStorage.getItem("disclaimerAccepted");
    if (disclaimerAccepted) {
      setShowModal(false);
    } else {
      onOpen();
    }
  }, [onOpen]);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    onClose();
  };

  const textStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {showModal && (
        <Modal motionPreset="none" isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent maxWidth={"80vw"} maxHeight={"80vh"}>
            <ModalHeader textAlign={"center"} fontSize={"50px"}>
              안내문
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
              textAlign={"center"}
              fontSize={{ base: "14px", sm: "20px", md: "24px", lg: "24px" }}
            >
              이 사이트는 대한민국에서 발생한 미제 사건들을 기록하는
              사이트입니다.
              <br />
              <br />
              <Box className="murderText" style={textStyle}>
                <Image
                  src="./img/kill.png"
                  boxSize={{ base: "14px", sm: "24px", md: "24px", lg: "24px" }}
                  marginRight={"5px"}
                />
                <Text as="span" fontWeight="bold" color="red">
                  빨간색 마커
                </Text>
                는 미제 살인사건입니다.
              </Box>
              <Box className="missingText" style={textStyle}>
                <Image
                  src="./img/missing.png"
                  boxSize={{ base: "14px", sm: "24px", md: "24px", lg: "24px" }}
                  marginRight={"5px"}
                />
                <Text as="span" fontWeight="bold" color="yellow.400">
                  노란색 마커
                </Text>
                는 미제 실종사건입니다.
              </Box>
              <Box className="unknownText" style={textStyle}>
                <Image
                  src="./img/unknown.png"
                  boxSize={{ base: "14px", sm: "24px", md: "24px", lg: "24px" }}
                  marginRight={"5px"}
                />
                <Text as="span" fontWeight="bold" color="purple">
                  보라색 마커
                </Text>
                는 미제 의문사/변사체 사건입니다.
              </Box>
              <br />
              마커를 클릭하시면 해당 사건의 자세한 정보를 확인하실 수 있습니다.
              <br />
              정보를 읽으시는 중,&nbsp;
              <Text as="span" color="red">
                불쾌감이나 혐오감을 줄 수 있는 사진
              </Text>
              이 나올 수 있습니다.
            </ModalBody>
            <ModalFooter justifyContent={"center"}>
              <Button
                transition={"none"}
                size={"lg"}
                backgroundColor={"black"}
                color={"white"}
                onClick={handleAccept}
                _hover={{ backgroundColor: "black" }}
              >
                확인했습니다
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default DisclaimerModal;
