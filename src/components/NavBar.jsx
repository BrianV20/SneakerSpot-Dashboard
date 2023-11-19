import React from "react";

import { ContainerDataPanel } from "./ContainerDataPanel";

export function NavBar() {

    return (
        <>
        <nav>
            <div className="logoDiv">
                <img src="/logo.png" alt="logo" />
            </div>
            <ContainerDataPanel />
        </nav>
        </>
    )
}