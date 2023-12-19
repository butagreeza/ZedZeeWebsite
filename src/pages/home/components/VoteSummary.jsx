import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'red',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height: '100%',
}));
const VoteSummary = ({ isSmallScreen }) => {
	return (
		<Box sx={{ width: '100%', mx: 'auto', mt: 5, px: 3 }}>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={6}>
					<Item>1</Item>
				</Grid>
				<Grid item xs={6}>
					<Typography
						sx={{ fontSize: 20, fontWeight: 'bold', color: '#808080' }}
						variant='h5'>
						VOTING
					</Typography>
					<Typography
						sx={{
							fontSize: isSmallScreen ? 16 : 40,
							fontWeight: 'bold',
							textTransform: 'uppercase',
						}}>
						Lorem ipsum dolor sit amet consectetur. Consequat in amet.
					</Typography>
					{!isSmallScreen && (
						<Typography variant='h5' sx={{ textAlign: 'left', width: '80%' }}>
							Sint adipisicing consequat laborum eiusmod esse. Magna culpa ut
							nulla laboris nostrud velit. Anim duis velit ad in proident
							incididunt reprehenderit. Ad qui laborum voluptate minim dolor
							tempor. <br /> <br /> Cillum occaecat eiusmod incididunt duis
							amet. Nisi laborum sunt occaecat magna duis. Consectetur est ad
							adipisicing officia nulla est adipisicing velit Lorem tempor anim
							nostrud. Ad mollit occaecat magna tempor nostrud et commodo minim
							incididunt. Anim sunt sunt ad occaecat ut ipsum magna.
						</Typography>
					)}
				</Grid>
			</Grid>
		</Box>
	);
};

export default VoteSummary;
