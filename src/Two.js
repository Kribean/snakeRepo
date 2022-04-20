import { Route,Link } from 'react-router-dom'



function Two() {

    return (
      <Route>
      <div className="container justify-content-center">
<h1>Snake by Ramaël Bruno</h1>

<Link to="/main">Snake Game</Link>
<Link to="/">Accueil</Link>


    </div>
      </Route>


    )
}

export default Two