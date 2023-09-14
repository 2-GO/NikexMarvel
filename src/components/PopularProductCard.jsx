import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full items-center bg-card bg-center bg-cover max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] mt-6 hover:scale-105"/>
      <div className="mt-3 flex justify-start gap-2.5">
        <img src={star} alt="rating"  width={24} height={24}/>
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (5.0)
        </p>
      </div>
      <h3 className="mt-1 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-1 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  )};

export default PopularProductCard;