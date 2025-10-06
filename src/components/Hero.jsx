import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section id="Home">
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(60vh-6rem)]">
      {/* Empty div for spacing or image */}


      {/* Text Section */}
      <div className="flex flex-col justify-center items-start h-[90vh] lg:h-auto ml-8">
        <div>
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider my-4 text-left">
            I'm Prajith Sasikumar
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-left">
            Software Developer
          </h2>
        </div>
      </div>
       <Spline scene="https://prod.spline.design/xVDT2ZGzVlOPrKaV/scene.splinecode" />
    </main>
    </section>
  )
}

export default Hero;

 <Spline scene="https://prod.spline.design/xVDT2ZGzVlOPrKaV/scene.splinecode" />
