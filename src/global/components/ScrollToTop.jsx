import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollStep = () => {
		if (window.pageYOffset === 0) {
			clearInterval(intervalId);
		}
		window.scroll(0, window.pageYOffset - 100);
	};

	const scrollToTop = () => {
		const intervalId = setInterval(scrollStep, 0.01);
		// Consider using React hooks for state management in functional components
		// Example: const [intervalId, setIntervalId] = useState(0);
	};

	const handleScroll = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Button
			variant='contained'
			color='primary'
			className={`scroll ${isVisible ? 'visible' : 'hidden'}`}
			onClick={scrollToTop}>
			<UpIcon sx={{ color: 'white' }} />
		</Button>
	);
};

export default ScrollToTop;
