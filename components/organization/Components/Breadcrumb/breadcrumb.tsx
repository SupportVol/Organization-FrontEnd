import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-sm font-medium mb-4" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {index === items.length - 1 ? (
              <span className="text-gray-500 dark:text-gray-400">{item}</span>
            ) : (
              <Link href="#">
                <a className="text-blue-500 hover:underline">{item}</a>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
