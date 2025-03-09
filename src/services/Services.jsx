import servicesData from '../services/ServicesData';
import { useOrderContext } from '../order/OrderContext';
import StarRatings from "react-star-ratings";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from 'react';

export default function Services() {
  const { addOrder } = useOrderContext();
  const [notification, setNotification] = useState('');

  const handleAddOrder = (service) => {
    addOrder({ ...service, quantity: 1 }); 
    setNotification(`${service.name} به سبد سفارشات شما اضافه شد!`);

    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div className="py-10">
      {notification && (
        <div className="bg-amber-500 text-white text-center p-3 rounded mb-4">
          {notification}
        </div>
      )}
      <div className="container">
        <div className="mb-12 max-w-[400px]">
          <h1 className="text-3xl font-bold">خدمات ما</h1>
        </div>
        <div className="bg1 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-white hover:bg-amber-500 hover:text-white relative shadow-xl duration-high group max-w-[300px]"
            >
              <div className="h-[145px]">
                <img
                  src={service.img}
                  className="mx-w-[200px] block mx-auto transform -translate-y-14 group-hover:rotate-6 duration-300"
                  alt={service.name}
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full">
                  <StarRatings
                    rating={4}
                    starRatedColor="yellow"
                    starDimension="20px"
                    starSpacing="15px"
                    name="rating"
                  />
                </div>
                <h1 className="text-xl font-bold">{service.name}</h1>
                <p className="text-sm line-clamp-2">{service.desc}</p>
                <h1 className="text-xl font-bold">{service.price} تومان</h1>
                <button
                  onClick={() => handleAddOrder(service)}
                  className="mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                >
                  <CiCirclePlus className="size-7" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}