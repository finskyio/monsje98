"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { db } from "../lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Product from "../components/Shop/Product";
import BigProduct from "../components/Shop/BigProduct";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface ProductType {
  id: string;
  name: string;
  price: number;
  image: {
    src: string;
    hover: string;
  };
  short: string;
  description: string;
  ingredients: string;
  type: string; 
  order: number;
  
}

export default function Shop() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { dispatch } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const q = query(collection(db, "products"), orderBy("order"));
        const snapshot = await getDocs(q);
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ProductType[];
        setProducts(productsList);
      } catch (err) {
        console.error("Błąd podczas pobierania produktów:", err);
      }
    }
    fetchProducts();
  }, []);

  const addToCart = (product: ProductType) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        short: product.short, 
      },
    });
  };
  

  return (
    <div className="max-w-screen-lg mx-auto py-8">
      <div className="flex flex-col items-center mb-12 py-8">
        <h4 className="text-5xl  md:text-6xl text-center tracking-tighter mb-1">
          Elegance Defined.
        </h4>
        <h4 className="lg:text-7xl md:text-8xl text-6xl text-center tracking-tighter ">
          Beauty Refined.
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4">
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className="relative group">
            <Link href={`/shop/${slugify(product.name)}`}>
              <div className="cursor-pointer">
                <Product
                  image={product.image}
                  name={product.name.toUpperCase()}
                  price={`${product.price} €`}
                  onAddToCart={() => addToCart(product)}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] md:grid-cols-1 gap-2 py-3">
        {products[3]?.type === "bigproduct" && (
          <div className="relative group">
            <Link href={`/shop/${slugify(products[3].name)}`}>
              <div className="cursor-pointer">
                <BigProduct
                  image={products[3].image}
                  name={products[3].name.toUpperCase()}
                  price={`${products[3].price} €`}
                  onAddToCart={() => addToCart(products[3])}
                />
              </div>
            </Link>
          </div>
        )}
        {products[4]?.type === "product" && (
          <div className="relative group">
            <Link href={`/shop/${slugify(products[4].name)}`}>
              <div className="cursor-pointer">
                <Product
                  image={products[4].image}
                  name={products[4].name.toUpperCase()}
                  price={`${products[4].price} €`}
                  onAddToCart={() => addToCart(products[4])}
                />
              </div>
            </Link>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4">
        {products.slice(5, 8).map((product) => (
          <div key={product.id} className="relative group">
            <Link href={`/shop/${slugify(product.name)}`}>
              <div className="cursor-pointer">
                <Product
                  image={product.image}
                  name={product.name.toUpperCase()}
                  price={`${product.price} €`}
                  onAddToCart={() => addToCart(product)}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4 py-3">
        {products.slice(8, 11).map((product) => (
          <div key={product.id} className="relative group">
            <Link href={`/shop/${slugify(product.name)}`}>
              <div className="cursor-pointer">
                <Product
                  image={product.image}
                  name={product.name.toUpperCase()}
                  price={`${product.price} €`}
                  onAddToCart={() => addToCart(product)}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] md:grid-cols-1 gap-2 py-3">
        {products[11]?.type === "product" && (
          <div className="relative group">
            <Link href={`/shop/${slugify(products[11].name)}`}>
              <div className="cursor-pointer">
                <Product
                  image={products[11].image}
                  name={products[11].name.toUpperCase()}
                  price={`${products[11].price} €`}
                  onAddToCart={() => addToCart(products[11])}
                />
              </div>
            </Link>
          </div>
        )}
        {products[12]?.type === "bigproduct" && (
          <div className="relative group">
            <Link href={`/shop/${slugify(products[12].name)}`}>
              <div className="cursor-pointer">
                <BigProduct
                  image={products[12].image}
                  name={products[12].name.toUpperCase()}
                  price={`${products[12].price} €`}
                  onAddToCart={() => addToCart(products[12])}
                />
              </div>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
