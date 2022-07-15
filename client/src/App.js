import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Manage from "./components/Manage/Manage"
import Create from "./components/Create"
import Show from "./components/Show/Show"
import Edit from "./components/Edit"

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
