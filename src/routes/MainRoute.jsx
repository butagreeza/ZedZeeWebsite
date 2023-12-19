import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Auth from '../pages/auth/ResetPassword';
import Home from '../pages/home';
import NotFoundPage from '../pages/404/NotFound';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ResetPassword from '../pages/auth/ResetPassword';
import ApplicationForm from '../pages/application/ApplicationForm';
import MainShop from '../pages/shop/MainShop';
import Finalists from '../pages/contestants/FInalists';
import Faqs from '../pages/contact/Faqs';
import ContactUs from '../pages/contact/ContactUs';
import ContestantPage from '../pages/contestants/ContestantPage';
import Blogs from '../pages/blog/Blogs';
import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import TermsOfUse from '../pages/legal/TermsOfUse';
import Disclaimer from '../pages/legal/Disclaimer';
import About from '../pages/about/About';
import Checkout from '../pages/shop/Checkout';
import LiveStream from '../pages/home/LiveStream';

export default function MainRoute() {
	// const { loggedIn } = useSelector((state) => state.user);
	const loggedIn = false;

	return (
		<Routes>
			<Route path='/' element={<Home />} />

			<Route
				path='/login'
				element={loggedIn ? <Navigate to='/' /> : <Login />}
			/>
			<Route path='/register' element={<Register />} />
			<Route path='/reset-password' element={<ResetPassword />} />
			<Route path='/apply' element={<ApplicationForm />} />
			<Route path='/shop' element={<MainShop />} />
			<Route path='/finalists' element={<Finalists />} />
			<Route path='/faqs' element={<Faqs />} />
			<Route path='/contact-us' element={<ContactUs />} />
			<Route path='/contestant' element={<ContestantPage />} />
			<Route path='/blogs' element={<Blogs />} />
			<Route path='/privacy-policy' element={<PrivacyPolicy />} />
			<Route path='/terms-of-use' element={<TermsOfUse />} />
			<Route path='/disclaimer' element={<Disclaimer />} />
			<Route path='/about' element={<About />} />
			<Route path='/checkout' element={<Checkout />} />
			<Route path='/livestream' element={<LiveStream />} />

			<Route element={<ProtectedRoute loggedIn={loggedIn} />}>
				<Route path='/' element={<Home />} />
			</Route>
			{/* Add a catch-all route for 404 */}
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}
