import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useState } from 'react'
import { Categories } from './Categories'

export const Dropdown = () => {
	//For handling categories display
	const [shop, setShop] = useState(false)
	return (
		<div className='dropdown'>
			{/* Dropdown list */}
			<p>Home</p>
			<p>About</p>
			<div
				className='shop'
				// To open/close shop categories list
				onClick={() => {
					setShop(!shop)
				}}
			>
				{' '}
				<p>
					Shop <ArrowDropDownIcon />
				</p>
				{/* Categories under shop option */}
				{shop && <Categories shop={shop} setShop={setShop} />}
			</div>
			{/* Cart button */}
			<button>
				<ShoppingCartIcon fontSize='small' /> Cart <span>0</span>
			</button>
		</div>
	)
}