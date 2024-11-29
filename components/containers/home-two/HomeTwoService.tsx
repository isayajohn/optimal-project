import Image from "next/image";
import one from "@/public/img/hosting/icon-11.png";
import two from "@/public/img/hosting/icon-12.png";
import three from "@/public/img/hosting/icon-13.png";
import four from "@/public/img/hosting/secure-data.webp";

const HomeTwoService = () => {
  return (
    <section className="hosting section-padding fix">
      <div className="container">
        <div className="hosting-wrapper">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="hosting-content style-2">
                <div className="section-title">
                  <span
                    className="style-bg "
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    Best Services
                  </span>
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    Optimal Services llc provide secure & web application hosting
                  </h2>
                </div>
                <div
                  className="hosting-items mt-4 mt-md-0 "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <div className="icon">
                    <Image src={one} alt="img" priority />
                  </div>
                  <div className="content">
                    <h4>Hosting</h4>
                    <p>
                    Hosting refers to the service that allows individuals or organizations to store and manage their website, app, 
                    or data on a server, making it accessible over the internet.
                    </p>
                  </div>
                </div>
                <div
                  className="hosting-items "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="700"
                >
                  <div className="icon">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="content">
                    <h4>Share Hosting</h4>
                    <p>
                    Shared Hosting is a type of web hosting where multiple websites are hosted on the same server,
                     sharing its resources such as CPU, RAM, and storage.
                    </p>
                  </div>
                </div>
                <div
                  className="hosting-items "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="900"
                >
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="content">
                    <h4>Dedicated Hosting</h4>
                    <p>
                    Dedicated Hosting is a type of web hosting where a client rents an entire server 
                    exclusively for their website or application. Unlike shared hosting, where multiple sites share the same server,
                     with dedicated hosting,
                     you have full control over the server's resources, including CPU, RAM, storage, and bandwidth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="hosting-image">
                <Image src={four} alt="img" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoService;
