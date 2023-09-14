import { Button } from "../components";
import { nikethanos } from "../assets/images";



const SuperQuality = () => {
  return (
    <section id="about us" className="flex justify-between items-center max-lg:flex:col gap-1 w-full max-container">
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold">
            We Provide You
            <span className= "text-red-600"> Marvel</span>
            <span className= "text-coral-red"> Quality</span> Shoes
          </h2>
          <p className="mt-8 lg:max-w-lg info-text">Indulge in Unrivaled Quality and Impeccable Design with Nike x Marvel. These shoes are a testament to craftsmanship, ensuring you stand out in style while enjoying supreme comfort and performance</p>
          <div className="mt-20 ">
          <Button label="View Details" />
          </div>
      </div>
      <div className="drop-shadow-2xl flex flex-1 flex-col w-full items-center mt-10 bg-hero bg-center bg-cover max-sm:w-full">
        <img src={nikethanos} alt={nikethanos} width={450} height={402} className="rounded-lg object-contain mt-6 mb-6 z-10 hover:scale-105"/>
      </div>
    </section>
  )
}

export default SuperQuality;