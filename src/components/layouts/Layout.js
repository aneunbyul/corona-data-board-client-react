import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {createContext} from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <Container sx={{display: 'flex'}}>
        <Nav/>
        <main>{children}</main>
      </Container>
      <Footer/>
    </>
  );
};

const Container = styled(Box)({
  display: 'flex'
});
export default Layout;
