import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MyWatchList from "./Components/MyWatchList";

const App=()=>{
  return(
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/my-watchlist/watchlist" element={<MyWatchList/>} />
        <Route path="/my-watchlist" element={<HomePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;