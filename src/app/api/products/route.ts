// app/api/products/route.js

export async function GET() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a great product.",
      price: 29.99,
      image: "https://via.placeholder.com/300",
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This product is even better!",
      price: 39.99,
      image: "https://via.placeholder.com/300",
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      description: "An amazing product to have.",
      price: 49.99,
      image: "https://via.placeholder.com/300",
      quantity: 1,
    },
    // Add more products as needed
  ];

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
