import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { LikeOutlined } from "@ant-design/icons";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageInput = styled.input`
  display: none;
`;

const uploadImagePage = () => {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [values, setValues] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          ...values,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };

  const onChangeValues = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };

  const onChangFile = async (event) => {
    try {
      const file = event.target.files?.[0];
      const imagedata = await uploadFile({ variables: { file } });
      setImageUrl(imagedata.data?.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <Wrapper>
      작성자 <input type="text" id="writer" onChange={onChangeValues} />
      비밀번호 <input type="text" id="password" onChange={onChangeValues} />
      제목 <input type="text" id="title" onChange={onChangeValues} />
      내용 <input type="text" id="contents" onChange={onChangeValues} />
      <ImageInput
        type="file"
        id="images"
        onChange={onChangFile}
        ref={fileRef}
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <LikeOutlined onClick={onClickImage} />
      <button onClick={onClickSubmit}>저장하기</button>
    </Wrapper>
  );
};

export default uploadImagePage;
