import React, { useState } from 'react';
import {
	Box,
	Grid,
	Paper,
	Typography,
	styled,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import MiniHero from '../../global/components/MiniHero';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height: '100%',
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, .05)'
			: 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

// ... (imports)

// ... (imports)

const FAQSection = ({ title, subtitle, content, accordions }) => {
	const [expanded, setExpanded] = useState(null);
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Grid item xs={12} md={6}>
			<Item>
				<Typography
					sx={{
						fontSize: 20,
						fontWeight: 'bold',
						color: '#808080',
						mb: 2,
					}}
					variant='h5'>
					{title}
				</Typography>
				<Typography
					sx={{
						fontSize: 40,
						fontWeight: 'bold',
						textTransform: 'uppercase',
						mb: 2,
					}}>
					{subtitle}
				</Typography>
				<Typography
					variant='h5'
					sx={{
						textAlign: 'left',
						width: '80%',
					}}>
					{content}
				</Typography>
				{accordions.map((accordion, index) => (
					<Accordion
						key={index}
						sx={{ mt: 2 }}
						expanded={expanded === `panel${index}`}
						onChange={handleChange(`panel${index}`)}>
						<AccordionSummary
							aria-controls={`panel${index}d-content`}
							id={`panel${index}d-header`}>
							<Typography>{accordion.title}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>{accordion.content}</Typography>
						</AccordionDetails>
					</Accordion>
				))}
			</Item>
		</Grid>
	);
};

const Faqs = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const faqData = [
		{
			title: 'GENERAL',
			subtitle: 'Lorem ipsum dolor',
			content:
				'Sint adipisicing consequat laborum eiusmod esse. Magna culpa ut nulla laboris nostrud velit. Anim duis velit ad in proident incididunt reprehenderit. Ad qui laborum voluptate minim dolor tempor.',
			accordions: [
				{
					title: 'Collapsible Group Item #1',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
				},
				{
					title: 'Collapsible Group Item #2',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
				},
				// Add more accordions as needed
			],
		},
		{
			title: 'VOTING',
			subtitle: 'Lorem ipsum dolor',
			content:
				'Sint adipisicing consequat laborum eiusmod esse. Magna culpa ut nulla laboris nostrud velit. Anim duis velit ad in proident incididunt reprehenderit. Ad qui laborum voluptate minim dolor tempor.',
			accordions: [
				{
					title: 'Collapsible Group Item #1',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
				},
				{
					title: 'Collapsible Group Item #2',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
				},
				// Add more accordions as needed
			],
		},
		// Add more FAQ sections as needed
	];

	return (
		<Box>
			<MiniHero title='FAQs' />
			<Box sx={{ width: '100%', p: 3 }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{/* Render FAQ sections */}
					{faqData.map((faqSection, index) => (
						<FAQSection key={index} {...faqSection} />
					))}
				</Grid>
				<br />
				<br />
				{/* Add more FAQ sections as needed */}
			</Box>
		</Box>
	);
};

export default Faqs;
