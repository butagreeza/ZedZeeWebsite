import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';

const FinalistCard = ({ title, description }) => (
	<Card sx={{ mx: 1 }}>
		<CardActionArea>
			<CardMedia
				component='img'
				height='140'
				image='https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=2586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt='green iguana'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Zainab Sheriff
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Irure laborum pariatur qui ullamco Lorem. Fugiat aute dolor in dolore
					commodo exercitation ea culpa consequat adipisicing voluptate nostrud
					dolor ad.
				</Typography>
			</CardContent>
		</CardActionArea>
	</Card>
);

const FinalistSlider = ({ isSmallScreen }) => {
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
			<Box sx={{ width: '100%', mx: 'auto', mt: 5, px: 3 }}>
				<Typography
					sx={{
						fontSize: isSmallScreen ? 16 : 40,
						fontWeight: 'bold',
						textTransform: 'uppercase',
					}}>
					FINALISTS
				</Typography>
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

export default FinalistSlider;
