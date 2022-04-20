import {
Link
  } from "react-router-dom";

function Home()
{
    return(
        <section class="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Snake Game</h1>
          <p className="lead text-muted">Ce projet est réalisé en utilisant ReactJs ainsi que React Router. Il a pour but de mettre en évidence les maitrises de router, props, algorithmie etc... Pour plus de détails veuillez contacter Ramaël Bruno via LinkedIn ou mail: ramael.bruno@gmail.com</p>
          <p>
            <Link to="/game" className="btn btn-primary my-2">Go to 🐍</Link>
          </p>
        </div>
      </section>
    )
}

export default Home