'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavTabs = () => {
  const pathname = usePathname();

  const tabs = [
    { name: 'Upload Mapping Dealer', href: '/upload-dealer' },
    { name: 'Upload Mapping Kendaraan', href: '/upload-kendaraan' }
  ];

  return (

    <div className="flex border-b">
      {tabs.map((tab) => (
        <Link key={tab.name} href={tab.href} legacyBehavior>
          <a
            className={`px-4 py-2 text-sm font-medium ${
              pathname === tab.href
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.name}
          </a>
        </Link>
      ))}
    </div>

  );
};

export default NavTabs;
