import { useMediaQuery, useTheme } from '@mui/material';

const globalStyles = (miniUrl, heroUrl) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const containerStyle = {
		justifyContent: 'center',
		height: '100vh',
		backgroundColor: '#f0f0f0',
	};

	const miniHero = {
		backgroundImage: `url("${miniUrl}")`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: isSmallScreen ? '20vh' : '35vh',
		padding: '0 20px',
		boxSizing: 'border-box',
		position: 'relative', // Position relative for pseudo-element
	};

	const overlay = {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: 'rgba(255, 0, 0, 0.5)', // Red color with 50% opacity
	};

	const heroStyle = {
		backgroundImage: `url("${heroUrl}")`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: '100vh',
		padding: '0 20px',
		boxSizing: 'border-box',
		position: 'relative',
	};

	const leftTextStyle = {
		flex: 1,
		color: '#fff',
		textAlign: 'left',
		paddingLeft: isSmallScreen ? '10px' : '20px', // Adjust padding for smaller screens
		fontSize: isSmallScreen ? '10px' : '18px', // Adjust font size for smaller screens
	};
	const centerTextStyle = {
		flex: 1,
		color: '#fff',
		textAlign: 'center',
		paddingLeft: isSmallScreen ? '10px' : '20px', // Adjust padding for smaller screens
		fontSize: isSmallScreen ? '10px' : '18px', // Adjust font size for smaller screens
	};

	const rightTextStyle = {
		flex: 1,
		color: '#fff',
		textAlign: 'right',
		paddingLeft: isSmallScreen ? '10px' : '20px', // Adjust padding for smaller screens
		paddingRight: isSmallScreen ? '10px' : '20px', // Adjust padding for smaller screens
		fontSize: isSmallScreen ? '8px' : '18px', // Decrease font size for smaller screens
	};

	return {
		containerStyle,
		heroStyle,
		leftTextStyle,
		rightTextStyle,
		miniHero,
		centerTextStyle,
		overlay,
	};
};

export default globalStyles;
