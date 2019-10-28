import React from "react";
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Concert One" />
      </Head>
      <PageWrapper>
        <div className="content">
          Welcome to Pi-CMS. <br /> Explore the new way of web development with smart SEO management system.
        </div>
      </PageWrapper>
      <style jsx>
        {
          `
            .content{
            background-color: white;
            text-align: center;
            font-size: 40px;
            padding: 40px 0px;
            margin-top: 20px;
            font-weight: 900;
            font-family: Concert One;
            border: 2px solid red;
            border-radius: 5px;

          }
          `
        }
      </style>
    </div>
  )
};

export default Home;
