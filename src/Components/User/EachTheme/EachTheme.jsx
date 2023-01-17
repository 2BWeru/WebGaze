import React from "react";
import css from "./EachTheme.module.css";
import themesData from "../../../data/thamesData";
import { useParams } from "react-router-dom";


function EachTheme (posts) {
       

    return(
        <div className={css.container}>
            <div className={css.list}>
                {posts.map((theme,i)=>(
                    <div key={1}>
                        <span>{theme.type}</span>
                        <img src={theme.img} alt="image"></img>
                    </div>
                ))}
                  
                </div>
        </div>
    )
}


export default EachTheme;