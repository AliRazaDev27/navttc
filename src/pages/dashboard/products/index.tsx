import { useState, useMemo, useEffect } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Edit, Trash2, Plus, ChevronLeft, ChevronRight } from "lucide-react"

interface Product {
  id: string
  title: string
  price: number
  discount: number
  description: string
  category: string
  collection: string[]
  rating: number
  size: string[]
  color: string[]
  brand: string
  images: string[]
}

export default function DashboardProducts() {
  const [products, setProducts] = useState<Product[]>([])
  // console.log("products",products)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null)

  const itemsPerPage = 10

  // Form state
  const emptyForm: Product = {
    id: "",
    title: "",
    price: 0,
    discount: 0,
    description: "",
    category: "",
    collection: [],
    rating: 0,
    size: [],
    color: [],
    brand: "",
    images: [],
  }

  const [formData, setFormData] = useState<Product>(emptyForm)

  // Filter and paginate products
  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase()
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    )
  }, [products, searchTerm])

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1
  const startIdx = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIdx, startIdx + itemsPerPage)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("http://localhost:3000/products")
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`)
        const data = await res.json()
        if (data?.data.length) {
           setProducts(data?.data)
        } else {
          setProducts([])
        }
      } catch (err) {
        setError((err as Error).message || "Failed to load products")
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    void fetchProducts()
  }, [])

  // Handlers
  const handleAddClick = () => {
    setEditingProduct(null)
    setFormData(emptyForm)
    setIsDialogOpen(true)
  }

  const handleEditClick = (product: Product) => {
    setEditingProduct(product)
    setFormData(product)
    setIsDialogOpen(true)
  }

  const handleDeleteClick = (product: Product) => {
    setDeleteTarget(product)
    setIsDeleteDialogOpen(true)
  }

  const handleSaveProduct = () => {
    if (!formData.title.trim() || formData.price < 0) {
      alert("Please fill in title and valid price")
      return
    }

    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct.id ? { ...formData } : p))
      )
    } else {
      const newProduct: Product = {
        ...formData,
        id: String(Date.now()),
      }
      setProducts((prev) => [newProduct, ...prev])
      setCurrentPage(1)
    }

    setIsDialogOpen(false)
  }

  const confirmDelete = () => {
    if (deleteTarget) {
      setProducts((prev) => prev.filter((p) => p.id !== deleteTarget.id))
      setIsDeleteDialogOpen(false)
      setDeleteTarget(null)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    if (name === "collection" || name === "size" || name === "color") {
      const arr = value.split(",").map((s) => s.trim()).filter(Boolean)
      setFormData((prev) => ({ ...prev, [name]: arr }))
    } else if (name === "price" || name === "discount" || name === "rating") {
      setFormData((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
        <p className="text-sm text-muted-foreground">
          Manage your product catalog with add, edit, and delete functionality
        </p>
      </div>

      <Separator />

      {/* Search and Add Button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Input
          placeholder="Search by title, brand, or category..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1)
          }}
          className="w-full sm:max-w-sm"
        />

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddClick} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>

          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>
                {editingProduct ? "Edit Product" : "Add New Product"}
              </DialogTitle>
              <DialogDescription>
                {editingProduct
                  ? "Update the product details"
                  : "Fill in the details to create a new product"}
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              {/* Title */}
              <div className="grid gap-2">
                <label className="text-sm font-medium">Title *</label>
                <Input
                  name="title"
                  placeholder="Product title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>

              {/* Brand and Category */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Brand *</label>
                  <Input
                    name="brand"
                    placeholder="Brand name"
                    value={formData.brand}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Category *</label>
                  <Input
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Price, Discount, Rating */}
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Price ($) *</label>
                  <Input
                    name="price"
                    type="number"
                    placeholder="0.00"
                    value={formData.price || ""}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Discount (%)</label>
                  <Input
                    name="discount"
                    type="number"
                    placeholder="0"
                    value={formData.discount || ""}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Rating</label>
                  <Input
                    name="rating"
                    type="number"
                    placeholder="0-5"
                    value={formData.rating || ""}
                    onChange={handleInputChange}
                    min="0"
                    max="5"
                    step="0.1"
                  />
                </div>
              </div>

              {/* Collection */}
              <div className="grid gap-2">
                <label className="text-sm font-medium">
                  Collection (comma separated)
                </label>
                <Input
                  name="collection"
                  placeholder="casual, formal, gym, summer, winter"
                  value={formData.collection.join(", ")}
                  onChange={handleInputChange}
                />
              </div>

              {/* Size and Color */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">
                    Size (comma separated)
                  </label>
                  <Input
                    name="size"
                    placeholder="S, M, L, XL"
                    value={formData.size.join(", ")}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">
                    Color (comma separated)
                  </label>
                  <Input
                    name="color"
                    placeholder="Red, Blue, Black"
                    value={formData.color.join(", ")}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="grid gap-2">
                <label className="text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  placeholder="Product description..."
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleSaveProduct}>
                {editingProduct ? "Update Product" : "Add Product"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Products Table */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Discount</TableHead>
              <TableHead className="text-right">Rating</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{product.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {(product.collection || []).join(", ")}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="text-right">
                    ${product.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">{product.discount}%</TableCell>
                  <TableCell className="text-right">{product.rating}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditClick(product)}
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteClick(product)}
                        title="Delete"
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  <p className="text-muted-foreground">No products found</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {startIdx + 1} to{" "}
            {Math.min(startIdx + itemsPerPage, filteredProducts.length)} of{" "}
            {filteredProducts.length} products
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="h-8 w-8 p-0"
                  >
                    {page}
                  </Button>
                )
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="gap-1"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{" "}
              <strong>{deleteTarget?.title}</strong>? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
