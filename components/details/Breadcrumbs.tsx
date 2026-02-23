import Link from "next/link";

interface BreadcrumbsProps {
  carName: string;
}

export default function Breadcrumbs({ carName }: BreadcrumbsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6 text-sm">
      <Link href="/" className="text-slate-500 hover:text-[#fea90b] transition-colors">
        Home
      </Link>
      <span className="text-slate-400">/</span>
      <Link href="/cars" className="text-slate-500 hover:text-[#fea90b] transition-colors">
        All Cars
      </Link>
      <span className="text-slate-400">/</span>
      <span className="text-slate-900 dark:text-slate-100 font-medium">{carName}</span>
    </div>
  );
}
