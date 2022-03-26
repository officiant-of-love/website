
const Services = ({servicesArr}) => {

  return (
    <section className="absolute flex top-[400px] lg:top-[650px] w-full h-[965px] justify-center">
      <div className="bg-[#F7F3EB] flex flex-col m-auto w-[85%] p-6 text-center">
        <h1 className="font-semibold text-5xl mb-6 ">Services</h1>
        <div className="flex mx-auto">
          {servicesArr.map((service) => (
            <div className="flex flex-col mx-2 lg:w-[330px]">
              <h2 className="text-3xl">{service.name}</h2>
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
