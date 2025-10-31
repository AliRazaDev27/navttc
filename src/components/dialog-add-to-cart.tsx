import type { Product } from "../../types";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";


export default function DialogAddToCart({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Add to Cart</button>
      </DialogTrigger>
      <DialogContent className="bg-neutral-300">
        <DialogHeader>
          <DialogTitle>Add to Cart</DialogTitle>
          <DialogDescription>
            You are about to add the following item to your cart:
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-4">
          <img src={product.thumbnail} alt={product.title} className="w-24 h-24 object-cover rounded-md" />
          <div>
            <h3 className="font-bold">{product.title}</h3>
            <p className="text-gray-700 text-lg font-semibold">${product.price}</p>
          </div>
        </div>
<div className="flex items-center justify-between mt-4">
  <div className="flex items-center gap-4">
    <p>Quantity:</p>
    <div className="flex items-center gap-2">
      <button
        onClick={() => setQuantity(q => Math.max(1, q - 1))}
        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => setQuantity(q => q + 1)}
        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
      >
        +
      </button>
    </div>
  </div>
  <div>
    <p className="font-bold">Total: ${(product.price * quantity).toFixed(2)}</p>
  </div>
</div>
<DialogFooter>
  <DialogClose asChild>
    <button className="bg-red-400 hover:bg-red-500 text-gray-200 px-4 py-2 rounded-md">Cancel</button>
  </DialogClose>
  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Confirm</button>
</DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
