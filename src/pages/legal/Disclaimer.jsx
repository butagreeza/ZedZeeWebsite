import React from 'react';
import {
	Box,
	Container,
	Typography,
	List,
	ListItem,
	ListItemText,
	Divider,
} from '@mui/material';
import MiniHero from '../../global/components/MiniHero';

const Disclaimer = () => {
	return (
		<Box>
			<MiniHero title='DISCLAIMER' description={' '} align='center' />
			<Container maxWidth='md'>
				<Box my={4}>
					<Typography variant='h4' gutterBottom>
						Disclaimer
					</Typography>

					<Typography variant='body1' paragraph>
						The information contained on our website is for general information
						purposes only. The information is provided by us and while we
						endeavor to keep the information up to date and correct, we make no
						representations or warranties of any kind, express or implied, about
						the completeness, accuracy, reliability, suitability, or
						availability with respect to the website or the information,
						products, services, or related graphics contained on the website for
						any purpose. Any reliance you place on such information is therefore
						strictly at your own risk.
					</Typography>

					<Typography variant='body1' paragraph>
						In no event will we be liable for any loss or damage including
						without limitation, indirect or consequential loss or damage, or any
						loss or damage whatsoever arising from loss of data or profits
						arising out of, or in connection with, the use of this website.
					</Typography>

					<Typography variant='body1' paragraph>
						Through this website, you are able to link to other websites that
						are not under our control. We have no control over the nature,
						content, and availability of those sites. The inclusion of any links
						does not necessarily imply a recommendation or endorse the views
						expressed within them.
					</Typography>

					<Typography variant='body1' paragraph>
						Every effort is made to keep the website up and running smoothly.
						However, we take no responsibility for, and will not be liable for,
						the website being temporarily unavailable due to technical issues
						beyond our control.
					</Typography>

					<Typography variant='body1' paragraph>
						Please note that this is a generic disclaimer and does not
						constitute legal advice. For specific legal advice, please consult
						with a professional.
					</Typography>

					<Typography variant='body1' paragraph>
						Last updated: October 1, 2023
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Disclaimer;
