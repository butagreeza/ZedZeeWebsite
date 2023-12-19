import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';
import MiniHero from '../../global/components/MiniHero';

const BlogCard = () => {
	return (
		<Card sx={{ width: '100%' }}>
			<CardMedia
				sx={{ height: 140 }}
				image='https://images.unsplash.com/photo-1610737241336-371badac3b66?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				title='green iguana'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Post Title
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Laboris sunt nisi est id dolor commodo minim ad consectetur nulla in.
					Laboris consequat aliquip ullamco culpa ex aliqua elit irure quis
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Share</Button>
				<Button size='small'>Read More</Button>
			</CardActions>
		</Card>
	);
};

const Blogs = () => {
	return (
		<Box>
			<MiniHero title='BLOGS' />
			<Box sx={{ width: '100%', mx: 'auto', mt: 5, px: 3 }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					{Array.from(Array(15)).map((_, index) => (
						<Grid item xs={2} sm={4} md={2} key={index}>
							<BlogCard />
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Blogs;
