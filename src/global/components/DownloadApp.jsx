import { useTheme } from '@emotion/react';
import {
	Box,
	Button,
	ImageList,
	ImageListItem,
	Stack,
	Typography,
	useMediaQuery,
} from '@mui/material';
import React from 'react';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

const DownloadApp = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const cols = isSmallScreen ? 5 : itemData.length; // Adjust the number of columns based on screen size

	return (
		<Box sx={{}}>
			<Box
				sx={{
					width: '90%',
					mx: 'auto',
					mt: 5,
					px: 1,
					mb: -15,
					position: 'relative',
					zIndex: 9999,
					height: isSmallScreen ? '15vh' : '25vh',
					maxWidth: '100%',
					backgroundColor: '#f2f2f2',
					display: 'flex',
					alignItems: 'center',
				}}>
				<ImageList
					sx={{ width: '100%', height: '100%' }}
					cols={cols}
					rowHeight={isSmallScreen ? 100 : 200} // Adjust the row height for small screens
				>
					{itemData.map((item) => (
						<ImageListItem key={item.img}>
							<img
								srcSet={`${item.img}`}
								src={`${item.img}`}
								alt={item.title}
								loading='lazy'
								style={{
									objectFit: 'contain',
									width: '100%',
									height: '100%',
								}}
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Box>

			<Box
				sx={{
					width: '98%',
					mx: 'auto',
					mt: 5,
					px: 3,
					mb: -10,
					position: 'relative',
					zIndex: 9998,
					height: '30vh',
					maxWidth: '100%',
					backgroundColor: 'grey',
					alignItems: 'center',
				}}>
				<Typography
					variant='h1'
					pt={{ xs: 6, sm: 8, md: 12 }}
					sx={{
						textAlign: 'center',
						fontWeight: 'bold',
						color: '#fff',
						fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
					}}>
					DOWNLOAD THE ZEDZEE MOBILE APP
				</Typography>

				<Stack
					direction='row'
					spacing={isSmallScreen ? 5 : 10}
					mt={5}
					justifyContent='center'>
					<Button
						sx={{
							backgroundColor: '#000',
							color: '#fff',
							fontSize: isSmallScreen ? '0.5rem' : '1rem',
							padding: isSmallScreen ? '0.5rem 1rem' : '1rem 2rem',
						}}
						variant='contained'
						startIcon={<AndroidIcon />}>
						Google Play
					</Button>
					<Button
						sx={{
							backgroundColor: '#000',
							color: '#fff',
							fontSize: isSmallScreen ? '0.5rem' : '1rem',
							padding: isSmallScreen ? '0.5rem 1rem' : '1rem 2rem',
						}}
						variant='contained'
						startIcon={<AppleIcon fontSize='large' />}>
						Apple Store
					</Button>
				</Stack>
			</Box>
		</Box>
	);
};

export default DownloadApp;

const itemData = [
	{
		img: 'https://voting.byteltd.com/static/media/byte_logo_vote.85e411ba8d458b71a0f4.png',
		title: 'Breakfast',
	},
	{
		img: 'https://voting.byteltd.com/static/media/byte_logo_vote.85e411ba8d458b71a0f4.png',
		title: 'Burger',
	},
	{
		img: 'https://voting.byteltd.com/static/media/byte_logo_vote.85e411ba8d458b71a0f4.png',
		title: 'Camera',
	},
	{
		img: 'https://voting.byteltd.com/static/media/byte_logo_vote.85e411ba8d458b71a0f4.png',
		title: 'Coffee',
	},
	{
		img: 'https://voting.byteltd.com/static/media/byte_logo_vote.85e411ba8d458b71a0f4.png',
		title: 'Hats',
	},
	{
		img: 'https://voting.byteltd.com/static/media/byte_logo_vote.85e411ba8d458b71a0f4.png',
		title: 'Coffee',
	},
	{
		img: 'https://voting.byteltd.com/static/media/byte_logo_vote.85e411ba8d458b71a0f4.png',
		title: 'Hats',
	},
];
