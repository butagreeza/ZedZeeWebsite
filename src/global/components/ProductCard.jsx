import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';

const ProductCard = ({ name = 'Product Name', price = 'Le. 5,000' }) => {
	return (
		<Card sx={{ mx: 1, height: 'auto' }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='200' // Fixed height for the image
					image='https://images.unsplash.com/photo-1628149453636-23e882b3c1fc?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='featured product'
				/>
				<CardContent>
					<Typography gutterBottom variant='h3' sx={{ fontWeight: 'bold' }}>
						{name}
					</Typography>
					<Stack direction='row' spacing={1}>
						<Typography variant='h5' sx={{ textDecoration: 'line-through' }}>
							Le: 800
						</Typography>
						<Typography variant='h5' sx={{ fontWeight: '700' }}>
							{price}
						</Typography>
					</Stack>
					<Button variant='contained'>Shop Now</Button>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ProductCard;
