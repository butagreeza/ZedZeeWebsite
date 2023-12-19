import {
	Box,
	Button,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Paper,
	Typography,
} from '@mui/material';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SubscriptionPackage = ({ name, backgroundColor }) => {
	const packages = Array.from(
		{ length: 5 },
		(_, index) => `Package ${index + 1}`,
	);

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Paper
				sx={{
					height: '30vh',
					width: '100%',
					maxWidth: '100%',
					backgroundColor,
					borderRadius: 0,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					p: 3,
				}}
			/>
			<Box
				sx={{
					mt: -10,
					position: 'relative',
					zIndex: 99,
					height: '70%',
					width: '90%',
					maxWidth: '100%',
					backgroundColor: '#fff',
					borderRadius: 0,
					display: 'flex',
					flexDirection: 'column',
					mx: 'auto',
					p: 3,
					boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
					mb: 10,
				}}>
				<Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
					{name}
				</Typography>
				<List sx={{ padding: 0 }}>
					{packages.map((packageText, index) => (
						<ListItem key={index} disablePadding>
							<ListItemButton>
								<ListItemIcon sx={{ marginRight: -2 }}>
									<CheckCircleIcon />
								</ListItemIcon>
								<ListItemText primary={packageText} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Button variant='contained'>Get Package</Button>
			</Box>
		</Grid>
	);
};

const SubscriptionPackages = ({ isSmallScreen }) => {
	const packagesData = [
		{ name: 'GOLD PACKAGE', backgroundColor: '#DA8080' },
		{ name: 'SILVER PACKAGE', backgroundColor: '#DA8080' },
		{ name: 'BRONZE PACKAGE', backgroundColor: '#DA8080' },
	];

	return (
		<Box sx={{ width: '100%', mx: 'auto', mt: 5, px: 3 }}>
			<Typography
				sx={{
					fontSize: isSmallScreen ? 16 : 40,
					fontWeight: 'bold',
					textTransform: 'uppercase',
				}}>
				Subscription Packages
			</Typography>
			<Grid
				container
				justifyContent={isSmallScreen ? 'center' : 'space-between'}
				spacing={3}
				sx={{
					mt: 1,
					zIndex: 99,
					flexDirection: isSmallScreen ? 'column' : 'row',
				}}>
				{packagesData.map((packageData, index) => (
					<SubscriptionPackage key={index} {...packageData} />
				))}
			</Grid>
		</Box>
	);
};

export default SubscriptionPackages;
