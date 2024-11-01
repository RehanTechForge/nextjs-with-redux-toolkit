"use client";
import { setProducts } from "@/lib/features/products/productSlice";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { Product } from "@/lib/types";
import React, { useEffect } from "react";

const DataSetter = ({ data }: { data: Product[] }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data.length > 0) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);
  return null;
  return <></>;
};

export default DataSetter;
