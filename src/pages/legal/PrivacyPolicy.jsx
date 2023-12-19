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

const PrivacyPolicy = () => {
	return (
		<Box>
			<MiniHero title='PRIVACY POLICY' description={' '} align='center' />

			<Container maxWidth='md'>
				<Box my={4}>
					<Typography variant='h4' gutterBottom>
						Privacy Policy
					</Typography>

					<Typography variant='body1' paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						vehicula risus sit amet libero cursus, a tristique libero tristique.
						Nullam vestibulum, velit id vulputate consequat, turpis tellus
						hendrerit erat, a tempus sem dui vel elit.
					</Typography>

					<Typography variant='body1' paragraph>
						Integer tincidunt, libero a vulputate congue, odio elit tincidunt
						elit, nec sollicitudin odio augue ut erat. Aliquam erat volutpat.
						Integer vel ex nec turpis interdum vulputate. Curabitur gravida nibh
						ac diam feugiat, sit amet gravida dui tempor. Praesent laoreet,
						ligula vel laoreet bibendum, mi est ullamcorper erat, eu luctus
						felis felis at eros. Vivamus a fringilla est. Sed at luctus leo.
					</Typography>

					<Typography variant='h5' gutterBottom>
						Information We Collect
					</Typography>

					<List>
						<ListItem>
							<ListItemText>
								<strong>Personal Information:</strong> Lorem ipsum dolor sit
								amet, consectetur adipiscing elit.
							</ListItemText>
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText>
								<strong>Usage Data:</strong> Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.
							</ListItemText>
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText>
								<strong>Cookies:</strong> Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.
							</ListItemText>
						</ListItem>
					</List>

					<Typography variant='h5' gutterBottom>
						How We Use Your Information
					</Typography>

					<Typography variant='body1' paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						vehicula risus sit amet libero cursus, a tristique libero tristique.
						Nullam vestibulum, velit id vulputate consequat, turpis tellus
						hendrerit erat, a tempus sem dui vel elit.
					</Typography>

					<Typography variant='h5' gutterBottom>
						Third-Party Services
					</Typography>

					<Typography variant='body1' paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						vehicula risus sit amet libero cursus, a tristique libero tristique.
						Nullam vestibulum, velit id vulputate consequat, turpis tellus
						hendrerit erat, a tempus sem dui vel elit.
					</Typography>

					<Typography variant='h5' gutterBottom>
						Changes to This Privacy Policy
					</Typography>

					<Typography variant='body1' paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						vehicula risus sit amet libero cursus, a tristique libero tristique.
						Nullam vestibulum, velit id vulputate consequat, turpis tellus
						hendrerit erat, a tempus sem dui vel elit.
					</Typography>

					<Typography variant='body1' paragraph>
						Last updated: October 1, 2023
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default PrivacyPolicy;
