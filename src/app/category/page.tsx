import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4">

      <h1 className="text-2xl font-bold mb-6">
        الفئات
      </h1>

      <div className="flex gap-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white px-4 py-2 rounded-lg shadow"
          >
            {cat.name}
          </div>
        ))}
      </div>


      <h2 className="text-xl font-bold mb-4">
        جميع المنتجات
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </main>
  );
}
