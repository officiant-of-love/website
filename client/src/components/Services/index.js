
const Services = ({servicesArr}) => {
  return (
    <section className="absolute flex top-[400px] lg:top-[650px] w-full justify-center py-10">
      <div className="md:bg-[#F7F3EB] flex flex-col mx-auto md:w-[85%] text-center drop-shadow-lg p-3 md:p-6 ">
        <div className="bg-[#F7F3EB] absolute top-0 left-[12.5%] -z-10 w-3/4 h-[1575px] drop-shadow-lg md:hidden"/>
        <h1 className="font-semibold text-5xl md:mb-6 ">Services</h1>
        <div className="flex flex-col md:flex-row mx-auto">
          {servicesArr.map((service) => (
            <div className="flex flex-col mx-2 my-4 md:w-1/3">
              <h2 className="text-4xl md:text-3xl">{service.name}</h2>
              <img className="m-4" src={service.photo} alt="" />
              <p className="text-xl">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;