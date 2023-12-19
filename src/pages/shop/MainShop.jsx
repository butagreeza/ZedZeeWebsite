import { Box, Grid, Pagination, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import MiniHero from '../../global/components/MiniHero';
import SubscriptionPackages from '../home/components/SubscriptionPackages';
import ProductCard from '../../global/components/ProductCard';

const MainShop = () => {
	const numerOfProducts = 30;
	const productsPerPage = 18;

	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(numerOfProducts / productsPerPage);

	const finalistsData = Array.from({ length: numerOfProducts }, (_, index) => ({
		name: `Bag ${index + 1}`,
		price: index + 5000,
	}));

	const heroImage =
		'https://images.unsplash.com/photo-1611432580340-af48bd7549ed?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

	const props = useSpring({
		opacity: 1,
		from: { opacity: 0 },
	});

	const handlePageChange = (event, value) => {
		setCurrentPage(value);
	};

	const startIndex = (currentPage - 1) * productsPerPage;
	const endIndex = startIndex + productsPerPage;

	return (
		<animated.div style={props}>
			<Box>
				<MiniHero title='Shop' bgImg={heroImage} />
				<Box sx={{ flexGrow: 1, mt: 4 }}>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}>
						{finalistsData.slice(startIndex, endIndex).map((product, index) => (
							<Grid item xs={2} sm={4} md={2} key={index}>
								<animated.div style={props}>
									<ProductCard
										key={index}
										name={product.name}
										price={product.price}
									/>
								</animated.div>
							</Grid>
						))}
					</Grid>
				</Box>
				<Stack spacing={2} justifyContent='center' sx={{ mt: 2 }}>
					<Pagination
						count={totalPages}
						page={currentPage}
						onChange={handlePageChange}
						color='primary'
					/>
				</Stack>
				<SubscriptionPackages />
			</Box>
		</animated.div>
	);
};

export default MainShop;
