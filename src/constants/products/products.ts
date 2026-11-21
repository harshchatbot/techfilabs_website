import { Sparkles } from "lucide-react";
import type { Product } from "@/types/index";

import { sentinelSocietyManagementProduct } from "./sentinelSocietyManagement";
import { fieldlensForSalesforceProduct } from "./fieldlensForSalesforce";
import { opsflowControlCenterProduct } from "./opsflowControlCenter";
import { rangmanchAiProduct } from "./rangmanchAi";
import { salespilotAiProduct } from "./salespilotAi";
import { orgReadyProduct } from "./orgReady";
import { desiPosProduct } from "./desiPos";

export * from "./sentinelSocietyManagement";
export * from "./fieldlensForSalesforce";
export * from "./opsflowControlCenter";
export * from "./rangmanchAi";
export * from "./salespilotAi";
export * from "./orgReady";
export * from "./desiPos";

export const PRODUCT_PAGE_FALLBACK = {
  title: "Product not found",
  description: "We could not find this product. Please check the URL.",
  cta: { label: "Back to Home", href: "/" },
  icon: Sparkles,
};

export const PRODUCTS_DATA: Product[] = [
  rangmanchAiProduct,
  orgReadyProduct,
  desiPosProduct,
  fieldlensForSalesforceProduct,
  sentinelSocietyManagementProduct,
  opsflowControlCenterProduct,
  salespilotAiProduct,
];
