import React from 'react';
import {
	Box,
	Grid,
	Typography,
	Paper,
	TextField,
	Button,
	Divider,
	IconButton,
	Link,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MiniHero from '../../global/components/MiniHero';

const ContactUs = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box>
			<MiniHero
				title='CONTACT US'
				description={`We confess, we're a bit email-obsessed. So fire away! Ask us anything, tell us everything, even share your favorite cat memes (we won't judge... much). Just know that behind the screens, there's a team of real people ready to connect with you.`}
			/>
			<Box sx={{ p: 3 }}>
				<Typography variant='h4' sx={{ mb: 2 }}>
					Contact Us
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Paper elevation={3} sx={{ p: 2, minHeight: '250px' }}>
							<Typography variant='h6' sx={{ mb: 2 }}>
								Our Office
							</Typography>
							<Typography
								variant='body1'
								sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
								<LocationOnIcon sx={{ mr: 1 }} />
								123 Main Street, Freetown, Sierra Leone
							</Typography>
							<Typography
								component={Link}
								variant='body1'
								href='tel:+11234567890'
								color='inherit'
								sx={{
									display: 'flex',
									alignItems: 'center',
									mb: 1,
									textDecoration: 'none',
								}}>
								<PhoneIcon sx={{ mr: 1 }} />
								+1 (123) 456-7890
							</Typography>
							<Typography
								component={Link}
								variant='body1'
								href='mailto:info@zedzeemultimedia.com'
								color='inherit'
								sx={{
									display: 'flex',
									alignItems: 'center',
									mb: 1,
									textDecoration: 'none',
								}}>
								<MailOutlineIcon sx={{ mr: 1 }} />
								info@zedzeemultimedia.com
							</Typography>
							<Divider sx={{ my: 2 }} />
							<Typography variant='body2' color='textSecondary'>
								Working Hours:
								<br />
								Monday - Friday: 9:00 AM - 5:00 PM
							</Typography>
							<Divider sx={{ my: 2 }} />
							<Typography variant='body2' color='textSecondary'>
								Connect with us:
								<IconButton color='primary' component={Link} href='#'>
									<FacebookIcon />
								</IconButton>
								<IconButton color='primary' component={Link} href='#'>
									<TwitterIcon />
								</IconButton>
								<IconButton color='primary' component={Link} href='#'>
									<LinkedInIcon />
								</IconButton>
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} md={6}>
						<Paper elevation={3} sx={{ p: 2 }}>
							<Typography variant='h6' sx={{ mb: 2 }}>
								Get in Touch
							</Typography>
							<form>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
										<TextField
											fullWidth
											label='First Name'
											variant='outlined'
											required
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											fullWidth
											label='Last Name'
											variant='outlined'
											required
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											fullWidth
											label='Email'
											variant='outlined'
											type='email'
											required
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											fullWidth
											label='Message'
											variant='outlined'
											multiline
											rows={4}
											required
										/>
									</Grid>
									<Grid item xs={12}>
										<Button
											type='submit'
											variant='contained'
											color='primary'
											endIcon={<SendIcon />}>
											Send Message
										</Button>
									</Grid>
								</Grid>
							</form>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default ContactUs;
