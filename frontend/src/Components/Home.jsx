import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* Banner Section */}
      <section className="border p-5 m-5 rounded-3xl">
        <div
          className="hero min-h-screen rounded-3xl"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/LdxJsFz/Dhaka-1.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                <span>
                  <Typewriter
                    words={["Welcome to the Project Template"]}
                    loop={""}
                    cursor
                    cursorStyle="✒️"
                    typeSpeed={20}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-outline btn-warning">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
