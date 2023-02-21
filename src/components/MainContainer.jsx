import React from 'react';
import Head from "next/head";

const MainContainer = ({children, text, keywords}) => {
    return (
        <div>
            <Head>
                <meta keywords={'NextJS ' + keywords}/>
                <title>Main PAGE</title>
            </Head>
            <h1>{text}</h1>
        </div>
    );
};

export default MainContainer;