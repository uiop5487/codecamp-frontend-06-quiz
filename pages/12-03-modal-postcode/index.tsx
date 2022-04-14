import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const ModalPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const Toggle = () => {
    setIsModalVisible((prev) => !prev);
  };
  const handleComplete = (data: any) => {
    console.log(data);
    Toggle();
  };

  return (
    <>
      <Button type="primary" onClick={Toggle}>
        모달열기
      </Button>
      {isModalVisible && (
        <Modal
          title="게시글이 등록"
          visible={true}
          onOk={Toggle}
          onCancel={Toggle}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default ModalPage;
