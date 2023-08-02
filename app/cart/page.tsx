import Checkout from "@/components/Checkoutcomponent";
import CartItem  from "../../components/CartItem"

interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string; // Assuming that the image is a URL or path to the image file
}

const cartItems: CartItemType[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    quantity: 2,
    image: 'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image URL or path
  },
  {
    id: 2,
    name: 'Product 2',
    price: 12.99,
    quantity: 1,
    image: 'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image URL or path
  },
  // Add more cart items as needed
]

function page() {
  return (
    <div className="min-h-screen bg-gray-100 py-4 px-4 sm:px-6 sm:py-6 lg:px-8 w-[100vw] flex flex-col md:flex-row gap-5">
    <div className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Shopping Cart</h2>
        <div className="mt-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        </div>
    </div>
        <div className="mt-4">
          <Checkout total={2} count={2} Discount={2000} address="lorem23"/>
        </div>
  </div>
  )
}

export default page