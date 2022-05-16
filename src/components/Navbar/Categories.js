export const Categories = ({ shop, setShop }) => {
	return (
		//Categories under shop
		<div className='categories'>
			<p
				onClick={() => {
					setShop(!shop)
				}}
			>
				All Products
			</p>
			<p
				onClick={() => {
					setShop(!shop)
				}}
			>
				Popular Items
			</p>
			<p
				onClick={() => {
					setShop(!shop)
				}}
			>
				New Arrivals
			</p>
		</div>
	)
}