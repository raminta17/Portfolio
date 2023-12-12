import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Inputs, TSetBoolean } from '../modules/types.tsx'

const MessageModal = ({ showModal, setShowModal }: TSetBoolean) => {
	const [contactMessage, setContactMessage] = useState('')

	const apiUrl = import.meta.env.VITE_API_BASE_URL as string
	const apiUrlLocal = import.meta.env.VITE_API_BASE_URL_LOCAL as string

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>()

	const submitEmail: SubmitHandler<Inputs> = async (info) => {
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				senderEmail: info.senderEmail,
				message: info.message,
			}),
		}
		const response = await fetch(
			`${apiUrl}sendEmail` || `${apiUrlLocal}sendEmail`,
			options,
		)
		const data = await response.json()
		if (data.ok) {
			setContactMessage(
				`Thank you for your message! I will get back to you soon at ${info.senderEmail}`,
			)
			reset()
		}
		if (!data.ok) alert('something went wrong, try again.')
	}

	const handleCloseModal = () => {
		setShowModal(false)
		setContactMessage('')
	}
	return (
		<Modal
			show={showModal}
			className='messageModal'
			style={{
				background:
					'linear-gradient(184deg, rgba(0,0,0,0.6251750700280112) 100%, rgba(82,78,94,0.9389005602240896) 100%)',
				paddingRight: 0,
			}}
			onHide={handleCloseModal}
		>
			<Modal.Header closeButton>
				<Modal.Title className='text-black'>GET IN TOUCH</Modal.Title>
			</Modal.Header>
			{!contactMessage ? (
				<div className='p-3 text-black'>
					<div className='d-flex flex-column gap-3'>
						<div>
							<span>Get in touch with me directly through </span>
							<a
								className='fw-bold'
								href='mailto:raminta.alisauskaite@gmail.com?subject=SendMail&body=Description'
							>
								raminta.alisauskaite@gmail.com
							</a>
							<span> or fill this form:</span>
						</div>
						<form
							onSubmit={handleSubmit(submitEmail)}
							className='d-flex flex-column gap-2'
						>
							<input
								className='p-2 rounded border '
								type='email'
								placeholder='Your email address...'
								{...register('senderEmail', {
									required:
										'Please provide your email address so I could get back to you',
									pattern: {
										value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
										message: 'Invalid email',
									},
								})}
							/>
							{errors.senderEmail && (
								<p className='error'>{errors.senderEmail.message}</p>
							)}
							<textarea
								className='p-2 rounded border'
								{...register('message', {
									required: "Your message can't be empty",
									minLength: {
										value: 5,
										message: 'Minimum message length is 5 symbols.',
									},
								})}
								id='declined'
								rows={5}
								placeholder='Your message...   '
							/>
							{errors.message && (
								<p className='error'>{errors.message.message}</p>
							)}

							<button className='getInTouchBtn w-100' type='submit'>
								Send
							</button>
						</form>
					</div>
				</div>
			) : (
				<div className='p-4 text-black'>
					<div>{contactMessage}</div>
				</div>
			)}
		</Modal>
	)
}

export default MessageModal
