import Image from "next/image";
import one from "@/public/img/data-center-bg.png";

const HomeTwoLocation = () => {
  return (
    <section className="data-center-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-bg "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Our Location
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Our Data Center Location
          </h2>
        </div>
        <div className="data-center-wrapper">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="data-center-image">
                <Image src={one} alt="img" priority />
                <span className="text-box box-1">Washington State</span>
                <span className="text-box box-2">United States</span>
                <span className="text-box box-2">Africa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoLocation;
