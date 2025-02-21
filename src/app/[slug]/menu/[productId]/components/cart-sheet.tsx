import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ICartSheetProps } from "@/core/interfaces/cart-sheet-props";

export const CartSheet = ({ isOpen, toggleCart }: ICartSheetProps) => (
  <Sheet open={isOpen} onOpenChange={toggleCart}>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);
