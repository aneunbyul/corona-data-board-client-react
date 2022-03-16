import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from '../src/components/contents/Main/Table'

import BaseHead from "../src/components/base/BaseHead";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <BaseHead title="MAIN"/>
      <StyledMain>
        <Table/>
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  position: absolute;
  left: 240px;
  width: calc(100vw - 240px);
  top: 80px;
  height: calc(100vh - 80px);
`;

export default Main;
