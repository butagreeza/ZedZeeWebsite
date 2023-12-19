import React from 'react';
import {
	Box,
	Grid,
	Typography,
	Paper,
	Avatar,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MiniHero from '../../global/components/MiniHero';

const ContestantPage = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	// Calculate age based on date of birth
	const calculateAge = (dob) => {
		const birthDate = new Date(dob);
		const currentDate = new Date();
		return currentDate.getFullYear() - birthDate.getFullYear();
	};

	const contestantInfo = {
		fullName: 'Contestant Name',
		dateOfBirth: '1990-01-01',
		placeOfBirth: 'Cityville',
		occupation: 'Professional Dancer',
		hobbies: ['Dancing', 'Singing', 'Traveling'],
		nicknames: ['Dance Queen', 'Star'],
	};

	return (
		<Box>
			<MiniHero title='ZAINAB SHERIFF' />
			<Box sx={{ p: 3 }}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						<Paper
							elevation={3}
							sx={{
								p: 2,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<Avatar
								alt='Contestant Photo'
								src='https://via.placeholder.com/150'
								sx={{ width: 150, height: 150, mb: 2 }}
							/>
							<Typography variant='h5' gutterBottom>
								{contestantInfo.fullName}
							</Typography>
							<Typography
								variant='subtitle1'
								color='textSecondary'
								gutterBottom>
								Current Ranking: #5
							</Typography>
							<Divider sx={{ my: 2, width: '80%' }} />
							<Button
								variant='contained'
								color='primary'
								startIcon={<ArrowUpwardIcon />}>
								Vote for Her
							</Button>
						</Paper>
					</Grid>
					<Grid item xs={12} md={8}>
						<Card>
							<CardHeader title='Biography' />
							<CardContent>
								<Typography variant='body1' paragraph>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam blandit varius turpis, vel cursus ipsum vulputate eu.
									Sed efficitur est ac ex blandit, et accumsan eros laoreet.
									Aliquam erat volutpat. Proin viverra sagittis orci, eget
									ultrices nulla interdum in.
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ mt: 2 }}>
							<CardHeader title='Personal Information' />
							<CardContent>
								<List>
									<ListItem>
										<ListItemIcon>
											<PhotoCameraIcon />
										</ListItemIcon>
										<ListItemText
											primary={`Date of Birth: ${
												contestantInfo.dateOfBirth
											} (Age: ${calculateAge(contestantInfo.dateOfBirth)})`}
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<PhotoCameraIcon />
										</ListItemIcon>
										<ListItemText
											primary={`Place of Birth: ${contestantInfo.placeOfBirth}`}
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<PhotoCameraIcon />
										</ListItemIcon>
										<ListItemText
											primary={`Occupation: ${contestantInfo.occupation}`}
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<PhotoCameraIcon />
										</ListItemIcon>
										<ListItemText
											primary={`Hobbies: ${contestantInfo.hobbies.join(', ')}`}
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<PhotoCameraIcon />
										</ListItemIcon>
										<ListItemText
											primary={`Nicknames: ${contestantInfo.nicknames.join(
												', ',
											)}`}
										/>
									</ListItem>
								</List>
							</CardContent>
						</Card>
						<Card sx={{ mt: 2 }}>
							<CardHeader title='Educational Background' />
							<CardContent>
								<Typography variant='body1' paragraph>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam blandit varius turpis, vel cursus ipsum vulputate eu.
									Sed efficitur est ac ex blandit, et accumsan eros laoreet.
									Aliquam erat volutpat. Proin viverra sagittis orci, eget
									ultrices nulla interdum in.
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ mt: 2 }}>
							<CardHeader title='Social Media Handles' />
							<CardContent>
								<IconButton component={Link} href='#' color='inherit'>
									<InstagramIcon />
								</IconButton>
								<IconButton component={Link} href='#' color='inherit'>
									<TwitterIcon />
								</IconButton>
								<IconButton component={Link} href='#' color='inherit'>
									{' '}
									qaA
									<LinkedInIcon />
								</IconButton>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default ContestantPage;
