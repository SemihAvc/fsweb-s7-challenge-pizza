import React from "react";
import logo from "../Assets/logo.svg";
import "./SiparisinizAlindi.css"


function SiparisinizAlindi() {
    return (
        <div className='siparis-container'>
            <div>
            <img src={logo}></img>
            </div>
            <div>
                <p>TEBRİKLER!<br />SİPARİŞİNİZ ALINDI!</p>
            </div>
        </div>

    )
}

export default SiparisinizAlindi