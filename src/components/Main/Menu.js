import { MenuItem } from './MenuItem'

const Menu = () => {
	return (
		// For the main content of the page
		<section className='pageContainer'>
			{/* To hold the items */}
			<div className='container'>
				{/* Mapping through items data */}
				{MenuItem.map((item, index) => (
					<article className='item' key={index}>
						<img className='itemImage' src={item.image} alt={item.title} />

						<h4>{item.title}</h4>
						{item.star && <p>⭐⭐⭐⭐⭐</p>}
						{item.sale && <span className='sale'>Sale</span>}
						{item.dashedPrice && (
							<p>
								<del>{item.dashedPrice.value}</del>
							</p>
						)}
						<span>{item.price}</span>

						<button className='btn'>{item.cart}</button>
					</article>
				))}
			</div>
		</section>
	)
}

export default Menu