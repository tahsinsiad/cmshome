import React from "react";
import { Layout } from "antd";
import NavMenu from "./MenuComponent.js";
import menu from "../public/menu.json";

const { Header } = Layout;
const HeaderComponent = () => {
    console.log(menu);
    return (
        <Header style={{ backgroundColor: "white" }}>
            <div className="header-contents">
                <div className="logo">LOGO</div>
                <NavMenu menu={menu} />
                <style jsx>
                    {
                        `.header-contents{
                            display: flex;
                            justify-content: space-between;
                        }
                        .logo{
                            width: 100px;
                            color: red;
                            font-size: 30px;
                        }
                        `
                    }
                </style>
            </div>
        </Header>
    )
}

export default HeaderComponent;
