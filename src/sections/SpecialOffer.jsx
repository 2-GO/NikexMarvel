import { Button } from "../components";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";



const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
       <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold">
            <span className= "text-coral-red"> Special</span>
            <span> Offer</span> 
          </h2>
          <p className="mt-8 lg:max-w-lg info-text">🏃‍♂️Don't let this opportunity slip away! Head to your nearest Nike store or shop online today and step into savings like never before. Act fast and step in style🏃‍♂️</p>
          <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-coral-red" textColor="text-coral-red"/>
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer;