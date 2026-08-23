import { Sparkles } from "lucide-react";
import type { Product } from "@/types/index";

import { sentinelSocietyManagementProduct } from "./sentinelSocietyManagement";
import { fieldlensForSalesforceProduct } from "./fieldlensForSalesforce";
import { opsflowControlCenterProduct } from "./opsflowControlCenter";
import { rangmanchAiProduct } from "./rangmanchAi";
import { salespilotAiProduct } from "./salespilotAi";

export * from "./sentinelSocietyManagement";
export * from "./fieldlensForSalesforce";
export * from "./opsflowControlCenter";
export * from "./rangmanchAi";
export * from "./salespilotAi";

export const PRODUCT_PAGE_FALLBACK = {
  title: "Product not found",
  description: "We could not find this product. Please check the URL.",
  cta: { label: "Back to Home", href: "/" },
  icon: Sparkles,
};

export const PRODUCTS_DATA: Product[] = [
  sentinelSocietyManagementProduct,
  fieldlensForSalesforceProduct,
  opsflowControlCenterProduct,
  rangmanchAiProduct,
  salespilotAiProduct,
];
