import { Product } from "@/lib/types";
import DataSetter from "./data-setter";
import ProductsComponent from "@/components/Products/Products";
export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
  );

  const data: Product[] = await response.json();

  return (
    <>
      <DataSetter data={data} />
      <ProductsComponent />
    </>
  );
}
