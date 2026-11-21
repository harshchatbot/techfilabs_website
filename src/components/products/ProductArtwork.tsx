import Image from "next/image";
import type { Product } from "@/types/index";

interface ProductArtworkProps {
  product: Product;
  priority?: boolean;
  className?: string;
}

export default function ProductArtwork({ product, priority = false, className = "" }: ProductArtworkProps) {
  const image = product.coverImage || product.screenshots[0];
  const isRemote = Boolean(image && /^https?:\/\//.test(image));
  const isDesi = product.slug === "desi-pos";
  const isOrgReady = product.slug === "orgready";
  const isRangManch = product.slug === "rangmanch-ai";

  return (
    <div className={`relative isolate min-h-[220px] overflow-hidden rounded-2xl bg-[#0b3029] ${className}`}>
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(190,242,100,0.24),transparent_42%),radial-gradient(circle_at_85%_80%,rgba(16,185,129,0.18),transparent_48%)]" />
      {image && !isDesi && (
        <div className={`absolute inset-0 ${isOrgReady ? "p-7 sm:p-10" : isRangManch ? "p-3 sm:p-5" : "p-4 sm:p-7"}`}>
          <div className={`relative h-full w-full overflow-hidden ${isOrgReady ? "rounded-xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)]" : "rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.22)]"}`}>
            <Image
              src={image}
              alt={product.coverAlt || `Actual ${product.name} product preview`}
              fill
              priority={priority}
              unoptimized={isRemote}
              sizes="(max-width: 768px) 100vw, 55vw"
              className={isOrgReady ? "object-contain" : "object-cover object-top"}
            />
          </div>
        </div>
      )}
      {isDesi && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_center,rgba(255,222,164,0.18),transparent_65%)] p-6 text-center">
          <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-[1.6rem] border border-amber-100/30 bg-[#f7e9ce] shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:h-28 sm:w-28">
            {image ? (
              <Image src={image} alt={product.coverAlt || "Desi POS brand icon"} fill sizes="112px" unoptimized className="object-contain" />
            ) : <span className="text-5xl" aria-hidden="true">☕</span>}
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-100/85">Desi by heart · Smart by design</p>
          <p className="max-w-[18ch] text-2xl font-bold tracking-tight text-white sm:text-3xl">Your counter. Your rhythm.</p>
          <div className="flex flex-wrap justify-center gap-2 text-[11px] font-medium text-amber-100/85">
            {["Fast billing", "Daily hisaab", "Cash clarity"].map((item) => <span key={item} className="rounded-full border border-amber-100/25 bg-white/10 px-3 py-1.5">{item}</span>)}
          </div>
        </div>
      )}
      {!image && !isDesi && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
          <product.icon aria-hidden="true" className="h-14 w-14 text-emerald-200" />
          <p className="text-2xl font-bold text-white">{product.name}</p>
          <p className="max-w-xs text-sm text-emerald-100/75">{product.tagline}</p>
        </div>
      )}
      <span className="absolute bottom-3 left-3 z-10 rounded-full border border-white/15 bg-[#071e19]/80 px-3 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur-sm">
        {isDesi ? "Official brand artwork · not an app screenshot" : product.coverImage ? "Official product artwork" : image ? "Product screenshot" : "Product overview"}
      </span>
    </div>
  );
}
