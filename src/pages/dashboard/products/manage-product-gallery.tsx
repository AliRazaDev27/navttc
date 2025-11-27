import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Image } from "lucide-react"
export default function ManageProductGallery({id}:{id:string}) {
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
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Product Gallery</DialogTitle>
          <DialogDescription>
            Manage gallery for <strong>{id}</strong>.
          </DialogDescription>
        </DialogHeader>
        <div>
          {/*  Gallery management content goes here */}
        </div>
        
      </DialogContent>
    </Dialog>
  )
}