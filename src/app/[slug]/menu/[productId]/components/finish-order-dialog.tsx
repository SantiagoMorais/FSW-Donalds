import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { IFinishOrderDialogProps } from "@/core/interfaces/finish-order-dialog";

import { FinishOrderDialogForm } from "./finish-order-dialog-form";

export const FinishOrderDialog = ({
  open,
  onOpenChange,
}: IFinishOrderDialogProps) => (
  <Drawer open={open} onOpenChange={onOpenChange}>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Finalizar Pedido</DrawerTitle>
        <DrawerDescription>
          Insira suas informações abaixo para finalizar o seu pedido
        </DrawerDescription>
      </DrawerHeader>
      <section className="p-5">
        <FinishOrderDialogForm />
      </section>
    </DrawerContent>
  </Drawer>
);
