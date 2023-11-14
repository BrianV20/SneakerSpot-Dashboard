import React from "react";
import "../../public/css/NavBar.css";

import { ContainerDataPanel } from "./ContainerDataPanel";

export function NavBar() {

    return (
        <>
        <nav>
            <div className="logoDiv">
                <img src="/logo.png" alt="logo" />
            </div>
            <ContainerDataPanel n1="40" n2="4" n3="20" e1="products" e2="users" e3="categories" />
        </nav>
        </>
    )
}