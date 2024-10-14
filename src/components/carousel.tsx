import Link from "next/link";
import { ShopifyProductFragments } from "../mocks";

export async function Carousel() {
  // TODO: getCollectionProductsから取得する
  const products = ShopifyProductFragments();

  if (!products?.length) return null;

  // カルーセルをループさせ、ワイドスクリーンで商品が不足しないように、意図的に商品を複製している
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
        <li
          key={`${product.handle}${i}`}
          className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
        >
          <Link href={`/product/${product.handle}`} className="relative h-full w-full">
            GridTileImage
          </Link>
        </li>
        ))}
      </ul>
    </div>
  );
}
