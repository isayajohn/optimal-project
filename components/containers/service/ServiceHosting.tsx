import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting/icon-1.png";
import two from "@/public/img/hosting/icon-2.png";
import three from "@/public/img/hosting/icon-3.png";
import four from "@/public/img/hosting/icon-4.png";
import five from "@/public/img/hosting/icon-5.png";
import six from "@/public/img/hosting/icon-6.png";

const ServiceHosting = () => {
  return (
    <section className="hosting-section fix section-padding pb-0">
      <div className="container">
        <div className="section-title text-center">
          <span data-aos="fade-up" data-aos-duration="800">
            Best Services
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Explore Our Comprehensive Services 
          </h2>
          <p>
            At Optimal Services LLC, we specialize in delivering tailored IT
            <br />solutions that empower businesses to thrive in a digital landscape.
            <br/>Our services range from web and mobile application development to cybersecurity audits.
          </p>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={one} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="dedicated-hosting">Dedicated Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={two} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="dedicated-hosting">Web Development</Link>
                </h3>
                <p>
                  Our web development services include creating responsive websites that enhance user experience and drive engagement, ensuring your business stands out online.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={three} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="dedicated-hosting">Cybersecurity</Link>
                </h3>
                <p>
                  We offer robust cybersecurity solutions to protect your business from threats,
                  including ongoing support to safeguard your information systems.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={four} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="cloud-hosting">Cloud Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={five} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="reseller-hosting">Reseller Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={six} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="vps-hosting">VPS Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHosting;
