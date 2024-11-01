import { Product } from "@/lib/types";
import DataSetter from "./data-setter";
import ProductsComponent from "@/components/Products/Products";

export default async function Home() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || `https://${process.env.VERCEL_URL}/api`;

  const response = await fetch(`${baseUrl}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Product[] = await response.json();

  return (
    <>
      <DataSetter data={data} />
      <ProductsComponent />
      {/* Pass data to ProductsComponent */}
    </>
  );
}
