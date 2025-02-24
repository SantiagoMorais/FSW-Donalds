"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { ZipCodeDialogForm } from "./zip-code-dialog-form";

export const ZipCodeDialog = () => (
  <Drawer open>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Visualizar Pedidos</DrawerTitle>
        <DrawerDescription>
          Insira o seu CPF abaixo para visualizar seus pedidos
        </DrawerDescription>
      </DrawerHeader>
      <ZipCodeDialogForm />
    </DrawerContent>
  </Drawer>
);
