export async function getAllproduct() {
  const token = localStorage.getItem("token");
  const response = await fetch("https://your-gebeta.onrender.com/api/product", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "unexpect error occure");
  }
  if (data.status === "fail") throw new Error(data.error);
  return data.data;
}
export async function getProduct(id) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `https://your-gebeta.onrender.com/api/product/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "unexpect error occure");
  if (data.status === "fail") throw new Error(data.error);
  return data.data;
}
export async function createOrder(order) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(
    `https://your-gebeta.onrender.com/api/payment/${user.ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    }
  );

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "unexpect error occure");
  if (data.status === "fail") throw new Error(data.error);
  return data.paymenturl;
}
export async function getMerchantProduct() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const mercantId = user?.merchantProfile.ID;
  const response = await fetch(
    `https://your-gebeta.onrender.com/api/merchant/product/${mercantId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "unexpect error occure");
  return data.data;
}
export async function getMerchantOrder() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const mercantId = user?.merchantProfile.ID;
  const response = await fetch(
    `https://your-gebeta.onrender.com/api/merchant/order/${mercantId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "unexpect error occure");
  if (data == null) {
    return [];
  }
  return data.data;
}
export async function getUserOrder() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const response = await fetch(
    `https://your-gebeta.onrender.com/api/user/order/${user.ID}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "unexpect error occure");
  if (data.data == null) {
    return [];
  }
  return data.data;
}

export async function addProductApi(product) {
  const token = localStorage.getItem("token");
  const response = await fetch(`https://your-gebeta.onrender.com/api/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "unexpect error occure");
  return data.data;
}
export async function updateProductApi(product, id) {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `https://your-gebeta.onrender.com/api/product/update/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(product),
    }
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "unexpect error occure");
  return data.data;
}
export async function deleteProductApi(id) {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `https://your-gebeta.onrender.com/api/product/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "unexpect error occure");
  return data.data;
}
export async function provideDeliveryCode(deliveryData) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const mercantId = user?.merchantProfile.ID;
  const response = await fetch(
    `https://your-gebeta.onrender.com/api/merchant/delivery/${mercantId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deliveryData),
    }
  );
  if (!response.ok) throw new Error(response.Error);
  const data = await response.json();
  if (data.status === "fail") throw new Error("server error");
  return data.data;
}

export async function signup(user) {
  const response = await fetch("https://your-gebeta.onrender.com/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "unexpected error occure");
  return data;
}

export async function login(credential) {
  const response = await fetch("https://your-gebeta.onrender.com/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credential),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "unexpected error occure");
  return data;
}
