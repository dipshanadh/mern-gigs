import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Navbar from "./components/Navbar"

// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Manage from "./pages/Manage"
import Create from "./pages/Create"
import Show from "./pages/Show"
import Edit from "./pages/Edit"

const App = () => {
	return (
		<div className="pt-[68px]">
			<BrowserRouter>
				<Navbar />
				<Routes path="/">
					<Route index element={<Home />} />
					<Route path="create" element={<Create />} />
					<Route path="manage" element={<Manage />} />
					<Route path="edit" element={<Edit />} />
					<Route path="show" element={<Show />} />
					<Route path="auth">
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
