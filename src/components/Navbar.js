import React from 'react'
import '../home.css';
import { Link, useNavigate } from 'react-router-dom';
 

export default function Navbar() {

const nav = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    nav("/");
  };

  return (
    <>
     {/*Navbar*/}
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom backgrad text-dark">
    <div className="col-md-3 mb-2 mb-md-0">
      <a
        href="./im"
        className="d-inline-flex link-body-emphasis text-decoration-none"
      >
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_agile_project_management.jpg"
          alt="LoanAI"
          className="bi"
          width={110}
          height={55}
          
          aria-label="Bootstrap"
        />
        <h2>Lancers</h2>
      </a>
    </div>
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <a
          href="/"
          className="nav-link px-2 link-secondary text-dark font-size=2rem"
        >
          <font size="+1.5">Home</font>
        </a>
      </li>
      <li>
        <a href="./features.html" className="nav-link px-3 text-dark">
          <font size="+1.5">Features</font>
        </a>
      </li>
      <li>
        <a href="./article.html" className="nav-link px-3 text-dark">
          <font size="+1.5">Article</font>
        </a>
      </li>
      <li>
        <a href="./faqs.html" className="nav-link px-3 text-dark">
          <font size="+1.5">FAQs</font>
        </a>
      </li>
      <li>
        <a href="./about.html" className="nav-link px-3 text-dark">
          <font size="+1.5">About Us</font>
        </a>
      </li>
    </ul>
    <div className="col-md-3 text-end" style={{ marginRight: 20 }}>
      {/* <a href="/login">
  <button   class="btn btn-outline-primary me-2">Login</button>
</a> */}

{!localStorage.getItem("token") ? (
              <>
                
                 <Link to="/Login" style={{color: "white" ,textDecoration: 'none'}}>
                 <button className="btn btn-primary border-0 mx-3" type='button'>Login
                </button>
                </Link>

                
                <Link to="/Signup" style={{color: "white" ,textDecoration: 'none'}}>
                <button className="btn btn-primary border-0" type='button'>Signup
                </button>
                </Link>

              </>
            ) : (
              <>
                <button className="btn btn-primary border-0 mx-3" onClick={logout}>
                  Logout
                </button>
              </>
            )}




{ /*     <button className="btn btn-primary border-0 mx-3" type='button'>
  <Link to="/Login" style={{color: "white" ,textDecoration: 'none'}}>Login</Link>
</button>
            */}
{/*<button className="btn btn-primary border-0" type='button'>
  <Link to="/Signup" style={{color: "white" ,textDecoration: 'none'}}>Signup</Link>
</button>*}
      {/*<a href="/register" className="btn" width="10px">
        <button className="btn btn-primary border-0">Sign-up</button>
</a>*/}
    </div>
  </header>
    
    
    
    
    </>
  )
}
