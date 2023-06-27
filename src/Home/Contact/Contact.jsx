import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import "./Contact.css";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pzxg5nq', 'template_xyfzvv5', form.current, 'LUUpQXMeNG7I81AmF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='bg-black w-3/2 mx-auto'>
            <h3 className='text-center text-4xl font-bold text-amber-600 my-10 pt-5'>Contact Us</h3>
            <form ref={form} onSubmit={sendEmail} className='p-10 text-amber-600'>
                <label className='text-xl'>Name</label>
                <input type="text" className='input-design' name="from_name" placeholder='Enter your name' />
                <label className='text-xl'>Email</label>
                <input type="email" className='input-design' name="form_email" placeholder='Enter your email' />
                <label className='text-xl'>Message</label>
                <textarea name="message" className='input-design' placeholder='Enter your message' />
                <input  className='text-xl btn bg-amber-600 text-white' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;
