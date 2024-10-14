import type { ShopifyProduct } from '@/lib/shopify/types';

const ShopifyProductFragment = (overrides?: Partial<ShopifyProduct>): ShopifyProduct => {
  return {
    id: "gid://shopify/Product/1234567890",
    handle: "premium-leather-backpack",
    availableForSale: true,
    title: "Premium Leather Backpack",
    description: "A high-quality leather backpack perfect for daily use or travel.",
    descriptionHtml: "<p>A high-quality leather backpack perfect for daily use or travel.</p>",
    options: [
      {
        id: "gid://shopify/ProductOption/1",
        name: "Color",
        values: ["Black", "Brown", "Tan"]
      },
      {
        id: "gid://shopify/ProductOption/2",
        name: "Size",
        values: ["Small", "Medium", "Large"]
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: "299.99",
        currencyCode: "USD"
      },
      minVariantPrice: {
        amount: "249.99",
        currencyCode: "USD"
      }
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/1",
            title: "Black / Small",
            availableForSale: true,
            selectedOptions: [
              { name: "Color", value: "Black" },
              { name: "Size", value: "Small" }
            ],
            price: {
              amount: "249.99",
              currencyCode: "USD"
            }
          }
        },
        {
          node: {
            id: "gid://shopify/ProductVariant/2",
            title: "Brown / Medium",
            availableForSale: true,
            selectedOptions: [
              { name: "Color", value: "Brown" },
              { name: "Size", value: "Medium" }
            ],
            price: {
              amount: "279.99",
              currencyCode: "USD"
            }
          }
        }
      ]
    },
    featuredImage: {
      url: "https://example.com/images/premium-leather-backpack-black.jpg",
      altText: "Black Premium Leather Backpack",
      width: 1200,
      height: 1200
    },
    images: {
      edges: [
        {
          node: {
            url: "https://example.com/images/premium-leather-backpack-black.jpg",
            altText: "Black Premium Leather Backpack",
            width: 1200,
            height: 1200
          }
        },
        {
          node: {
            url: "https://example.com/images/premium-leather-backpack-brown.jpg",
            altText: "Brown Premium Leather Backpack",
            width: 1200,
            height: 1200
          }
        }
      ]
    },
    seo: {
      title: "Premium Leather Backpack | Our Store",
      description: "Discover our high-quality leather backpack, perfect for daily use or travel. Available in multiple colors and sizes."
    },
    tags: ["leather", "backpack", "premium", "travel"],
    updatedAt: "2024-03-15T10:00:00Z",
    ...overrides
  }
}

export const ShopifyProductFragments = (): ShopifyProduct[] => {
  return [
    ShopifyProductFragment(),
    ShopifyProductFragment({
      id: "gid://shopify/Product/9876543210",
      handle: "wireless-bluetooth-headphones",
      availableForSale: true,
      title: "Wireless Bluetooth Headphones",
      description: "High-quality wireless headphones with noise-cancelling technology.",
      descriptionHtml: "<p>High-quality wireless headphones with noise-cancelling technology.</p>",
      options: [
        {
          id: "gid://shopify/ProductOption/3",
          name: "Color",
          values: ["Black", "White", "Rose Gold"]
        }
      ],
      priceRange: {
        maxVariantPrice: {
          amount: "199.99",
          currencyCode: "USD"
        },
        minVariantPrice: {
          amount: "179.99",
          currencyCode: "USD"
        }
      },
      variants: {
        edges: [
          {
            node: {
              id: "gid://shopify/ProductVariant/3",
              title: "Black",
              availableForSale: true,
              selectedOptions: [
                { name: "Color", value: "Black" }
              ],
              price: {
                amount: "179.99",
                currencyCode: "USD"
              }
            }
          },
          {
            node: {
              id: "gid://shopify/ProductVariant/4",
              title: "White",
              availableForSale: true,
              selectedOptions: [
                { name: "Color", value: "White" }
              ],
              price: {
                amount: "189.99",
                currencyCode: "USD"
              }
            }
          }
        ]
      },
      featuredImage: {
        url: "https://example.com/images/wireless-bluetooth-headphones-black.jpg",
        altText: "Black Wireless Bluetooth Headphones",
        width: 1000,
        height: 1000
      },
      images: {
        edges: [
          {
            node: {
              url: "https://example.com/images/wireless-bluetooth-headphones-black.jpg",
              altText: "Black Wireless Bluetooth Headphones",
              width: 1000,
              height: 1000
            }
          },
          {
            node: {
              url: "https://example.com/images/wireless-bluetooth-headphones-white.jpg",
              altText: "White Wireless Bluetooth Headphones",
              width: 1000,
              height: 1000
            }
          }
        ]
      },
      seo: {
        title: "Wireless Bluetooth Headphones | Our Store",
        description: "Experience superior sound quality with our wireless Bluetooth headphones featuring noise-cancelling technology."
      },
      tags: ["electronics", "headphones", "wireless", "bluetooth"],
      updatedAt: "2024-03-20T14:30:00Z",
    }),
  ]
}
