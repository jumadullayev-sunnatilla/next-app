"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
const ResubelProduct = ({ data }) => {
  const router = useRouter();
  console.log(data);

  if (!data) {
    console.error("Data is undefined or null.");
    return <div>No products available.</div>;
  }

  return (
    <div className="containerM flex flex-wrap gap-2 justify-between gap-y-3">
      {data?.map((pro) => (
        <div
          key={pro.id}
          className="w-[200px] h  bg-slate-300 rounded-xl px-1 py-2"
        >
          <Image
            onClick={() => router.push(`/products/${pro?.id}`)}
            src={pro.image}
            width={200}
            height={200}
            alt={pro.description}
            className=""
          />
          <h2>{pro.title}</h2>
          <div className="flex justify-between items-center ">
            <div>
              <p className="line-through font-semibold text-slate-500 text-xs">
                {pro.oldPrice} $$$
              </p>
              <p className="text-red-900 font-extrabold text-xl">
                {pro.price} $$$
              </p>
            </div>
            <Link href={"/shop"}>
              <button type="button" className="text-[40px]">
                <MdAddShoppingCart />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResubelProduct;
