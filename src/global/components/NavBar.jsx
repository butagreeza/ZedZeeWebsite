import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = [
	{ title: 'HOME', path: '/' },
	{ title: 'ABOUT', path: '/about' },
	{ title: 'FINALISTS', path: '/finalists' },
	{ title: 'SHOP', path: '/shop' },
	{ title: 'BLOG', path: '/blogs' },
	{ title: 'FAQ', path: '/faqs' },
	{ title: 'CONTACT', path: '/contact-us' },
];

function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const location = useLocation(); // Get the current location

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<React.Fragment>
			<AppBar
				position='sticky'
				sx={{ backgroundColor: '#B50101', zIndex: 99999 }}>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
							<Typography variant='h3' sx={{ fontWeight: 'bold' }}>
								ZEDZEE Multimedia
							</Typography>
						</Link>
						<Box
							sx={{
								flexGrow: 100,
								display: { xs: 'flex', md: 'none' },
								justifyContent: { xs: 'flex-end' },
							}}>
							<IconButton
								size='large'
								onClick={handleOpenNavMenu}
								style={{ color: 'white' }}>
								<Menu style={{ color: 'white' }} />
							</IconButton>

							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}>
								{pages.map((page) => (
									<MenuItem
										key={page.title}
										onClick={handleCloseNavMenu}
										component={Link} // Use Link for navigation
										to={page.path}
										style={{
											textDecoration: 'none',
											color: 'red', // Apply custom color
											backgroundColor:
												location.pathname === page.path
													? '2px solid #fff'
													: 'none', // Add border-bottom for active page
										}}>
										<Typography textAlign='center'>{page.title}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Box sx={{ flexGrow: 1 }}>
							<Box
								sx={{
									display: { md: 'flex', xs: 'none' },
									justifyContent: 'flex-end',
								}}>
								{pages.map((page) => (
									<Button
										key={page.title}
										onClick={handleCloseNavMenu}
										component={Link} // Use Link for navigation
										to={page.path}
										style={{
											textDecoration: 'none',
											color: 'white',
											backgroundColor:
												location.pathname === page.path
													? 'grey'
													: 'transparent', // Add border-bottom for active page
										}}
										sx={{
											py: 2.8,

											textTransform: 'none',
											borderRadius: 0,
										}}>
										{page.title}
									</Button>
								))}
								<IconButton
									component={Link} // Use Link for navigation
									to='/checkout'
									aria-label='card'>
									<ShoppingCartIcon
										sx={{ color: '#fff' }}
										fontSize='large'
										color='inherit'
									/>
								</IconButton>
							</Box>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</React.Fragment>
	);
}

export default NavBar;
