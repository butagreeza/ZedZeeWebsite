import React from 'react';
import Hero from './components/Hero';
import VoteSummary from './components/VoteSummary';
import SocialMedia from './components/SocialMedia';
import { useMediaQuery, useTheme } from '@mui/material';
import FinalistSlider from './components/FinalistSlider';
import SubscriptionPackages from './components/SubscriptionPackages';
import FeaturedProducts from './components/FeaturedProducts';

const Home = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<div>
			<Hero isSmallScreen={isSmallScreen} />
			<VoteSummary isSmallScreen={isSmallScreen} />
			<SocialMedia isSmallScreen={isSmallScreen} />
			<FinalistSlider isSmallScreen={isSmallScreen} />
			<SubscriptionPackages isSmallScreen={isSmallScreen} />
			<FeaturedProducts isSmallScreen={isSmallScreen} />
		</div>
	);
};

export default Home;
