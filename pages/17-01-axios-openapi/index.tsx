import axios from "axios";
import { useState, useEffect } from "react";

const openApiuseEffectPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dogUrl, setDogUrl] = useState("");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const openApi = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    openApi();
  }, []);
  return (
    <div>
      <img src={dogUrl} />
    </div>
  );
};

export default openApiuseEffectPage;
