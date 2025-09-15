import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

function ProductForm() {
  const navigation = useNavigation();
  const actionData = useActionData();
  const navigate = useNavigate();
  const { isEditing, product } = useSelector((state) => state.product);
  const isSubmitting = navigation.state === "submitting";
  const [imageUrl, setImageUrl] = useState(product?.image || "");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (actionData?.success) {
      const t = setTimeout(() => {
        navigate("/dashboard/products");
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [actionData, navigate]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ecomerce");
    data.append("folder", "ecomerce/products");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dnkfjovcd/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const uploaded = await res.json();
      setImageUrl(uploaded.secure_url);
    } catch (err) {
      throw new Error(`upload image faild ${err}`);
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="w-full bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        {isEditing ? "Edit Product" : "Add Product"}
      </h2>
      <Form method="POST" className="space-y-3 felx flex-col">
        <input
          name="name"
          defaultValue={isEditing ? product?.name : ""}
          placeholder="Product Name"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          name="description"
          defaultValue={isEditing ? product?.description : ""}
          placeholder="Description"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <div className="flex gap-2">
          <input
            name="price"
            type="number"
            defaultValue={isEditing ? product?.price : ""}
            placeholder="Price"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            name="stock"
            type="number"
            defaultValue={isEditing ? product?.stock : ""}
            placeholder="Stock"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        {!isEditing && (
          <div className="flex flex-col  gap-2">
            <input
              type="file"
              onChange={handleImageChange}
              className="border-2 border-dashed w-50 border-gray-300 rounded-lg p-2 cursor-pointer hover:border-gray-500 transition"
            />
            {uploading && <p className="text-blue-500">Uploading...</p>}
            <div className="">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="h-20 w-20 object-cover rounded shadow"
                />
              )}
              <input type="hidden" name="image" value={imageUrl} />
            </div>
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting || uploading}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
        >
          {isEditing
            ? isSubmitting
              ? "Updating..."
              : "Update Product"
            : isSubmitting
            ? "Adding..."
            : "Add Product"}
        </button>
      </Form>
      {actionData?.success && (
        <div className="text-green-400 text-xl">Successful!</div>
      )}
    </div>
  );
}

export default ProductForm;
