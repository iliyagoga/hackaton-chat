
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import Mean from "./pages/Mean";
import { routes } from "./utils/ways/routes.ts";
import Chat from './pages/Chat.jsx';
const Router=()=>{
    return <Routes>
        <Route path={routes.mean} element={<Mean/>}></Route>
        <Route path={routes.admin} element={<Chat/>}></Route>
    </Routes>
}
export default Router