import React from "react";
import PageWrapper from "../components/PageWrapper";

const About = () => {
    return (
        <div>
            <PageWrapper>

                <div className="content">
                    <h1>ABOUT US</h1>
                    <p>Welcome to Pi-CMS. <br /> Explore the new way of web development with smart SEO management system.</p>
                </div>
            </PageWrapper>
            <style jsx>
                {
                    `
                    .content{
                        text-align: center;
                    }
                    .content h1{
                        font-size: 50px;
                        font-weight: 900;
                    }
                    .content p{
                    background-color: white;
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
}

export default About
