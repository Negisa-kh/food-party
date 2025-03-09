import imag1 from "/img/pic1.png";
import imag2 from "/img/pic5.png";
import imag3 from "/img/pic4.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const ImageList = [
  {
    id: 1,
    img: imag1,
  },
  {
    id: 2,
    img: imag2,
  },
  {
    id: 3,
    img: imag3,
  },
];
export default function Hero() {
  const [imagaId, setImageId] = useState(imag1);
  return (
    <div className="bgImage">
      <div className="  bg1   min-h-[550px] sm:min-h-[600px]  bg-white flex justify-center items-center duration-200 shadow-lg mt-8">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/*text section*/}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold ">
                به فود پارتی{" "}
                <spn className="text-amber-700  leading-[1.5] ">خوش آمدید </spn>
              </h1>
              <p className="text-sm">
                ما بیش از 1500 نفر «میزبان» هستیم که در بخش‌های مختلف «گروه
                غذایی فود پارتی» برای رشد و توسعه در تلاشیم. افتخار ما «میزبانی
                تمام‌عیار» است. خاطره‌سازیم و به امید خلق تجربه‌ای عمیق و
                لذت‌بخش برای میهمانانمان قدم بر‌می‌داریم
              </p>
              <div>
                <Link to="/order">
                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                    ثبت سفارش
                  </button>
                </Link>
              </div>
            </div>
          
            <div className="min-h-[450px] sm:min-h-[500px] flex justify-center items-center relative order-1 sm:order-2">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  src={imagaId}
                  className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin "
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-0 lg:right-10 bg-white rounded-full">
                {ImageList.map((item) => (
                  <img
                    className="max-w-[50px] h-[80px] object-contain inline-block hover:scale-105"
                    key={item.id}
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? imag1 : item.id === 2 ? imag2 : imag3
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
