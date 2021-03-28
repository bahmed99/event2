import React from "react";
import "./Style.css";
import { Chrono } from "react-chrono";
import data from "./data";
import { Fade } from 'react-reveal';
import SectionTitle from '../UI/SectionTitle'

import ReactScrollbar from 'react-scrollbar-js';


export default function NewProgramme() {
    const myScrollbar = {
        width: 400,
        height: 400,
      };
    return (
        <ReactScrollbar style={myScrollbar}>
        <div className="App scrollbar scrollbar-primary">
            <div className="member-education mem-achieve-item">
                <Fade big>
                    <SectionTitle
                        heading={'Programme'} /></Fade>
            </div>
            <div style={{ width: "100%", height: "600px" ,overflowY: 'scroll' }}>
                <Chrono items={data} mode="VERTICAL_ALTERNATING" scrollable={{ scrollbar: true }} theme={{ primary: "red", secondary: "blue", cardBgColor: "white", cardForeColor: "violet" }}  >

                    <div className="chrono-icons">
                        <img src={require('./test.png')} />
                        <i className="fa fa-car"></i>
                    </div>
                </Chrono>
            </div>
        </div>
        </ReactScrollbar>
    );
}
