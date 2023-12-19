import React from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
	Zoom,
} from '@mui/material';

const AlertModal = ({ open, message, onClose }) => {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			TransitionComponent={Zoom} // Use Zoom transition
			keepMounted
			aria-labelledby='alert-dialog-slide-title'
			aria-describedby='alert-dialog-slide-description'>
			<DialogTitle>Post It Alert</DialogTitle>
			<DialogContent>
				<DialogContentText>{message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} variant='contained' color='primary'>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AlertModal;
