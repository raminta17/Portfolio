import {Modal} from "react-bootstrap";
import {Dispatch, SetStateAction} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

type TSetBoolean = {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
}


const MessageModal = ({showModal, setShowModal}: TSetBoolean) => {

    type Inputs = {
        senderEmail: string,
        message: string
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<Inputs>();

    const submitEmail: SubmitHandler<Inputs> = async (info) => {
        const options = {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                senderEmail: info.senderEmail,
                message: info.message
            })
        }
        const response = await fetch('https://portfolio-back-end-mlsr.vercel.app/sendEmail', options);
        const data = await response.json();
        console.log('data from backend', data)
        if (data.ok) {
            setShowModal(false);
            reset();
        }
        if (!data.ok) alert('something went wrong, try again.')
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <Modal show={showModal}
               style={{
                   background: 'linear-gradient(184deg, rgba(0,0,0,0.6251750700280112) 100%, rgba(82,78,94,0.9389005602240896) 100%)',
                   paddingRight: 0
               }}
               onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title className="text-black">Get in touch</Modal.Title>
            </Modal.Header>
            <div className="w-100 d-flex flex-column p-3 gap-2">
                <form onSubmit={handleSubmit(submitEmail)} className="d-flex flex-column gap-2">
                    <input
                        className="p-2 rounded border "
                        type="email"
                        placeholder="Your email address..."
                        {...register('senderEmail', {
                            required: 'Please provide your email address so I could get back to you',
                            pattern: {value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
                                , message: 'Invalid email'}
                        })}/>
                    {errors.senderEmail && <p className="error">{errors.senderEmail.message}</p>}
                    <textarea
                        className="p-2 rounded border "
                        {...register('message', {
                            required: 'Your message can\'t be empty',
                            minLength: {value: 5, message: 'Minimum message length is 5 symbols.'}
                        })}
                        id="declined"
                        rows={5}
                        placeholder="Your message...   "/>
                    {errors.message && <p className="error">{errors.message.message}</p>}

                    <button
                        className="getInTouchBtn w-100"
                        type="submit">
                        Send
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default MessageModal;