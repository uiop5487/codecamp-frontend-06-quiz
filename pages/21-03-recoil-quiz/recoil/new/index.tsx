import RecoilWriteQuizContainer from "../../../../src/componets/unit/example/write.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/store";
import { useEffect } from "react";

const RecoilQuizNewPage = () => {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(false);
  }, []);

  return <RecoilWriteQuizContainer isEdit={false} />;
};

export default RecoilQuizNewPage;
