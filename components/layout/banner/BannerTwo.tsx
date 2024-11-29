import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hero/hero-2-dot-right.png";
import two from "@/public/img/hero/hero-hosting.png";

const BannerTwo = () => {
  return (
    <section
      className="hero-section hero-1 style-hero-2 bg-cover fix"
      style={{
        backgroundImage: "url(/img/hero/hero-bg-2.jpg)",
      }}
    >
      <div className="dot-right">
        <Image src={one} alt="img" priority />
      </div>
      <div className="hero-social">
        <span>Follow on</span>
        <Link href="/">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link href="/">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link href="/">
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
        <Link href="/">
          <i className="fa-brands fa-youtube"></i>
        </Link>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Transform Your Business with Optimal <span>Solutions</span>
              </h1>
              <div className="hero-list-items">
                <ul className="hero-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    At Optimal Services LLC, we specialize in delivering cutting-edge IT solutions tailored to your needs. From web development to cybersecurity, our team is dedicated to enhancing your business performance and security.
                  </li>
                </ul>
              </div>
              <div className="hero-author">
                <Link
                  href="contact"
                  className="theme-btn bg-color-2 "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="700"
                >
                  Get Started <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
                {/* <Link
                  href="/"
                  className="theme-btn border-white "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="700"
                >
                  Start Free <i className="fas fa-long-arrow-alt-right"></i>
                </Link> */}
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="hero-image">
              <Image src={two} alt="img" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
