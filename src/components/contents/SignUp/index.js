import * as React from 'react';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import {TextField} from "@mui/material";
import SignUpForm from "./SignUpForm";
import {RecoilRoot} from "recoil";

const SignUp = () => {
  return (
    <>
      <RecoilRoot>
      <SignUpForm/>
      </RecoilRoot>
    </>
  );
}

export default SignUp
