import styled from 'styled-components'
import Link from 'next/link'
import Typography from "@mui/material/Typography";
import * as React from "react";

const Footer = () => {

  return (
    <StyledFooter>
      <InnerWrapper>
        <p>CORONA DATA BOARD © 2022</p>
      </InnerWrapper>
    </StyledFooter>
  )
}


const InnerWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  text-transform: uppercase;
  color: #979797;

  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  & > p {
    font-size: 2.6rem;
    color: grey;
    line-height: 3rem;
  }
`

const StyledFooter = styled.footer`
  background-color: #1b1b1b;
`
export default Footer
