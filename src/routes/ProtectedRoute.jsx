/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({
	loggedIn,
	children,
	redirectPath = '/login',
}) => {
	if (!loggedIn) {
		return <Navigate to={redirectPath} replace />;
	} else {
		<Navigate to='/' replace />;
	}
	return children ? children : <Outlet />;
};
