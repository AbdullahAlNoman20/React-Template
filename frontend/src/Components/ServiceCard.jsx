// import PropTypes from "prop-types";

const ServiceCard = ({service}) => {
    const {name,description,photo} = service;
    return (
        <div className="">
            <section className="p-5">
        <div className="card bg-base-100 shadow-xl border h-[400px]">
          <figure className="px-10 pt-10">
            <img
              src={photo}
              alt="Shoes"
              className="rounded-xl h-32 "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions">
              <button className="btn btn-outline btn-warning">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

// ServiceCard.propTypes = {
//     children: PropTypes.object,
//   };

export default ServiceCard;