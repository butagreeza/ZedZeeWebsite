import React, { useState } from 'react';
import globalStyles from '../../../global/assets/globalstyles';
import { Box, Button, Grid, Paper, Typography, useTheme } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Hero = ({ isSmallScreen }) => {
	const theme = useTheme();

	const [trackId, setSetTrackId] = useState('');

	const primaryColor = theme.palette.primary.main;
	const transparentPrimaryColor =
		'rgba(' +
		parseInt(primaryColor.slice(-6, -4), 16) +
		',' +
		parseInt(primaryColor.slice(-4, -2), 16) +
		',' +
		parseInt(primaryColor.slice(-2), 16) +
		',0.7)';

	const animationProps = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 2000 },
	});

	const overlayStyle = {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		background: transparentPrimaryColor,
	};

	return (
		<animated.div style={animationProps}>
			<Box
				style={
					globalStyles(
						'',
						'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					).heroStyle
				}>
				<div style={{ ...overlayStyle, position: 'absolute', zIndex: 1 }}></div>
				<Grid
					style={{
						flex: 1,
						color: '#fff',
						textAlign: 'left',
						paddingLeft: isSmallScreen ? '10px' : '20px',
						fontSize: isSmallScreen ? '16px' : '24px',
						maxWidth: '60%',
						zIndex: 2,
					}}>
					<Typography
						sx={{ fontSize: 20, fontWeight: 'bold', color: '#fff', mt: 4 }}
						variant='h5'>
						Welcome to ZedZee
					</Typography>
					<Typography
						sx={{ fontSize: isSmallScreen ? 36 : 70, fontWeight: 'bold' }}>
						DO YOU WANT TO BE A PART OF BIG SISTER SHOW 2023?
					</Typography>
					{!isSmallScreen && (
						<Typography variant='h5' sx={{ textAlign: 'left', width: '80%' }}>
							Sint adipisicing consequat laborum eiusmod esse. Magna culpa ut
							nulla laboris nostrud velit. Anim duis velit ad in proident
							incididunt reprehenderit. Ad qui laborum voluptate minim dolor
							tempor.
						</Typography>
					)}
					<Button
						component={Link}
						to={'/apply'}
						color='inherit'
						variant='contained'
						sx={{ mt: 2, p: 2, color: '#000', fontSize: 25 }}>
						Register Here
					</Button>
				</Grid>
			</Box>
			<Grid
				container
				justifyContent='center'
				spacing={0}
				sx={{
					mt: -10,
					position: 'relative',
					zIndex: 99,
				}}>
				<Grid item>
					<Paper
						sx={{
							height: '30vh',
							width: '45vh',
							backgroundColor: '#000',
							borderRadius: 0,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							// alignItems: 'center',
							p: 3,
						}}>
						<Typography
							sx={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
							REGISTERATION
						</Typography>
						<Typography sx={{ color: '#fff', mt: 5 }}>
							Aliquip anim do duis commodo proident deserunt officia anim
							deserunt. Adipisicing officia nisi labore ex excepteur quis duis
							incididunt.
						</Typography>
						<ArrowRightAltIcon
							fontSize='inherit'
							sx={{ color: '#fff', fontSize: 50, mt: 2 }}
						/>
					</Paper>
				</Grid>
				<Grid item>
					<Paper
						sx={{
							height: '30vh',
							width: '45vh',
							backgroundColor: '#808080',
							borderRadius: 0,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							// alignItems: 'center',
							p: 3,
						}}>
						<Typography
							sx={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
							AUDITION
						</Typography>
						<Typography sx={{ color: '#fff', mt: 5 }}>
							Aliquip anim do duis commodo proident deserunt officia anim
							deserunt. Adipisicing officia nisi labore ex excepteur quis duis
							incididunt.
						</Typography>
						<ArrowRightAltIcon
							fontSize='inherit'
							sx={{ color: '#fff', fontSize: 50, mt: 2 }}
						/>
					</Paper>
				</Grid>
				<Grid item>
					<Paper
						sx={{
							height: '30vh',
							width: '45vh',
							backgroundColor: '#000',
							borderRadius: 0,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							// alignItems: 'center',
							p: 3,
						}}>
						<Typography
							sx={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
							SELECTION
						</Typography>
						<Typography sx={{ color: '#fff', mt: 5 }}>
							Aliquip anim do duis commodo proident deserunt officia anim
							deserunt. Adipisicing officia nisi labore ex excepteur quis duis
							incididunt.
						</Typography>
						<ArrowRightAltIcon
							fontSize='inherit'
							sx={{ color: '#fff', fontSize: 50, mt: 2 }}
						/>
					</Paper>
				</Grid>
			</Grid>
		</animated.div>
	);
};

export default Hero;
