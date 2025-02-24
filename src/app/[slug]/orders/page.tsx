import { IOrdersPageProps } from "@/core/interfaces/orders-page-props";
import { getOrdersByZipCode } from "@/data/get-orders-by-zip-code";
import { isValidZipCode } from "@/utils/verify-zip-code";

import { OrdersList } from "./components/orders-list";
import { ZipCodeDialog } from "./components/zip-code-dialog";

const OrdersPage = async ({ searchParams }: IOrdersPageProps) => {
  const { cpf } = await searchParams;

  if (!cpf || !isValidZipCode(cpf)) return <ZipCodeDialog />;

  const orders = await getOrdersByZipCode(cpf);

  return <OrdersList orders={orders} />;
};

export default OrdersPage;
