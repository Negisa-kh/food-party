import { useOrderContext } from '../order/OrderContext';

const Order = () => {
  const { orders, removeOrder, getTotalPrice } = useOrderContext();

  if (orders.length === 0) {
    return (
      <div className="flex justify-center font-bold text-4xl bg1 h-[30rem] items-center">
        سفارشی وجود ندارد
      </div>
    );
  }

  const totalPrice = getTotalPrice();

  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl m-5">سفارشات شما:</h1>
      <div className="bg1 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
        {orders.map((order) => (
          <div key={order.id} className="flex flex-col items-center mb-4 relative">
            <h2 className="text-lg font-bold">{order.name}</h2>
            <img src={order.img} alt={order.name} className="w-32 h-32 object-cover" />
            <p className="text-sm line-clamp-2 text-center">{order.desc}</p>
            <p className="text-sm">تعداد: {order.quantity}</p> 
            <h1 className="text-xl font-bold">{order.price} تومان</h1>
            <button
              onClick={() => removeOrder(order)}
              className="mt-2 bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-white text-center text-xl font-bold mt-4 bg-amber-500 p-10 rounded-lg">
          مجموع قیمت: {totalPrice} تومان
        </h2>
      </div>
    </div>
  );
};

export default Order;