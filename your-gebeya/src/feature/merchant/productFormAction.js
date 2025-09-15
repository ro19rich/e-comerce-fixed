import { store } from "../../app/store";
import { addProductApi, updateProductApi } from "../../services/Api";

async function productFormAction({ request }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const merchantId = user?.merchantProfile.ID;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const state = store.getState();
  const { isEditing, product } = state.product;

  const productId = product.ID;
  if (isEditing) {
    const newProduct = {
      name: data.name,
      description: data.description,
      price: Number(data.price),
      stock: Number(data.stock),
      category: "beauty",
    };
    await updateProductApi(newProduct, productId);
    return { success: true };
  } else {
    const newProduct = {
      name: data.name,
      description: data.description,
      price: Number(data.price),
      stock: Number(data.stock),
      category: "beauty",
      merchant_profile_id: merchantId,
      images: [
        {
          url: data.image,
        },
        {
          url: data.image,
        },
        {
          url: data.image,
        },
      ],
    };
    const product = await addProductApi(newProduct);
    console.log(product);

    return { success: true };
  }
}
export default productFormAction;
