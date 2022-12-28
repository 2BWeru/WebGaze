import './App.css';
import "./assets/css/main.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/noscript.css";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Home from "./Components/Home/Home";
import Blog from "./Components/Blogs/blog";
import Writing from './Components/Writing/writing';
import Themes from "./Components/Themes/AllThemes/themes";
import Signin from "./Components/auth/sign/signIn";
import Login from "./Components/auth/log/logIn";


function App() {
  return (
    <>
    <Router>

    <header id="header" class="alt">
        <div className='navbar'>
          <h1>Blueprint</h1>
          <input type="text" placeholder='Search'></input>
        </div>
				<nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/sign">Sign In</Link></li>
            <li><Link to="/follow">Follow</Link></li>
            <li><Link to="/themes">Themes</Link></li>
            <li><Link to="/write">Post Blog</Link></li>

          </ul>
					</nav>
		</header>
    
      <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/blog' element={< Blog />}></Route>
          <Route path='/write' element={< Writing />}></Route>
          <Route path='/themes' element={< Themes />}></Route>
          <Route path='/sign' element={< Signin />}></Route>
          <Route path='/log' element={< Login />}></Route>

      </Routes>
    </Router>
    </>
  );
}

export default App;
