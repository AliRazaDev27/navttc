import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../store"
import { incrementQuantity, decrementQuantity, removeFromCart } from "../store/features/cart/cartSlice"
import type { CartItem } from "../store/features/cart/cartSlice"

export default function ModelCard() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const total = cartItems.reduce((acc: number, item: CartItem) => acc + item.product.price * item.quantity, 0)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-4 py-5 rounded-full font-semibold bg-green-600 text-white relative">
          Cart
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="bg-neutral-300 w-96">
        <div className="p-4">
          <h3 className="text-lg font-bold mb-4">Your Cart</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item: CartItem) => (
                <div key={item.product.id} className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img src={item.product.thumbnail} alt={item.product.title} className="w-16 h-16 object-cover rounded-md" />
                    <div>
                      <h4 className="font-bold">{item.product.title}</h4>
                      <p className="text-gray-700">${item.product.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => dispatch(decrementQuantity(item.product.id))} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementQuantity(item.product.id))} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md">+</button>
                    <button onClick={() => dispatch(removeFromCart(item.product.id))} className="text-red-500 hover:text-red-700">Remove</button>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-400 mt-4 pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-4">Checkout</button>
              </div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
