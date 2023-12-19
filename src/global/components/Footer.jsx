/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Typography, Grid, Link, Divider, AppBar, Stack } from '@mui/material';
// import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

// function Copyright() {
// 	return (
// 		<Typography variant='body2' color='#fff'>
// 			{'Copyright © '}
// 			<Link color='inherit' href='https://byteltd.com/'>
// 				Byte Limited
// 			</Link>{' '}
// 			{new Date().getFullYear()}
// 			{'.'}
// 		</Typography>
// 	);
// }

export default function Footer() {
	function Section({ title, items }) {
		return (
			<Grid item xs={12} sm={4}>
				<Typography
					variant='subtitle1'
					sx={{ color: 'white', textAlign: 'left', fontWeight: 'bold' }}>
					{title}
				</Typography>
				<Grid container direction='column'>
					{items.map((item, index) => (
						<Link
							key={index}
							href={item.path}
							sx={{
								color: 'white',
								'&:hover': { color: '#ccc' },
								my: 0.1,
								textAlign: 'left',
								textDecoration: 'none',
							}}>
							{item.title}
						</Link>
					))}
				</Grid>
			</Grid>
		);
	}

	return (
		<Box
			sx={{
				position: 'static',
				display: 'flex',
				flexDirection: 'column',
			}}>
			<CssBaseline />
			<AppBar position='sticky' sx={{ backgroundColor: '#000' }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
					sx={{
						justifyContent: 'space-between',
						px: 3,
						py: 2,
						display: 'flex',
						flexDirection: 'row',
					}}>
					<Grid
						sx={{
							display: 'flex',
							flexDirection: 'column',
							mt: { xs: 12, sm: 10 },
							width: { xs: '100%', sm: '60%' },
						}}
						item
						xs={4}
						sm={6}
						md={6}>
						<Typography variant='h3' sx={{ fontWeight: 'bold' }}>
							INFORMATION
						</Typography>
						<Typography>
							Incididunt non irure ullamco non esse ipsum officia aliquip id
							qui. Veniam enim ea amet esse adipisicing occaecat consectetur non
							incididunt culpa amet excepteur. Est deserunt veniam eu id sit. In
							enim est laborum do laborum adipisicing aute ad enim et laboris
							non esse.
						</Typography>
					</Grid>

					<Grid item xs={2} sm={3} md={3} mt={{ xs: 5, sm: 10 }}>
						<Typography variant='h3' sx={{ fontWeight: 'bold' }}>
							NAVIGATION
						</Typography>
						<Section
							items={[
								{ title: 'HOME', path: '/' },
								{ title: 'SHOP', path: '/shop' },
								{ title: 'BLOG', path: '/blogs' },
								{ title: 'FAQ', path: '/faqs' },
								{ title: 'CONTACT', path: '/contact-us' },
							]}
						/>
					</Grid>
					<Grid item xs={2} sm={3} md={3} mt={{ xs: 5, sm: 10 }}>
						<Typography variant='h3' sx={{ fontWeight: 'bold' }}>
							CONTACT US
						</Typography>
						<Section
							items={[
								{ title: '+232 77 354532', path: '#' },
								{ title: 'erp@byteltd.com', path: '#' },
								{ title: '1 Big Street, Freetown', path: '#' },
							]}
						/>
					</Grid>
				</Grid>

				<Divider
					sx={{ mx: 3, '&.MuiDivider-root': { backgroundColor: '#d9d9d9' } }}
				/>
				<Box
					sx={{
						backgroundColor: 'transparent',
						color: 'white',
						py: 1,
						px: 3,
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
					}}>
					<Grid container>
						<Grid
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}
							item
							xs={12}
							sm={6}>
							<Typography variant='body2'>
								<strong>ALL RIGHT RESERVED - ZEDZEE MULTIMEDIA</strong>{' '}
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							sx={{
								display: 'flex',
								justifyContent: 'flex-end',
								alignItems: 'center',
							}}>
							<Stack direction='row' spacing={2}>
								<Typography
									component={RouterLink}
									to='/disclaimer'
									variant='contained'
									sx={{
										color: 'white',
										textTransform: 'none',
										fontWeight: 'bold',
									}}>
									DISCLAIMER
								</Typography>

								{}

								<Typography
									component={RouterLink}
									to='/privacy-policy'
									variant='contained'
									sx={{
										color: 'white',
										textTransform: 'none',
										fontWeight: 'bold',
									}}>
									PRIVACY POLICY
								</Typography>
								<Typography
									component={RouterLink}
									to='/terms-of-use'
									variant='contained'
									sx={{
										color: 'white',
										textTransform: 'none',
										fontWeight: 'bold',
									}}>
									TERM OF USE
								</Typography>
							</Stack>
						</Grid>
					</Grid>
				</Box>
				{/* <Grid
					container
					justifyContent='space-between'
					alignItems='center'
					my={1}
					sx={{
						// '@media (max-width: 600px)': {
						// 	justifyContent: 'center', // Center horizontally on mobile
						// 	textAlign: 'center', // Center text content on mobile
						// },
						justifyContent: 'center',
						textAlign: 'center', // Center text content on mobile

						px: 3,
						mx: 'auto', // Center horizontally
					}}>
					<Copyright />
				</Grid> */}
			</AppBar>
		</Box>
	);
}
