import AboutUs from "./AboutUs"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Navigation from "./Navigation"
import Signup from "./Signup"
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const ReactRouterExample = () => 
{
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Dashboard />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Route>
        </Routes>
    </BrowserRouter>

}
export default ReactRouterExample