import {
	Box,
	Button,
	Card,
	Grid,
	Paper,
	TextField,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import React from 'react';
import Lottie from 'lottie-react';
import loginAnimation from '../../global/assets/lottie/login.json';
import { Link } from 'react-router-dom';

const Login = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<Box
			sx={{
				width: '90%',
				mx: 'auto',
				my: -20,
				px: 3,
				height: '100%',
				maxWidth: '100%', // Adjusted width for larger screens
				backgroundColor: '#F2F2F2',
			}}>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				sx={{ height: '100vh' }}>
				{/* Display form below on small screens, and on the right on larger screens */}
				<Grid
					item
					xs={12}
					sm={6}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						order: { xs: 2, sm: 1 }, // Change the order on small screens
					}}>
					<Card
						sx={{
							p: 3,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							mt: isSmallScreen ? -10 : 0,
							mb: isSmallScreen ? 10 : 0,
						}}>
						<Typography
							variant={isSmallScreen ? 'h4' : 'h3'}
							sx={{ fontWeight: 'bold', mb: 1 }}>
							Sign into ZedZee Account
						</Typography>
						<Box
							component='form'
							sx={{ m: 1, width: '100%' }}
							noValidate
							autoComplete='off'>
							<TextField
								sx={{ width: '100%', mb: 2 }}
								id='outlined-basic'
								label='Email'
								variant='outlined'
							/>
							<TextField
								sx={{ width: '100%', mb: 2 }}
								id='outlined-basic'
								label='Password'
								variant='outlined'
							/>
							<Button variant='contained' sx={{ width: '100%' }}>
								Login
							</Button>
							<Typography sx={{ textAlign: 'center', my: 2 }}>
								Forgot Password?
							</Typography>
							<Typography sx={{ textAlign: 'center', my: 2 }}>
								Don't have an account? <a>Sign Up</a>
							</Typography>
						</Box>
					</Card>
				</Grid>
				{/* Display Lottie animation above on small screens, and on the left on larger screens */}
				<Grid
					item
					xs={12}
					sm={6}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						order: { xs: 1, sm: 2 }, // Change the order on small screens
						mt: isSmallScreen ? 15 : 0,
					}}>
					<Lottie style={{ height: '70%' }} animationData={loginAnimation} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Login;
