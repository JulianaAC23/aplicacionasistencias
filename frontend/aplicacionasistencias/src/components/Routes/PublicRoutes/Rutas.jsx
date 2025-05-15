import { Routes,Route } from "react-router-dom"
import { Home } from "../../pages/Home/Home"
import { Menu } from "../../common/Menu/Menu"
import { Login } from "../../pages/Login/Login"
export default function Rutas() {
  return (
    <>
    <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}
