import img1 from "/img/Rectangle 7.png";
export default function Blog() {
  return (
    <div className="min-h-[550px] mt-12">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg1 p-6 ">
            <div>
              <img
                src={img1}
                className="max-w-[430px] mt-16 w-full mx-outo drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-right font-bold text-4xl">فود پارتی</h1>
              <p className="text-right">
                <br></br>
                <span className="font-bold"> به فود پارتی خوش آمدید</span>
                <br></br>
                ما در فود پارتی، یک تجربه منحصر به فرد از لذت‌های آشپزی را به
                شما ارائه می‌دهیم هدف ما این است که با ترکیبی از طعم‌های لذیذ و
                محیطی دلنشین، شما را به دنیای بی‌نظیر غذاهای خوشمزه دعوت کنیم
                <br></br>
                <span className="font-bold"> چرا فود پارتی؟ </span>
                <br></br>
                <br></br>
                <span className="font-bold"> منوی متنوع </span>
                <br></br>
                از غذاهای سنتی ایرانی تا بین‌المللی، ما طیفی از گزینه‌ها را برای
                هر سلیقه‌ای داریم چه به دنبال یک وعده غذایی سریع و خوشمزه باشید
                و چه یک جشن تولد ویژه، ما برای شما آماده‌ایم
                <br></br>
                <span className="font-bold"> کیفیت مواد اولیه </span>
                <br></br>
                ما به کیفیت غذاهایمان اهمیت می‌دهیم و از بهترین مواد اولیه برای
                تهیه غذاها استفاده می‌کنیم تا طعمی ناب و فراموش‌نشدنی را به شما
                ارائه دهیم
                <br></br>
                <span className="font-bold"> محیط دلنشین</span>
                <br></br>
                فضای ما طراحی شده تا شما و عزیزانتان لحظاتی خوش را در کنار هم
                بگذرانید با دکوراسیونی مدرن و گرم، هر میز خود داستانی دارد
                <br></br>
                <span className="font-bold"> خدمات حرفه‌ای</span>
                <br></br>
                تیم ما متشکل از افراد حرفه‌ای و با تجربه است که همواره آماده‌اند
                تا بهترین خدمات را به شما ارائه دهند و تجربه‌ای دلپذیر برای شما
                رقم بزنند ما به خانواده‌تان، دوستانتان و هر کسی که دوست دارید،
                خوشامد می‌گوییم بیایید و لحظات خوشی را با یکدیگر جشن بگیرید برای
                مشاهده منو، رزرو میز یا دریافت اطلاعات بیشتر، کافی است به
                بخش‌های مختلف سایت ما مراجعه کنید مشتاقانه منتظر ملاقات با شما
                هستیم
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
