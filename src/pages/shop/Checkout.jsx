import React, { useState } from 'react';
import {
	Container,
	Stepper,
	Step,
	StepLabel,
	Paper,
	Typography,
	Button,
	TextField,
	Grid,
	Box,
} from '@mui/material';
import MiniHero from '../../global/components/MiniHero';

const Checkout = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [shippingAddress, setShippingAddress] = useState({
		fullName: '',
		address: '',
		city: '',
		zipCode: '',
	});
	const [paymentMethod, setPaymentMethod] = useState('');

	const steps = ['Cart', 'Shipping Address', 'Payment', 'Review Order'];

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const CartStep = () => (
		<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
			{/* Dummy cart items */}
			<Typography variant='h6'>Cart Summary</Typography>
			<Typography>Product 1 - Le. 50.00</Typography>
			<Typography>Product 2 - Le. 30.00</Typography>
			<Typography variant='subtitle1'>Total: Le. 80.00</Typography>
		</Paper>
	);

	const ShippingAddressStep = () => (
		<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
			<Typography variant='h6'>Shipping Address</Typography>
			<TextField
				label='Full Name'
				fullWidth
				value={shippingAddress.fullName}
				onChange={(e) =>
					setShippingAddress({ ...shippingAddress, fullName: e.target.value })
				}
				sx={{ mt: 2 }}
			/>
			<TextField
				label='Address'
				fullWidth
				value={shippingAddress.address}
				onChange={(e) =>
					setShippingAddress({ ...shippingAddress, address: e.target.value })
				}
				sx={{ mt: 2 }}
			/>
			<TextField
				label='City'
				fullWidth
				value={shippingAddress.city}
				onChange={(e) =>
					setShippingAddress({ ...shippingAddress, city: e.target.value })
				}
				sx={{ mt: 2 }}
			/>
			<TextField
				label='Zip Code'
				fullWidth
				value={shippingAddress.zipCode}
				onChange={(e) =>
					setShippingAddress({ ...shippingAddress, zipCode: e.target.value })
				}
				sx={{ mt: 2 }}
			/>
		</Paper>
	);

	const PaymentStep = ({ paymentMethod, setPaymentMethod }) => (
		<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
			<Typography variant='h6'>Payment</Typography>
			<TextField
				label='Card Number'
				fullWidth
				type='text'
				// Add state and onChange handler for card number
				sx={{ mb: 2 }}
			/>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<TextField
						label='Expiration Date'
						fullWidth
						type='text'
						// Add state and onChange handler for expiration date
						sx={{ mb: 2 }}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						label='CVV'
						fullWidth
						type='password'
						// Add state and onChange handler for CVV
						sx={{ mb: 2 }}
					/>
				</Grid>
			</Grid>
			<Button
				variant='outlined'
				color='primary'
				// Add onClick handler for changing payment method
			>
				Change Payment Method
			</Button>
		</Paper>
	);

	const ReviewOrderStep = () => (
		<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
			<Typography variant='h6'>Review Order</Typography>
			<Typography>Shipping Address: {shippingAddress.fullName}</Typography>
			<Typography>Payment Method: {paymentMethod}</Typography>
			<Typography variant='subtitle1'>Total: Le. 80.00</Typography>
		</Paper>
	);

	return (
		<Box>
			<MiniHero title='CHECKOUT' description={' '} align='center' />
			<Container sx={{ mt: 4 }}>
				<Stepper activeStep={activeStep} alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<div>
					{activeStep === steps.length ? (
						<div>
							<Typography sx={{ mt: 2, mb: 4 }}>
								Thank you for your order!
							</Typography>
							<Button onClick={() => setActiveStep(0)}>
								Place Another Order
							</Button>
						</div>
					) : (
						<div>
							{activeStep === 0 && <CartStep />}
							{activeStep === 1 && <ShippingAddressStep />}
							{activeStep === 2 && <PaymentStep />}
							{activeStep === 3 && <ReviewOrderStep />}
							<div sx={{ mt: 2 }}>
								<Button disabled={activeStep === 0} onClick={handleBack}>
									Back
								</Button>
								<Button variant='contained' onClick={handleNext}>
									{activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
								</Button>
							</div>
						</div>
					)}
				</div>
			</Container>
		</Box>
	);
};

export default Checkout;
