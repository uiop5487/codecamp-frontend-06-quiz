import { useState } from 'react'
import { Error, Wrapper } from '../../../styles/emotion'




export default function Quiz() {

     //1.1 text 변경
     function changeButton() {
        let text = document.getElementById('changeButton').innerText
         if(text === "안녕하세요.") {
             document.getElementById('changeButton').innerText = "반갑습니다."
         } else {
            let text = document.getElementById('changeButton').innerText = "안녕하세요."
         }
     }

    //1.2 text 변경
    const [hello, setHello] = useState("안녕하세요.")

    function changeText() {
        if(hello === "반갑습니다.") {
            setHello("안녕하세요.")
        } else {
            setHello("반갑습니다.")
        }
     }

     //2.1 카운트증가
     function counterNum() {
         let result = Number(document.getElementById("count").innerText)
         document.getElementById("count").innerText = result + 1
     }

    //2.2 카운트증가
    const [num, setNum] = useState(0)

    function counter() {
        setNum(num + 1)
    }

    //3.1 인증번호 생성
    function randomToken1() {
        let token = (String(Math.floor(Math.random() * 1000000)).padStart(6,"0"))
        document.getElementById("token").innerText = token;
    }
    //3.2 인증번호 생성
    const [random, setRandom] = useState("000000")

    function randomToken() {
        setRandom(String(Math.floor(Math.random() * 1000000)).padStart(6,"0"))
    }

    //4 state를 활용한 회원가입 폼 만들기
    const [isValid, setIsValid] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState("")
    const [error2, setError2] = useState("")

    function savedEmail(event) {
        setEmail(event.target.value)
    }

    function savedPassword(event) {
        setPassword(event.target.value)
    }

    function savedPassword2(event) {
        setPassword2(event.target.value)
    }

    function signButton(){

        setIsValid(true)

        if(email.includes("@") === false) {
            setError("이메일이 올바르지 않습니다.")
            setIsValid(false)
        } else {
            setError("")
        }

        if(password === ""){
            setError2("비밀번호를 입력해 주세요.")
            setIsValid(false)
        } else {
            setError2("")
        }

        if(password2 === ""){
            setError2("비밀번호를 입력해 주세요.")
            setIsValid(false)
        } else {
            setError2("")
        }

        if(password !== password2) {
            setError2("비밀번호가 일치하지 않습니다.")
            setIsValid(false)
        }

        if(isValid === true){
            alert("가입완료")
        }
    }



    return (
        <Wrapper>
            {/* 1.1 text 변경 */}
            <button id='changeButton' onClick={changeButton}>안녕하세요.</button>
            {/* 1.2 text 변경 */}
            <button onClick={changeText}>{hello}</button><br/><br/>

            {/* 2.1 카운트증가 */}
            <div id='count'>0</div>
            <button onClick={counterNum}>카운트증가</button>
            {/* 2.2 카운트증가 */}
            <div>{num}</div>
            <button onClick={counter}>카운트증가</button><br/><br/>

            {/* 3.1 인증번호 생성 */}
            <div id="token">000000</div>
            <button onClick={randomToken1}>인증번호생성</button>
            {/* 3.2 인증번호 생성 */}
            <div>{random}</div>
            <button onClick={randomToken}>인증번호생성</button><br/><br/>

            {/* state를 활용한 회원가입 폼 */}
            이메일<input type="text" onChange={savedEmail}/><br/>
            <Error>{error}</Error>
            비밀번호<input type="password" onChange={savedPassword}/>
            비밀번호 확인<input type="password" onChange={savedPassword2}/>
            <Error>{error2}</Error>
            <button onClick={signButton}>가입하기</button>
        </Wrapper>
    )


}