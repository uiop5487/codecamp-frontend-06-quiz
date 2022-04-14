import { useState } from "react";
import axios from "axios";

const RestApi = () => {
    const [data, setData] = useState("");
    const [num, setNum] = useState();

    const saveNum = (event) => {
        Number(setNum(event.target.value));
    };

    const RestApiButton = async () => {
        const myData = await axios.get("https://koreanjson.com/users");
        console.log(myData);
        setData(myData.data[num].username);
    };

    return (
        <div>
            <div>{data}</div>
            <button onClick={RestApiButton}>Rest-API 요청하기</button>
            <input type="text" onChange={saveNum} />
        </div>
    );
};

export default RestApi;
