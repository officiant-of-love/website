import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const [sent, setSent] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        service: '',
        message: ''
    });

    const changeHandler = (e) => {
        let { name, value } = e.target;
        if (name === 'phone') {
            const validatedValue = value.replace(/[^0-9]/g, "");
            value = validatedValue;
        }
        setFormValues({
            ...formValues,
            [name]: value
        })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(document.querySelector('input[name="phone"]').value.length < 10) {
            alert('Please double check your phone number and try again');
        } else {
            emailjs.send('service_kt8il4a', 'template_rvwxk9q', formValues, 'Y4DVl1ny8VVvZKICh')
                .then((result) => {
                    setSent(true);
                    console.log("yay!",result.text);
                }, (error) => {
                    console.log("oh no :(",error.text);
                });
        }
    };
    return (
        <form className="w-full flex flex-col">
           {sent ? (
               <h2 className='text-center'>
                   Form successfully submitted!
               </h2>
           ) : (
               <>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="bg-[#F7F3EB] w-full border border-black/20" onChange={changeHandler} />
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone" className="bg-[#F7F3EB] w-full border border-black/20" onChange={changeHandler} />
                <label htmlFor="service">Service</label>
                <select name="service" id="service" className="bg-[#F7F3EB] w-full border border-black/20 " onChange={changeHandler}>
                    <option value="" className="text-black/20">Select a service</option>
                    <option value="wedding">Wedding</option>
                    <option value="funeral">Funeral</option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea type="text" id="message" name="message" rows='5' className="bg-[#F7F3EB] w-full border border-black/20" onChange={changeHandler} />
                <button type="button" className="bg-[#F7F3EB] w-1/4 mx-auto border border-black/20 mt-5" onClick={submitHandler}>Submit</button>
               </>
           )}
        </form>
    );
};

export default Form;