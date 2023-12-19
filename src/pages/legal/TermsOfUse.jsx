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

const TermsOfUse = () => {
	return (
		<Box>
			<MiniHero title='TERM OF USE' description={' '} align='center' />
			<Container maxWidth='md'>
				<Box my={4}>
					<Typography variant='h4' gutterBottom>
						Terms of Use
					</Typography>

					<Typography variant='body1' paragraph>
						Welcome to our website. If you continue to browse and use this
						website, you are agreeing to comply with and be bound by the
						following terms and conditions of use, which together with our
						privacy policy govern our relationship with you in relation to this
						website. If you disagree with any part of these terms and
						conditions, please do not use our website.
					</Typography>

					<Typography variant='h5' gutterBottom>
						The use of this website is subject to the following terms of use:
					</Typography>

					<List>
						<ListItem>
							<ListItemText>
								The content of the pages of this website is for your general
								information and use only. It is subject to change without
								notice.
							</ListItemText>
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText>
								Neither we nor any third parties provide any warranty or
								guarantee as to the accuracy, timeliness, performance,
								completeness, or suitability of the information and materials
								found or offered on this website for any particular purpose. You
								acknowledge that such information and materials may contain
								inaccuracies or errors, and we expressly exclude liability for
								any such inaccuracies or errors to the fullest extent permitted
								by law.
							</ListItemText>
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText>
								Your use of any information or materials on this website is
								entirely at your own risk, for which we shall not be liable. It
								shall be your own responsibility to ensure that any products,
								services, or information available through this website meet
								your specific requirements.
							</ListItemText>
						</ListItem>
					</List>

					<Typography variant='h5' gutterBottom>
						Unauthorised use of this website may give rise to a claim for
						damages and/or be a criminal offence.
					</Typography>

					<Typography variant='body1' paragraph>
						From time to time, this website may also include links to other
						websites. These links are provided for your convenience to provide
						further information. They do not signify that we endorse the
						website(s). We have no responsibility for the content of the linked
						website(s).
					</Typography>

					<Typography variant='body1' paragraph>
						Your use of this website and any dispute arising out of such use of
						the website is subject to the laws of [your country].
					</Typography>

					<Typography variant='body1' paragraph>
						Last updated: October 1, 2023
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default TermsOfUse;
