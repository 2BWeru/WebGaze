import React from "react";
import "./themes.css";

import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot, QuerySnapshot} from "firebase/firestore"
import {db} from '../../../firebase-config'


function Themes () {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const q = query(collection(db, '/posts'))
        onSnapshot(q, (querySnapshot) => {
          setPosts(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])

    return(
        <>
        <div className="container-theme">
            <div className="theme-box">
                <div className="theme-left">
                    <ul>
                        <li>WEB DEVELOPMENT</li>
                        <li>TECH MARKETING</li>
                        <li>TECH TRAINING</li>

                    </ul>
                </div>
                <div class="theme-right">
                    <div className="wrapper-theme">
                        {posts.map((post,i)=>(
                        <div className="theme-card">
                            <img src={post.data.imagePost} width={400}/>
                            <div className="theme-text">
                                <p>{post.data.title}</p>
                                <span>Description:{post.data.message}</span>
                                <br></br>
                                <i>Read</i>
                                <br></br>
                                <span>Theme:{post.data.theme}</span>
                                
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
        {/* <!-- Footer --> */}
					<footer id="footer">
						<ul class="icons">
							<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
							<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
							<li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
							<li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
						</ul>
						<ul class="copyright">
							<li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul>
					</footer>
        </>
    )
}

export default Themes;