import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { IProduct } from "@/types"
import { Image, Upload, Star, Trash2 } from "lucide-react"
import { useState } from "react"
import { uploadImages, updateProduct, deleteProductImage } from "@/api/products"
import { toast } from "sonner"
import { getImage } from "@/lib/utils"

export default function ManageProductGallery({
  product,
}: {
  product: IProduct
}) {
  const [images, setImages] = useState<File[]>([])
  const [isUploading, setIsUploading] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files))
    }
  }

  const handleImageUpload = async () => {
    if (images.length === 0) {
      toast.error("Please select at least one image to upload.")
      return
    }

    setIsUploading(true)
    const formData = new FormData()
    formData.append("productId", product._id)
    images.forEach((image) => {
      formData.append("images", image)
    })

    try {
      const uploadResult = await uploadImages(formData)
      if (uploadResult && uploadResult.success) {
        toast.success("Images uploaded and product updated successfully!")
      } else {
        toast.error("Failed to upload images.")
      }
    } catch (error) {
      console.error("An error occurred while uploading images.", error)
      toast.error("An error occurred while uploading images.")
    } finally {
      setIsUploading(false)
    }
  }

  const handleSetThumbnail = async (imageUrl: string) => {
    try {
      await updateProduct(product._id, { thumbnail: imageUrl });
      toast.success("Thumbnail updated successfully!");
    } catch (error) {
      console.error("Failed to update thumbnail:", error);
      toast.error("Failed to update thumbnail.");
    }
  };

  const handleRemoveImage = async (imageUrl: string) => {
    try {
      await deleteProductImage(product._id, imageUrl);
      toast.success("Image removed successfully!");
    } catch (error) {
      console.error("Failed to remove image:", error);
      toast.error("Failed to remove image.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          title="Gallery"
          className="text-primary hover:text-primary"
        >
          <Image className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Product Gallery</DialogTitle>
          <DialogDescription>
            Manage gallery for <strong>{product._id}</strong>.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="grow"
            />
            <Button
              onClick={handleImageUpload}
              disabled={isUploading || images.length === 0}
            >
              <Upload className="mr-2 h-4 w-4" />
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images?.map((url, index) => (
              <div key={index} className="relative">
                <img
                  src={getImage(url)}
                  alt={`Product image ${index + 1}`}
                  className="h-24 w-24 rounded-md object-cover"
                />
                <div className="absolute top-1 right-1 flex flex-col gap-1">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 border border-black"
                    onClick={() => handleSetThumbnail(url)}
                  >
                    <Star className={`h-4 w-4 ${product.thumbnail === url ? "bg-yellow-400 text-yellow-400" : "text-white"}`} />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6"
                    onClick={() => handleRemoveImage(url)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
