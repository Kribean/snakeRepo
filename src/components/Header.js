

import {
Link
  } from "react-router-dom";

function Header(){
    return(
        <div>
<nav className="navbar navbar-dark bg-dark">
  
  
      <div className="row justify-content-between">
      <div className="col-sm-3">
          <Link className="btn btn-primary m-1" to='/'>Accueil</Link>
          
          </div>
          <div className="col-sm-3">
          <Link className="btn btn-primary m-1" to='/game'>Jeu Snake</Link>
          </div>

          <div className="col-sm-3">
          <a href="https://www.linkedin.com/in/bramael-80bb79115/" className="btn btn-primary m-1" >linkedIn</a>
          </div>
          <div className="col-sm-3">
          <a href="https://kribean.github.io/portfolio/" className="btn btn-primary m-1" >Portfolio</a>
          </div>
      
      
      </div>
    

</nav>
        </div>
    )
}

export default Header