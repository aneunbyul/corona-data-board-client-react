import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {createContext} from "react";

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <Nav/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};


export default Layout;
