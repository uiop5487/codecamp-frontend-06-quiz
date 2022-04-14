//보너스 01
const classmates = [
    { name: "철수", age: 10, school: "토끼초등학교" },
    { name: "영희", age: 13, school: "다람쥐초등학교" },
    { name: "훈이", age: 11, school: "토끼초등학교" },
];

const aaa = classmates.filter((el) => el.school === "토끼초등학교");
const bbb = aaa.map((el) => ({ name: el.name, age: el.age, school: el.school, candy: 10 }));

console.log(bbb);

const ccc = classmates.filter((el) => el.school === "다람쥐초등학교");
const ddd = ccc.map((el) => ({ name: el.name + "어린이", age: el.age, school: el.school }));

console.log(ddd);

//보너스 02
export default function MapFruitsPage() {
    const fruits = [
        { number: 1, title: "레드향" },
        { number: 2, title: "샤인머스켓" },
        { number: 3, title: "산청딸기" },
        { number: 4, title: "한라봉" },
        { number: 5, title: "사과" },
        { number: 6, title: "애플망고" },
        { number: 7, title: "딸기" },
        { number: 8, title: "천혜향" },
        { number: 9, title: "과일선물세트" },
        { number: 10, title: "귤" },
    ];

    const asd = fruits.filter((el) => el.number % 2 === 0);

    return (
        <div>
            {asd.map((el) => (
                <div>
                    {el.number} {el.title}
                </div>
            ))}
        </div>
    );
}
