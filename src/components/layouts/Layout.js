import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { createContext } from "react";

export const HeaderBgContext = createContext();

const Layout = ({ children }) => {
  const [isShowHeaderBg, setIsShowHeaderBg] = useState(false);
  const [visible, setVisible] = useState(true);
  const router = useRouter();
  const isProductsPage = router.pathname.includes("products");
  return (
    <HeaderBgContext.Provider value={{ isShowHeaderBg, setIsShowHeaderBg }}>
        <Header visible={visible} setVisible={setVisible} />
        <main>{children}</main>
        {!isProductsPage && <Footer />}
    </HeaderBgContext.Provider>
  );
};


export default Layout;
