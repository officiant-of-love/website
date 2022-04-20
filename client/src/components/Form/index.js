const Form = () => {
    return (
        <form className="w-full flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="bg-[#F7F3EB] w-full border border-black/20"/>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" className="bg-[#F7F3EB] w-full border border-black/20"/>
            <label htmlFor="service">Service</label>
            <select name="service" className="bg-[#F7F3EB] w-full border border-black/20 ">
                <option value="" className="text-black/20">Select a service</option>
                <option value="wedding">Wedding</option>
                <option value="funeral">Funeral</option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" rows='5' className="bg-[#F7F3EB] w-full border border-black/20"/>
            <button type="submit" className="bg-[#F7F3EB] w-1/4 mx-auto border border-black/20 mt-5">Submit</button>
        </form>
    );
};

export default Form;