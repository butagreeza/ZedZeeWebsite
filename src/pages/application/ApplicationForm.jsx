import React, { useState } from 'react';
import {
	Button,
	Stepper,
	Step,
	StepLabel,
	Typography,
	TextField,
	Box,
	Paper,
	Container,
	Grid,
	FormControl,
	Select,
	MenuItem,
	InputLabel,
} from '@mui/material';

const steps = [
	'Personal Information',
	'Additional Information',
	'Confirmation',
];

const ApplicationForm = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		additionalInfo: '',
		photo: null,
		video: null,
	});

	const [videoError, setVideoError] = useState('');

	const handleChange = (field, value) => {
		setFormData((prevData) => ({ ...prevData, [field]: value }));
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleFileChange = (field, event) => {
		const file = event.target.files[0];

		if (field === 'video' && file) {
			// Check video size limit (in bytes)
			const videoSizeLimit = 10 * 1024 * 1024; // 10 MB
			if (file.size > videoSizeLimit) {
				setVideoError('Video size exceeds the limit (10 MB)');
				return;
			} else {
				setVideoError('');
			}
		}

		handleChange(field, file);
	};

	const getStepContent = (stepIndex) => {
		switch (stepIndex) {
			case 0:
				return (
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='First Name'
								name='firstName'
								value={formData.firstName}
								onChange={(e) => handleChange('firstName', e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='Last Name'
								name='lastName'
								value={formData.lastName}
								onChange={(e) => handleChange('lastName', e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								type='email'
								label='Email'
								name='email'
								value={formData.email}
								onChange={(e) => handleChange('email', e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								type='tel'
								fullWidth
								label='Phone'
								name='phoneNumber'
								value={formData.phoneNumber}
								onChange={(e) => handleChange('phoneNumber', e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl fullWidth>
								<InputLabel>Gender</InputLabel>
								<Select
									value={formData.gender}
									onChange={handleChange}
									name='gender'>
									<MenuItem value='male'>Male</MenuItem>
									<MenuItem value='female'>Female</MenuItem>
									<MenuItem value='other'>Other</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label='Age'
								name='age'
								type='number'
								value={formData.age}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
				);
			case 1:
				return (
					<>
						<TextField
							label='Additional Information'
							variant='outlined'
							fullWidth
							multiline
							rows={4}
							value={formData.additionalInfo}
							onChange={(e) => handleChange('additionalInfo', e.target.value)}
						/>
						<Box mt={2}>
							<label htmlFor='photo-upload'>
								Upload Photo:
								<input
									id='photo-upload'
									type='file'
									accept='image/*'
									onChange={(e) => handleFileChange('photo', e)}
								/>
							</label>
						</Box>
						<Box mt={2}>
							<label htmlFor='video-upload'>
								Upload Video:
								<input
									id='video-upload'
									type='file'
									accept='video/*'
									onChange={(e) => handleFileChange('video', e)}
								/>
								{videoError && (
									<Typography variant='caption' color='error'>
										{videoError}
									</Typography>
								)}
							</label>
						</Box>
					</>
				);
			case 2:
				return (
					<Typography variant='h6'>
						Please review your information before submitting.
					</Typography>
				);
			default:
				return 'Unknown stepIndex';
		}
	};

	const isLastStep = activeStep === steps.length - 1;

	return (
		<Box
			sx={{
				backgroundImage: `url('https://images.unsplash.com/photo-1493655161922-ef98929de9d8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: '50vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff', // Text color on the hero image
				textAlign: 'center',
			}}>
			<Container component='main' maxWidth='sm'>
				<Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<Box sx={{ marginTop: 2, width: '100%' }}>
						{getStepContent(activeStep)}
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							marginTop: 2,
							width: '100%',
						}}>
						<Button onClick={handleBack} disabled={activeStep === 0}>
							Back
						</Button>
						<Button
							variant='contained'
							onClick={isLastStep ? () => alert('Form Submitted') : handleNext}
							disabled={activeStep === steps.length - 1 && !isLastStep}>
							{isLastStep ? 'Submit' : 'Next'}
						</Button>
					</Box>
				</Paper>
			</Container>
		</Box>
	);
};

export default ApplicationForm;
