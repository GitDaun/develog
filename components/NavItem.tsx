// components/NavItem.tsx
import Link from "next/link";
import { twMerge } from 'tailwind-merge';

interface NavItemProps {
  href: string;
  label: string;
  bgColor: string;  
  borderColor: string;  
  rotate: string;
}

export default function NavItem({ 
  href, 
  label, 
  bgColor, 
  borderColor, 
  rotate 
}: NavItemProps) {
  const baseStyles = "inline-block shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-0 hover:shadow-lg hover:z-10";
  
  return (
    <li className={twMerge(
      baseStyles,
      rotate,
      bgColor,
      borderColor,
      'border',
      'text-black'
    )}>
      <Link href={href} className="block p-3 text-inherit no-underline font-medium">
        {label}
      </Link>
    </li>
  );
}