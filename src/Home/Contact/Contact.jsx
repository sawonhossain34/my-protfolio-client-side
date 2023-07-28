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
        <div id="contact" className=' w-3/2 mx-auto pb-10 mt-10'>
            <h3 className='text-center text-4xl font-bold text-amber-600 my-10 pt-5'>Contact Me</h3>
            <form ref={form} onSubmit={sendEmail} className='p-10 text-amber-600 md:w-full lg:w-1/2 mx-auto border-2 border-amber-600 rounded m-5 '>
                <label className='text-xl'>Name</label>
                <input type="text" className='input-design' name="from_name" placeholder='Enter your name' required />
                <label className='text-xl'>Email</label>
                <input type="email" className='input-design required' name="form_email" placeholder='Enter your email' required />
                <label className='text-xl'>Message</label>
                <textarea name="message" className='input-design required' placeholder='Enter your message' required/>
                <input  className='text-xl btn bg-amber-600 hover:text-amber-600 text-white' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;

