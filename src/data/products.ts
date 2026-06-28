export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  featured?: boolean;
  bestSeller?: boolean;
  isNew?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "هاتف ذكي",
    price: 50000,
    image: "/phone.png",
    images: ["/phone.png"],
    category: "هواتف",
    rating: 4.8,
    reviews: 1250,
    featured: true,
    bestSeller: true,
    isNew: true,
  },
  {
    id: "2",
    name: "حاسوب محمول",
    price: 90000,
    image: "/laptop.png",
    images: ["/laptop.png"],
    category: "حاسوب",
    rating: 4.5,
    reviews: 860,
    featured: true,
    bestSeller: true,
  },
];

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getBestSellers() {
  return products.filter((p) => p.bestSeller);
}

export function getNewArrivals() {
  return products.filter((p) => p.isNew);
}

export const categories = [
  {
    id: "1",
    slug: "phones",
    name: "هواتف",
  },
  {
    id: "2",
    slug: "computers",
    name: "حاسوب",
  },
];
export function getProductsByCategory(category: string) {
  return products.filter(
    (product) => product.category === category
  );
}
