import React from "react";
import { useECommerceContext } from "../../../Store/contextStore/ECommerceContext";
import StoreContainer from "../Presentation/Store";
import useGetData from "../../../Hooks/useGetData";

export default function Store() {

  const { category   } = useECommerceContext()

  const url = `products/${category}`

  const { data } = useGetData(`api/${url}`, 'products')

  return <StoreContainer
    products={data}
    category={category}
  />

}
