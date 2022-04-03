import * as React from 'react';
import Button from '@mui/material/Button'
import {Container, Stack, TextField, Typography} from "@mui/material";
import axios from "axios";
import {useHistory} from "react-router";
import {useState} from "react";
import {encryptoToken} from "../../../Common/crypto";
import {login} from "../../../api";
import {router} from "next/client";

const SignInForm = () => {

  // const history = useHistory();
  const [, forceUpdate] = useState({});
  const onFinish = (values) => {
    console.log("Success:", values);
    window.sessionStorage.removeItem("telepixer_accessToken");
    window.sessionStorage.removeItem("telepixer_refreshToken");
    handleLogin(values);
    router.push('/');
  };

  const handleLogin = async (values) => {
    const data = await login({...values, type: "FORM"});
    console.log(data);
    if (data) {
      const {access_token, refresh_token} = data;
      const access = encryptoToken(access_token);
      const refresh = encryptoToken(refresh_token);
      window.sessionStorage.setItem("telepixer_accessToken", access);
      window.sessionStorage.setItem("telepixer_refreshToken", refresh);
      history.push("/news");
    } else {
      console.log("로그인 실패, 아이디와 비밀번호를 확인해주세요");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //
  // //fake server로 보낸 로그인 데이터
  // function onLoggin() {
  //   const email = document.getElementById("email");
  //   const password = document.getElementById('password')
  //   axios({
  //     method: "POST",
  //     url: 'https://reqres.in/api/login',
  //     data: {
  //       "email": email.value,
  //       "password": password.value
  //     }
  //   }).then((res) => {
  //     console.log(res);
  //     const accessToken = res.data.token;
  //
  //     //쿠키에 토큰 저장
  //     setCookie("is_login", `${accessToken}`);
  //     document.location.href = "/";
  //   }).catch(error => {
  //     console.log(error);
  //     throw new Error(error);
  //   });
  // }


  return (
    <Container sx={{
      display: 'flex', flexDirection: 'column', width: '25rem', marginTop: '10vh',
      justifyContent: 'space-between',
      alignItems: 'center',

    }}>
      <
        Stack
        direction={"row"}
      >
        < Typography alignSelf={"center"} margin={'1rem'}> 이메일 < /Typography>
        <TextField id="email" label="이메일 입력" variant="outlined" margin='normal'/>
      </Stack>
      <Stack direction={"row"}>
        <Typography alignSelf={"center"} margin={'1rem'}>비밀번호</Typography>
        <TextField type={"password"} id="password" label="비밀번호 입력" variant="outlined" margin='normal'/>
      </Stack>
      <Button onClick={onFinish} variant="contained" fullWidth sx={{marginTop: '1rem'}}>로그인</Button>

    </Container>
  )
}

export default SignInForm
