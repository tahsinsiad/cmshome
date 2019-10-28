import React from "react";
import { Layout } from "antd";
import 'antd/dist/antd.css';
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";

const { Content } = Layout;
const PageWrapper = ({ children }) => {
    return (
        <div>
            <Layout>
                <HeaderComponent />
                <div className="container">
                    <Content>
                        {children}
                    </Content>
                </div>
                <FooterComponent />
            </Layout>
            <style jsx global>
                {
                    `.container {
                        width: 95%;
                        max-width: 1280px;
                        margin: 0 auto;
                    }
                    `
                }
            </style>
        </div>
    )
}

export default PageWrapper;
