import { Box } from '@mui/material';
import React from 'react';
import globalStyles from '../../global/assets/globalstyles';

const MiniHero = ({ bgImg, title = 'Hero Title', description, align }) => {
	const heroImage = bgImg
		? bgImg
		: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80';

	return (
		<Box>
			<div style={globalStyles(heroImage).miniHero}>
				<div style={{ ...globalStyles().leftTextStyle, zIndex: 2 }}>
					<h1 style={{ textAlign: align ? align : null }}>{title}</h1>
					<p style={{ marginTop: -20, width: '60%' }}>
						{description
							? description
							: 'Irure culpa eiusmod elit do et deserunt incididunt occaecat laboris adipisicing. Culpa incididunt dolor laborum elit dolor id. Amet sitad anim excepteur sunt cillum minim duis. Excepteur esse deserunt sunt amet eu. Ullamco magna consectetur est reprehenderit ullamco aliquip.'}
					</p>
				</div>
				<div style={globalStyles().overlay}></div>
			</div>
		</Box>
	);
};

export default MiniHero;
