import { tv } from "tailwind-variants";

export const orderStatus = tv({
  base: "w-fit rounded-full px-2 py-1 text-xs font-semibold",
  variants: {
    status: {
      pending: "bg-gray-200 text-gray-500",
      finished: "bg-green-500 text-white",
    },
  },
});
