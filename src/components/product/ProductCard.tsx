import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition">
      
      <a
        href={`/product/${product.id}`}
        className="block relative aspect-[4/3] bg-gray-100 overflow-hidden"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </a>

      <div className="p-2">
        <p className="text-xs text-blue-600 mb-1">
          {product.category}
        </p>

        <h3 className="text-sm font-semibold line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 text-xs mt-2">
          ⭐ {product.rating}
          <span className="text-gray-400">
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-sm font-bold">
            {product.price.toLocaleString()} DA
          </span>

          <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs">
            +
          </button>
        </div>

      </div>

    </article>
  );
}
