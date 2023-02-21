import React from 'react';
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const MainContainer = ({children, text, keywords}) => {
    return (
        <div>
            <Head>
                <meta keywords={'NextJS ' + keywords}/>
                <title>Main PAGE</title>
            </Head>
            <div>
               <Header />
                <Footer />
            </div>
            <div>
                {children}
            </div>
            <h1>{text}</h1>
        </div>
    );
};

export default MainContainer;