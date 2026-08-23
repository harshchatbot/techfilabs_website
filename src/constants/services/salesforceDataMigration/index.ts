import { Database } from "lucide-react";
import type { Service, ServiceLandingItem } from "@/types/index";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export const salesforceDataMigrationService: Service = {
  slug: "salesforce-data-migration",
  icon: Database,
  title: "Salesforce Data Migration & ETL",
  description:
    "Migrate data with lower risk and higher reliability using validated ETL, reconciliation checks, and cutover controls.",
  features: [
    "Data discovery and mapping plans",
    "Cleansing and deduplication",
    "Transformation and bulk migration",
    "Post-migration quality checks",
  ],
};

export const salesforceDataMigrationLandingData: ServiceLandingItem = {
  slug: "salesforce-data-migration",
  title: "Salesforce Data Migration & ETL Services",
  heroTitle: "Secure Salesforce Data Migration & ETL Services",
  heroSubtitle:
    "Migrate to Salesforce with confidence using validated mapping, transformation logic, and quality controls built for production reliability.",
  seoTitle:
    `Salesforce Data Migration Services in Ajmer, Jaipur & Global | ${ORGANIZATION_CONFIG.name}`,
  seoDescription:
    `${ORGANIZATION_CONFIG.name} delivers Salesforce data migration and ETL services including mapping, cleansing, transformation, deduplication, and validation for businesses in India and global markets.`,
  canonical: `${ORGANIZATION_CONFIG.url}/services/salesforce-data-migration`,
  intro:
    "We reduce migration risk by combining technical ETL execution with governance and QA checkpoints that protect data integrity.",
  outcomes: [
    "Reduced data loss and mapping errors during migration",
    "Higher CRM trust through deduplication and validation",
    "Smooth cutover planning with rollback-ready execution",
  ],
  capabilities: [
    "Source system discovery and data classification",
    "Field mapping and transformation strategy",
    "Data cleansing and deduplication workflows",
    "Bulk migration execution with QA logs",
    "Post-migration validation and reporting",
  ],
  process: ["Source audit & mapping", "ETL execution & QA", "Cutover, validation, and stabilization"],
  faq: [
    {
      q: "Can you migrate from Excel, legacy CRM, or custom systems?",
      a: "Yes. We support structured and semi-structured sources with custom mapping and transformation layers.",
    },
    {
      q: "How do you ensure data quality after migration?",
      a: "We run reconciliation checks, duplicate scans, and validation reports before and after cutover.",
    },
  ],
};
