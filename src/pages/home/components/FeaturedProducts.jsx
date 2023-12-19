import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Stack,
	Typography,
	Link,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';

const FinalistCard = ({ title, description }) => (
	<Card sx={{ mx: 1 }}>
		<CardActionArea>
			<CardMedia
				component='img'
				height='40%'
				image='https://images.unsplash.com/photo-1628149453636-23e882b3c1fc?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt='featured product'
			/>
			<CardContent>
				<Typography gutterBottom variant='h3' sx={{ fontWeight: 'bold' }}>
					Black Hand Bag
				</Typography>
				<Stack direction='row' spacing={1}>
					<Typography variant='h5' sx={{ textDecoration: 'line-through' }}>
						Le: 800
					</Typography>
					<Typography variant='h5' sx={{ fontWeight: '700' }}>
						Le. 500
					</Typography>
				</Stack>

				<Button variant='contained'>Shop Now</Button>
			</CardContent>
		</CardActionArea>
	</Card>
);

const FeaturedProducts = ({ isSmallScreen }) => {
	const numberOfFinalists = 10;

	const finalistsData = Array.from(
		{ length: numberOfFinalists },
		(_, index) => ({
			title: `Finalist ${index + 1}`,
			description: `Description for Finalist ${
				index + 1
			}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
		}),
	);

	const responsive = {
		desktop: {
			breakpoint: {
				max: 3000,
				min: 1024,
			},
			items: 5,
			partialVisibilityGutter: 10,
		},
		mobile: {
			breakpoint: {
				max: 464,
				min: 0,
			},
			items: 1,
			partialVisibilityGutter: 30,
		},
		tablet: {
			breakpoint: {
				max: 1024,
				min: 464,
			},
			items: 2,
			partialVisibilityGutter: 30,
		},
	};

	return (
		<div>
			<Box
				sx={{
					width: '100%',
					mx: 'auto',
					mt: 10,
					px: 3,
					display: 'flex',
					justifyContent: 'space-between', // This will push the items to the ends
					alignItems: 'center',
				}}>
				<Typography
					sx={{
						fontSize: isSmallScreen ? 16 : 40,
						fontWeight: 'bold',
						textTransform: 'uppercase',
					}}>
					FEATURED PRODUCTS
				</Typography>
				<Link
					component={RouterLink}
					to='/shop'
					sx={{
						textDecoration: 'none',
						color: 'red',
						display: 'flex',
						alignItems: 'center',
					}}>
					<Typography mr={1} sx={{ color: 'red' }}>
						VIEW ALL PRODUCTS
					</Typography>
					<ArrowForwardIcon sx={{ color: 'red' }} />
				</Link>
			</Box>

			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				className=''
				containerClass='container-with-dots'
				dotListClass=''
				draggable
				focusOnSelect={false}
				infinite
				itemClass=''
				keyBoardControl
				minimumTouchDrag={80}
				pauseOnHover
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={responsive}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots={false}
				sliderClass=''
				slidesToSlide={1}
				swipeable>
				{finalistsData.map((finalist, index) => (
					<FinalistCard
						key={index}
						title={finalist.title}
						description={finalist.description}
					/>
				))}
			</Carousel>
		</div>
	);
};

export default FeaturedProducts;
