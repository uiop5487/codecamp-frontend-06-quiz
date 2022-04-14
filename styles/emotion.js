import styled from '@emotion/styled'

export const Error = styled.div`
    color: red;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
`


    // function signButton() {
    //     // if (!email.includes("@") && password === password2) {
    //     //     setError("이메일에 @가 없습니다.")
    //     //     setError2("비밀번호가 같지 않습니다.")
    //     // } else
    //     if (!email.includes("@")) {
    //         setError("이메일에 @가 없습니다.")
    //         setError2("")
    //     } else if(password !== password2) {
    //         setError2("비밀번호가 올바르지 않습니다.")
    //         setError("")
    //     } else if (!email.includes("@") && password !== password2) {
    //         setError("이메일에 @가 없습니다.")
    //         setError2("비밀번호가 같지 않습니다.")
    //     } else {
    //         alert("가입")
    //         setError("")
    //         setError2("")
    //     }
    // }