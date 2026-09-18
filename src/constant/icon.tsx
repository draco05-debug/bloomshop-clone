import { cartStore } from "../store/cart";

export type ProductForCart = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const AddToCartButton = ({
  product,
  onClick,
}: {
  product: ProductForCart;
  onClick?: () => void;
}) => (
  <button
    type="button"
    onClick={() => {
      cartStore.addItem(product);
      onClick?.();
    }}
    className="h-11 w-full rounded-full bg-[#F5C518] text-[15px] font-medium text-[#1a1a1a] transition hover:bg-[#E6B800]"
  >
    Add to Cart
  </button>
);

export default AddToCartButton;
