
import  { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
  Chip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import { initialProductsData } from "../data/initialProductsData";

const emptyProduct = {
  name: "",
  category: "Electronics",
  price: "",
  stock: "",
};

export default function Products() {
  const [products, setProducts] = useState(initialProductsData);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyProduct);
  const [deleteId, setDeleteId] = useState(null);

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category} ${product.id}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const availableCount = products.filter(
    (product) => product.stock > 0
  ).length;

  const openAddDialog = () => {
    setEditingId(null);
    setForm(emptyProduct);
    setOpen(true);
  };

  const openEditDialog = (product) => {
    setEditingId(product.id);
    setForm({
      name: product.name,
      category: product.category,
      price: String(product.price),
      stock: String(product.stock),
    });
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const price = Number(form.price);
    const stock = Number(form.stock);

    if (
      !name ||
      !form.category ||
      form.price === "" ||
      form.stock === "" ||
      !Number.isFinite(price) ||
      price < 0 ||
      !Number.isInteger(stock) ||
      stock < 0
    ) {
      return;
    }

    const productData = {
      name,
      category: form.category,
      price,
      stock,
      status: stock > 0 ? "Available" : "Out of Stock",
    };

    if (editingId !== null) {
      setProducts((previous) =>
        previous.map((product) =>
          product.id === editingId
            ? { ...product, ...productData }
            : product
        )
      );
    } else {
      setProducts((previous) => [
        ...previous,
        {
          id: Math.max(0, ...previous.map((p) => p.id)) + 1,
          ...productData,
        },
      ]);
    }

    setOpen(false);
    setForm(emptyProduct);
    setEditingId(null);
  };

  const handleDelete = () => {
    setProducts((previous) =>
      previous.filter((product) => product.id !== deleteId)
    );
    setDeleteId(null);
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-8">
      {/* Page heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <Typography variant="h4" color="blue-gray">
            Products
          </Typography>
          <Typography className="mt-1 font-normal text-blue-gray-600">
            Manage your products, prices, and inventory.
          </Typography>
        </div>

        <Button
          onClick={openAddDialog}
          className="flex items-center justify-center gap-2"
          color="blue"
        >
          <PlusIcon className="h-5 w-5" />
          Add Product
        </Button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="border border-blue-gray-100 shadow-sm">
          <CardBody>
            <Typography className="text-sm font-medium text-blue-gray-600">
              Total Products
            </Typography>
            <Typography variant="h3" color="blue-gray" className="mt-2">
              {products.length}
            </Typography>
          </CardBody>
        </Card>

        <Card className="border border-blue-gray-100 shadow-sm">
          <CardBody>
            <Typography className="text-sm font-medium text-blue-gray-600">
              In Stock
            </Typography>
            <Typography variant="h3" color="green" className="mt-2">
              {availableCount}
            </Typography>
          </CardBody>
        </Card>

        <Card className="border border-blue-gray-100 shadow-sm">
          <CardBody>
            <Typography className="text-sm font-medium text-blue-gray-600">
              Out of Stock
            </Typography>
            <Typography variant="h3" color="red" className="mt-2">
              {products.length - availableCount}
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* Products table */}
      <Card className="overflow-hidden border border-blue-gray-100 shadow-sm">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <Typography variant="h6" color="blue-gray">
              All Products
            </Typography>
            <Typography className="mt-1 text-sm font-normal text-blue-gray-600">
              A list of products in your store.
            </Typography>
          </div>

          <div className="w-full sm:w-72">
            <Input
              label="Search products"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </CardHeader>

        <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {[
                  "Product",
                  "Category",
                  "Price",
                  "Stock",
                  "Status",
                  "Actions",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      className="font-semibold text-blue-gray-600"
                    >
                      {heading}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product, index) => {
                const isLast = index === filteredProducts.length - 1;
                const rowClass = isLast
                  ? "p-4"
                  : "border-b border-blue-gray-50 p-4";

                return (
                  <tr key={product.id}>
                    <td className={rowClass}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {product.name}
                      </Typography>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        PRD-{String(product.id).padStart(4, "0")}
                      </Typography>
                    </td>

                    <td className={rowClass}>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-600"
                      >
                        {product.category}
                      </Typography>
                    </td>

                    <td className={rowClass}>
                      <Typography
                        variant="small"
                        className="font-semibold text-blue-gray-700"
                      >
                        KWD {product.price.toFixed(2)}
                      </Typography>
                    </td>

                    <td className={rowClass}>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-600"
                      >
                        {product.stock}
                      </Typography>
                    </td>

                    <td className={rowClass}>
                      <Chip
                        size="sm"
                        variant="ghost"
                        value={product.status}
                        color={product.stock > 0 ? "green" : "red"}
                        className="w-fit"
                      />
                    </td>

                    <td className={rowClass}>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="text"
                          color="blue"
                          size="sm"
                          onClick={() => openEditDialog(product)}
                          className="flex items-center gap-1 px-2"
                        >
                          <PencilSquareIcon className="h-4 w-4" />
                          Edit
                        </Button>

                        <Button
                          variant="text"
                          color="red"
                          size="sm"
                          onClick={() => setDeleteId(product.id)}
                          className="flex items-center gap-1 px-2"
                        >
                          <TrashIcon className="h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center">
                    <Typography color="blue-gray">
                      No products found.
                    </Typography>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {/* Add/Edit product dialog */}
      <Dialog open={open} handler={() => setOpen(false)} size="sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            {editingId !== null ? "Edit Product" : "Add New Product"}
          </DialogHeader>

          <DialogBody className="flex flex-col gap-5">
            <Input
              label="Product Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <div>
              <Typography
                variant="small"
                className="mb-2 font-medium text-blue-gray-600"
              >
                Category
              </Typography>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-blue-gray-200 bg-white px-3 py-3 text-sm text-blue-gray-700 outline-none focus:border-blue-500"
              >
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Accessories">Accessories</option>
                <option value="Home & Living">Home & Living</option>
                <option value="Sports">Sports</option>
              </select>
            </div>

            <Input
              label="Price (KWD)"
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={form.price}
              onChange={handleChange}
              required
            />

            <Input
              label="Stock Quantity"
              name="stock"
              type="number"
              min="0"
              step="1"
              value={form.stock}
              onChange={handleChange}
              required
            />
          </DialogBody>

          <DialogFooter className="gap-2">
            <Button
              variant="text"
              color="blue-gray"
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button color="blue" type="submit">
              {editingId !== null ? "Save Changes" : "Add Product"}
            </Button>
          </DialogFooter>
        </form>
      </Dialog>

      {/* Delete confirmation dialog */}
      <Dialog
        open={deleteId !== null}
        handler={() => setDeleteId(null)}
        size="xs"
      >
        <DialogHeader>Delete Product?</DialogHeader>
        <DialogBody>
          Are you sure you want to delete this product? This action will remove
          it from the current product list.
        </DialogBody>
        <DialogFooter className="gap-2">
          <Button
            variant="text"
            color="blue-gray"
            onClick={() => setDeleteId(null)}
          >
            Cancel
          </Button>
          <Button color="red" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
