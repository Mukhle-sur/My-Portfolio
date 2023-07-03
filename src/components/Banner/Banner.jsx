import banner from "../../assets/bg_1.png";
import myImage from "../../assets/application.jpg";
import { TypeAnimation } from "react-type-animation";
import PDFDownloadButton from "../PdfDownload/PdfDownload";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
      className=""
    >
      <div className="md:h-screen">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between h-full px-4 md:flex-row flex-col-reverse py-8">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="flex flex-col justify-center h-full md:w-1/2"
          >
            <h2 className="text-xl md:text-2xl md:font-bold text-white">
              Hi,👋 my name is
            </h2>
            <h2 className="md:text-7xl text-5xl text-white font-extrabold pb-3">
              <span className="text-sky-500">Mukhlesur </span> Rahman
            </h2>
            <h2 className="text-xl md:text-2xl md:font-bold font-semibold text-white">
              I'm junior{" "}
              <span className="text-sky-500 md:text-[34px] text-xl">
                <TypeAnimation
                  sequence={[
                    "React Developer",
                    1000,
                    "Web Developer",
                    1000,
                    "Front End Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                  ]}
                  speed={50}
                  style={{
                    fontSize: "",
                  }}
                  repeat={Infinity}
                />
              </span>
            </h2>
            <PDFDownloadButton></PDFDownloadButton>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="md:w-1/2 max-h-screen"
          >
            <img
              src={myImage}
              alt="my profile"
              className="md:w-5/6 w-4/4 md:h-5/6 h-3/4 rounded-full border-4 border-sky-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
