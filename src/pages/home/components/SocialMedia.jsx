import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const SocialMedia = ({ isSmallScreen }) => {
	return (
		<Box sx={{ width: '100%', mx: 'auto', mt: 5, px: 3 }}>
			<Typography
				sx={{ fontSize: 20, fontWeight: 'bold', color: '#808080' }}
				variant='h5'>
				SOCIAL MEDIA
			</Typography>
			<Typography
				sx={{
					fontSize: isSmallScreen ? 16 : 40,
					fontWeight: 'bold',
					textTransform: 'uppercase',
				}}>
				What social media says
			</Typography>
			<Grid
				container
				justifyContent={isSmallScreen ? 'center' : 'space-between'}
				spacing={3}
				sx={{
					mt: 1,
					zIndex: 99,
					flexDirection: isSmallScreen ? 'column' : 'row', // Adjusted direction based on screen size
				}}>
				<Grid item xs={12} sm={6} md={4}>
					<Paper
						sx={{
							height: '30vh',
							width: '100%',
							maxWidth: '100%', // Adjusted width for larger screens
							backgroundColor: '#000',
							borderRadius: 0,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							p: 3,
						}}>
						<FacebookIcon
							fontSize='inherit'
							sx={{ color: '#fff', fontSize: 50, mt: 2 }}
						/>
						<Typography
							sx={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
							FACEBOOK
						</Typography>
						<Typography sx={{ color: '#fff', mt: 5 }}>
							Aliquip anim do duis commodo proident deserunt officia anim
							deserunt. Adipisicing officia nisi labore ex excepteur quis duis
							incididunt.
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Paper
						sx={{
							height: '30vh',
							width: '100%',
							maxWidth: '100%', // Adjusted width for larger screens
							backgroundColor: '#808080',
							borderRadius: 0,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							p: 3,
						}}>
						<InstagramIcon
							fontSize='inherit'
							sx={{ color: '#fff', fontSize: 50, mt: 2 }}
						/>
						<Typography
							sx={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
							INSTAGRAM
						</Typography>
						<Typography sx={{ color: '#fff', mt: 5 }}>
							Aliquip anim do duis commodo proident deserunt officia anim
							deserunt. Adipisicing officia nisi labore ex excepteur quis duis
							incididunt.
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Paper
						sx={{
							height: '30vh',
							width: '100%',
							maxWidth: '100%', // Adjusted width for larger screens
							backgroundColor: '#000',
							borderRadius: 0,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							p: 3,
						}}>
						<TwitterIcon
							fontSize='inherit'
							sx={{ color: '#fff', fontSize: 50, mt: 2 }}
						/>
						<Typography
							sx={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
							TWITTER
						</Typography>
						<Typography sx={{ color: '#fff', mt: 5 }}>
							Aliquip anim do duis commodo proident deserunt officia anim
							deserunt. Adipisicing officia nisi labore ex excepteur quis duis
							incididunt.
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default SocialMedia;
