import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting/icon-4.png";
import two from "@/public/img/hosting/icon-5.png";
import three from "@/public/img/hosting/icon-7.png";
import four from "@/public/img/hosting/icon-8.png";

const HomeTwoHosting = () => {
  return (
    <section className="hosting-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span
              className="style-bg"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Premium Feature
            </span>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              Explore Our Cutting-Edge <br /> Technology Services
            </h2>
          </div>
          <Link
            href="pricing"
            className="theme-btn"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            See All Features <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="hosting-box-items">
              <div className="icon">
                <Image src={one} alt="e-Labs" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="e-labs">e-Labs</Link>
                </h3>
                <p>
                  Hands-on virtual training with AWS, Azure, Linux, and Google
                  Cloud for real-world projects and collaboration.
                </p>
                <Link href="e-labs" className="theme-btn mt-4">
                  Learn More <i className="fa-regular fa-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="hosting-box-items">
              <div className="icon">
                <Image src={two} alt="Web & Mobile App Development" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="app-development">App Development</Link>
                </h3>
                <p>
                  Build responsive web and mobile apps with API integration,
                  e-commerce functionality, and user-centric designs.
                </p>
                <Link href="app-development" className="theme-btn mt-4">
                  Learn More <i className="fa-regular fa-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="hosting-box-items">
              <div className="icon">
                <Image src={three} alt="Data-Driven Websites" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="data-driven-websites">Data-Driven Websites</Link>
                </h3>
                <p>
                  Optimize your online presence with analytics dashboards, SEO,
                  and CRM integrations.
                </p>
                <Link href="data-driven-websites" className="theme-btn mt-4">
                  Learn More <i className="fa-regular fa-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="hosting-box-items">
              <div className="icon">
                <Image src={four} alt="Enhanced Security" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="security">Enhanced Security</Link>
                </h3>
                <p>
                  Advanced encryption, MFA, and compliance tools to protect
                  your data and systems.
                </p>
                <Link href="security" className="theme-btn mt-4">
                  Learn More <i className="fa-regular fa-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoHosting;
