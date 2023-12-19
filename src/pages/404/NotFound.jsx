import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NotFoundPage = () => {
	return (
		<Box
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			height='100vh'>
			<Typography variant='h1' gutterBottom>
				404 - Not Found
			</Typography>
			<Typography variant='h4' gutterBottom>
				Sorry, the page you are looking for does not exist.
			</Typography>
			<Button
				variant='contained'
				color='primary'
				component={Link}
				to='/'
				size='large'>
				Go to Home
			</Button>
		</Box>
	);
};

export default NotFoundPage;
