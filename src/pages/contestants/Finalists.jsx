import React from 'react';
import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	styled,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import MiniHero from '../../global/components/MiniHero';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { red } from '@mui/material/colors';

const Item = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'red',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height: '100%',
}));

const FinalistCard = () => (
	<Card sx={{ width: '100%' }}>
		<CardMedia
			component='img'
			height='100%'
			image='https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			alt='Paella dish'
		/>
		<CardContent>
			<Typography textAlign='center' variant='h3' color='text.secondary'>
				001
			</Typography>
			<Typography
				textAlign='center'
				variant='h3'
				color='text.secondary'
				fontWeight='bold'>
				Zainab Sheriff
			</Typography>
		</CardContent>
		<CardActions disableSpacing>
			<IconButton aria-label='facebook icon'>
				<FacebookIcon />
			</IconButton>
			<IconButton aria-label='instagram icon'>
				<InstagramIcon />
			</IconButton>
			<IconButton sx={{ ml: 'auto' }} aria-label='share'>
				<ShareIcon />
			</IconButton>
		</CardActions>
	</Card>
);

const Finalists = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const packages = Array.from(
		{ length: 6 },
		(_, index) => `Point ${index + 1}`,
	);

	return (
		<Box>
			<MiniHero title='FINALISTS' />
			<Box sx={{ width: '100%', mx: 'auto', mt: 5, px: 3 }}>
				<Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
					<Grid item xs={12} md={6}>
						<Item>1</Item>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography
							sx={{
								fontSize: 20,
								fontWeight: 'bold',
								color: '#808080',
								mb: isSmallScreen ? 2 : 0,
							}}
							variant='h5'>
							VOTING
						</Typography>
						<Typography
							sx={{
								fontSize: isSmallScreen ? 16 : 40,
								fontWeight: 'bold',
								textTransform: 'uppercase',
								mb: isSmallScreen ? 2 : 0,
							}}>
							Lorem ipsum dolor sit amet consectetur. Consequat in amet.
						</Typography>
						{!isSmallScreen && (
							<Typography
								variant='h5'
								sx={{
									textAlign: 'left',
									width: '80%',
								}}>
								Sint adipisicing consequat laborum eiusmod esse. Magna culpa ut
								nulla laboris nostrud velit. Anim duis velit ad in proident
								incididunt reprehenderit. Ad qui laborum voluptate minim dolor
								tempor. <br /> <br /> Cillum occaecat eiusmod incididunt duis
								amet. Nisi laborum sunt occaecat magna duis. Consectetur est ad
								adipisicing officia nulla est adipisicing velit Lorem tempor
								anim nostrud. Ad mollit occaecat magna tempor nostrud et commodo
								minim incididunt. Anim sunt sunt ad occaecat ut ipsum magna.
							</Typography>
						)}
						<List sx={{ padding: 0, mb: isSmallScreen ? 0 : -3 }}>
							<Grid container spacing={2}>
								{packages.map((packageText, index) => (
									<Grid item xs={6} key={index}>
										<ListItem disablePadding>
											<ListItemButton>
												<ListItemIcon sx={{ marginRight: -2 }}>
													<CheckCircleIcon />
												</ListItemIcon>
												<ListItemText primary={packageText} />
											</ListItemButton>
										</ListItem>
									</Grid>
								))}
							</Grid>
						</List>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ flexGrow: 1, mx: 2, mt: 10 }}>
				<Typography variant='h3'>Our Finalists</Typography>
				<Typography variant='h1' fontWeight='bold' mb={2}>
					Meet Our Finalists
				</Typography>

				<Grid
					container
					spacing={{ xs: 2, md: 2 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					{Array.from(Array(6)).map((_, index) => (
						<Grid item xs={2} sm={4} md={4} key={index}>
							<FinalistCard />
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Finalists;
