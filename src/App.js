import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title: "What is react?",
        content: "React is a front end javascript framework"
    },
    {
        title: "Prva utrka?",
        content: "Australija"
    },
    {
        title: "Naša grupa?",
        content: "Belgija, Kanada, Maroko, Hrvatska!"
    }
];

const options = [
    {
        label: "The color red",
        value: "red"
    },
    {
        label: "The color green",
        value: "green"
    },
    {
        label: "A shade of blue",
        value: "blue"
    }
];

export default () => {    
    return(
        <div>
            <Translate/>
        </div>
    )
};