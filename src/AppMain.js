import Home from './Home'
import App from './App'
import Header from './components/Header'
import {
  Routes,
  Route
} from "react-router-dom";




function AppMain() {
  
    return (
     
      <div className="container">
        <Header/>
        
<Routes>
  <Route path="/" element={<Home/>}>
  
  </Route>
  <Route path="/game" element={<App/>}></Route>
</Routes>
    </div>
    

   


    )
}

export default AppMain