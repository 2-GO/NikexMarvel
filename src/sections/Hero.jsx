import Button from "../components/Button";
import { arrowRight } from '../assets/icons';
import { useState } from 'react';
import { shoes, statistics } from "../constants";
import { nikethor } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
// import { Carousel } from '@material-tailwind/react; add carousel to showcase new arrivals on hero section

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(nikethor)

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">New Arrivals</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>x
          <span className= "text-red-600 ">Marvel</span>
        </h1>
        <p className="font-monsterrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Unleash Your Inner Hero with Nike x Marvel Collab</p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative drop-shadow-2xl flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center pt-20'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={410}
          height={402}
          className= 'rounded-lg object-contain relative z-10 '
        />
        
        <div className='flex drop-shadow-xl pl-10 sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              {/* <Carousel > */}
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
              {/* </Carousel> */}
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Hero;