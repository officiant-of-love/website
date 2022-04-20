import { useState } from 'react';

const Form = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        service: '',
        message: ''
    });
    
    const changeHandler = (e) => {
        let { name, value } = e.target;
        if(name === 'phone') {
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
        console.log(formValues)
    };
    return (
        <form className="w-full flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="bg-[#F7F3EB] w-full border border-black/20" onChange={changeHandler}/>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" className="bg-[#F7F3EB] w-full border border-black/20" onChange={changeHandler}/>
            <label htmlFor="service">Service</label>
            <select name="service" id="service" className="bg-[#F7F3EB] w-full border border-black/20 " onChange={changeHandler}>
                <option value="" className="text-black/20">Select a service</option>
                <option value="wedding">Wedding</option>
                <option value="funeral">Funeral</option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea type="text"  id="message" name="message" rows='5' className="bg-[#F7F3EB] w-full border border-black/20" onChange={changeHandler}/>
            <button type="button" className="bg-[#F7F3EB] w-1/4 mx-auto border border-black/20 mt-5" onClick={submitHandler}>Submit</button>
        </form>
    );
};

export default Form;