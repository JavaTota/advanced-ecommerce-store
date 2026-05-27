import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { addToCart } from "../redux/cartSlice";
import { getCategories, getProducts, getProductsByCategory } from "../services/api";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: () =>
      selectedCategory
        ? getProductsByCategory(selectedCategory)
        : getProducts(),
  });

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Products</h1>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All categories</option>

        {categories?.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <section
        style={{
          marginTop: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {products?.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
              }}
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/200";
              }}
            />

            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Rating: {product.rating.rate}</p>

            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;