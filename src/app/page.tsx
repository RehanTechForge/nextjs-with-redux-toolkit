import { Product } from "@/lib/types";
import DataSetter from "./data-setter";
import ProductsComponent from "@/components/Products/Products";
export default async function Home() {
  const response = await fetch("http://localhost:3000/api/products");
  const data: Product[] = await response.json();

  return (
    <>
      <DataSetter data={data} />
      <ProductsComponent />
    </>
  );
}
