import { IOrdersPageProps } from "@/core/interfaces/orders-page-props";
import { isValidZipCode } from "@/utils/verify-zip-code";

import { ZipCodeDialog } from "./components/zip-code-dialog";

const OrdersPage = async ({ searchParams }: IOrdersPageProps) => {
  const { cpf } = await searchParams;

  if (!cpf || !isValidZipCode(cpf)) return <ZipCodeDialog />;

  return <h1>Orders Page</h1>;
};

export default OrdersPage;
