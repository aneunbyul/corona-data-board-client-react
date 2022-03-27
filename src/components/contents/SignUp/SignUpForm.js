import * as React from 'react';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import {Container, Stack, TextField, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {atom, useRecoilState, useRecoilValue} from "recoil";
import {idState} from './atoms'

const SignUpForm = () => {

  // const idValue = useRecoilValue(idState)

  const [idValue, setIdValue] = useRecoilState(idState);

  const onChange = (event) => {
    setIdValue(event.target.value);
  };

  return (
    <Container>
      <Stack direction={"row"}>
        <Typography>아이디</Typography>
        <TextField id="standard-basic" label="아이디 입력" variant="standard" value={idValue} onChange={onChange}/>
      </Stack>
      <Stack direction={"row"}>
        <Typography>비밀번호</Typography>
        <TextField id="standard-basic" label="비밀번호 입력" variant="standard"/>
      </Stack>
      <Stack direction={"row"}>
        <Typography>비밀번호 확인</Typography>
        <TextField id="standard-basic" label="비밀번호 입력" variant="standard"/>
      </Stack>
      <Button variant="contained">회원가입</Button>

      <div>
        {idValue}님 환영합니다
      </div>
    </Container>
  );
}

export default SignUpForm
