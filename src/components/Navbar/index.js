import MenuIcon from '@mui/icons-material/Menu'
import './navbar.css'
import { useState } from 'react'
import { Dropdown } from './Dropdown'

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)
	return (
		<>
			{/* Navigation bar layout */}
			<nav className='navbar'>
				<header>Let's Shop</header>
				{/* Displayed when screen size is over 996px */}
				<div className='menuList'>
					<Dropdown />
				</div>
				{/* Displayed when screen size is under 996px */}
				<button
					className='menuIcon'
					onClick={() => {
						setShowMenu(!showMenu)
						console.log(showMenu)
					}}
				>
					<MenuIcon sx={{ color: 'slategray', fontSize: 40 }} />
				</button>
			</nav>
			{/* Displayed when screen size is under 996px */}
			{showMenu && <Dropdown />}
		</>
	)
}

export default Navbar