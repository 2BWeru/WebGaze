import React from "react";
import css from "./themes.module.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

import {theme} from "../EachTheme/EachTheme";
import {themesdata} from "../../../data/thamesData";


function Themes () {
    // const [themes,setThemes] = useState[themesdata];

    return(
        <div className={css.container}>
         <div className={css.theme_list}>
             <ul>
                 <li ><Link to="/themes/web">Web Development</Link></li>
                 <li ><Link to="/themes/nocode">NoCode Tech</Link></li>
                 <li ><Link to="/themes/marketing">Marketing</Link></li>
                 <li><Link to="/themes/training">Training</Link></li>
             </ul>
         </div>
        </div>
    )
}

export default Themes;