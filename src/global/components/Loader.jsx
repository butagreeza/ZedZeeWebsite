import React, { useState, useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';

const styles = {
	overlay: {
		position: 'fixed',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		zIndex: 9999,
	},
	text: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
		textShadow: '1px 1px 3px black',
	},
};

const LoadingText = ({ sentence }) => {
	const [text, setText] = useState('');
	const sentenceArray = sentence.split('');
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const typingInterval = setInterval(() => {
			setText((prevText) => prevText + sentenceArray[currentIndex]);
			setCurrentIndex((prevIndex) => (prevIndex + 1) % sentenceArray.length);

			if (currentIndex === sentenceArray.length - 1) {
				setText('');
			}
		}, 500); // Adjust the interval as needed

		return () => {
			clearInterval(typingInterval);
		};
	}, [currentIndex, sentenceArray]);

	return (
		<div style={styles.overlay}>
			<Typography variant='h4' style={styles.text}>
				{text}
			</Typography>
			<CircularProgress size={60} style={{ color: 'white' }} />
		</div>
	);
};

const Loader = ({ sentence = 'POST IT....', isVisible }) => {
	return isVisible ? <LoadingText sentence={sentence} /> : null;
};

export default Loader;
