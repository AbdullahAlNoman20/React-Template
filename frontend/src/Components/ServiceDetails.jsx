import {useLoaderData } from "react-router-dom";

const ServiceDetails = () => {

    const service = useLoaderData()
    
    return (
        <div>
          <section className="p-5">
        <div className="card bg-base-100 shadow-xl border h-[400px]">
          <figure className="px-10 pt-10">
            <img src={service.photo} alt="Photo" className="rounded-xl h-32 " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{service.name}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      </section>
        </div>
    );
};

export default ServiceDetails;