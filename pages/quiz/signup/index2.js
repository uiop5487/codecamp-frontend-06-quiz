import{
    Body,
    Wrapper,
    Error,
    H3,
    Inputbox,
    Phone__wrapper,
    PhoneNum,
    Token__wrapper,
    Token,
    Token__timer,
    // Token__button,
    Token__timer__confirm__button,
    Location,
    Gender__wrapper,
    Gender,
    Hr,
    Signup__button,
    Token__button
     } from '../../../styles/emotion1'
import { useState } from 'react'


export default function SignupPage() {

    const [phone1, setPhone1] = useState("")
    const [phone2, setPhone2] = useState("")
    const [phone3, setPhone3] = useState("")
    const [error, setError] = useState("")
    const [token__button, setToken__button] = useState()

    // function phone1Value(event) {
    //     setPhone1(event.target.value)
    // }

    // function phone2Value(event) {
    //     setPhone2(event.target.value)
    // }

    // function phone3Value(event) {
    //     setPhone3(event.target.value)
    // }

    function changePhone1(event){
        setPhone1(event.target.value)
        if(phone1.length === 3) {
            changePhone2.focus()
        }
    }
    
    function changePhone2(event){
        setPhone2(event.target.value)
        if(phone2.length === 4) {
            phone3.focus
        }
    }
    
    function changePhone3(event){
        setPhone1(event.target.value)
        setPhone2(event.target.value)
        setPhone3(event.target.value)
        if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4){
            setToken__button(style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;")
            setToken__button.removeAttribute("disabled")
        }
    
    }
    
    function getToken(){
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("token").innerText = token
    
        document.getElementById("token__button").style = "background-color: #FFFFFF; cursor: default;"
        document.getElementById("token__button").setAttribute("disabled", "true")
        document.getElementById("token__timer__confirm__button").style="background-color: #0068FF; color: #FFFFFF; cursor: pointer;"
        document.getElementById("token__timer__confirm__button").removeAttribute("disabled")
        getTokenTimer()
    }
    
    let interval;
    function getTokenTimer(){
        let timer = 10
        interval = setInterval(() => {
            if(timer >= 0){
                const minutes = Math.floor(timer / 60)
                const seconds = timer % 60
    
                document.getElementById("token__timer").innerText = minutes + ":" + String(seconds).padStart(2, "0")
                timer -= 1
            } else {
                document.getElementById("token").innerText = "000000"
                document.getElementById("token__button").style = ""
                document.getElementById("token__button").setAttribute("disabled", "true")
                
                document.getElementById("token__timer").innerText = "3:00"
                document.getElementById("token__timer__confirm__button").style = ""
                document.getElementById("token__timer__confirm__button").setAttribute("disabled", "true")
                
                clearInterval(interval)
            }
        }, 1000)
    }
    
    function getTokenTimerConfirm(){
        clearInterval(interval)
        document.getElementById("token__timer__confirm__button").style = "background-color: #FFFFFF; cursor: default;"
        document.getElementById("token__timer__confirm__button").setAttribute("disabled", "true")
        document.getElementById("token__timer__confirm__button").innerText = "인증완료"
        alert("인증이 완료되었습니다.")
    
        document.getElementById("signup__button").style = "background-color: #FFFFFF; color: #0068FF; border: 1px solid #0068FF ;cursor: pointer;"
        document.getElementById("signup__button").removeAttribute("disabled")
    }
    
    function signup(){
        const email = document.getElementById("email").value
        const writer = document.getElementById("writer").value
        const password1 = document.getElementById("password1").value
        const password2 = document.getElementById("password2").value
        const location = document.getElementById("location").value
        const genderWoman = document.getElementById("gender__woman").checked
        const genderMan = document.getElementById("gender__man").checked
    
        let isValid = true
        if(email.includes("@") === false) {
            document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다."
            isValid = false
        } else {
            document.getElementById("error__email").innerText = ""
        }
    
        if(writer === "") {
            document.getElementById("error__writer").innerText = "이름이 올바르지 않습니다."
            isValid = false
        } else {
            document.getElementById("error__writer").innerText = ""
        }
    
        if(password1 === ""){
            document.getElementById("error__password1").innerText = "비밀번호를 입력해 주세요."
            isValid = false
        } else {
            document.getElementById("error__password1").innerText = ""
        }
    
        if(password2 === ""){
            document.getElementById("error__password2").innerText = "비밀번호를 입력해 주세요."
            isValid = false
        } else {
            document.getElementById("error__password2").innerText = ""
        }
    
        if(password1 !== password2) {
            document.getElementById("error__password1").innerText = "비밀번호가 일치하지 않습니다."
            document.getElementById("error__password2").innerText = "비밀번호가 일치하지 않습니다."
            isValid = false
        }
    
        if(location !== "서울" && location !== "경기" && location !== "인천"){
            document.getElementById("error__location").innerText = "지역을 선택해 주세요."
            isValid = false
        } else {
            document.getElementById("error__location").innerText = ""
        }
    
        if(genderWoman === false && genderMan === false){
            document.getElementById("error__gender").innerText = "성별을 선택해 주세요."
            isValid = false
        } else {
            document.getElementById("error__gender").innerText = ""
        }
    
        if(isValid === true){
            alert("코드캠프 가입을 축하합니다.")
        }
    }


    return (
            <Body>
                <Wrapper>
                <H3>코드캠프 회원가입</H3>
                <Inputbox id="email" type="text" placeholder="이메일을 입력해 주세요."/>
                <Error>{error}</Error>
                <Inputbox id="writer" type="text" placeholder="이름을 입력해 주세요."/>
                <Error>{error}</Error>
                <Inputbox id="password1" type="password" placeholder="비밀번호를 입력해 주세요."/>
                <Error>{error}</Error>
                <Inputbox id="password2" type="password" placeholder="비밀번호를 다시 입력해 주세요."/>
                <Error>{error}</Error>
                <Phone__wrapper>
                    <PhoneNum type="text" onChange={changePhone1}/> -
                    <PhoneNum type="text" onChange={changePhone2} placeholder={phone2}/> -
                    <PhoneNum type="text" onChange={changePhone3} placeholder={phone3}/>
                </Phone__wrapper>
                <Token__wrapper>
                    <Token id="token">000000</Token>
                    <Token__button id="token__button" onclick="getToken()" disabled>인증번호 전송</Token__button>
                </Token__wrapper>
                <Token__wrapper>
                    <Token__timer id="token__timer">3:00</Token__timer>
                    <Token__timer__confirm__button id="token__timer__confirm__button" onclick="getTokenTimerConfirm()" disabled>인증 완료</Token__timer__confirm__button>
                </Token__wrapper>
                {/* class="location__wrapper" */}
                <div>
                    <Location id="location">
                        <option disabled selected>지역을 선택하세요.</option>
                        <option>서울</option>
                        <option>경기</option>
                        <option>인천</option>
                    </Location>
                </div>
                <Error id="error__location"></Error>
                <Gender__wrapper>
                    <Gender>
                        <input type="radio" name="gender" id="gender__woman" class="gender__radio"/> 여성
                    </Gender>
                    <Gender>
                        <input type="radio" name="gender" id="gender__man" class="gender__radio"/> 남성
                    </Gender>
                </Gender__wrapper>
                <Error id="error__gender"></Error>
                <Hr />
                <footer class="footer">
                    <Signup__button id="signup__button" onclick="signup()" disabled>가입하기</Signup__button>
                </footer>
            </Wrapper>
            </Body>
    )
}