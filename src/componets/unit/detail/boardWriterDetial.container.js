import { Router, useRouter } from "next/router";
import BoardWirteDetailUI from "./boardWriterDetial.presenter";
import { FETCH_BOARD } from "./boardWriterDetial.quries";
import { useQuery } from "@apollo/client";

export default function BoardWirteDetial() {
    const router = useRouter();
    console.log(router);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) },
    });

    console.log(data);
    return <BoardWirteDetailUI data={data} />;
}
