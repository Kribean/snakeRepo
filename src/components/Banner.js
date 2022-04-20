
import './Banner.css'
function Banner({score,updateScore}) {
    return (
    <div className="row text-center">
    <h1>Snake 🐍</h1>
    <p>Ton score est de {score}</p>
    </div>

    )

}

export default Banner