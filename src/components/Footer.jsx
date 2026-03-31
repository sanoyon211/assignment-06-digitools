import React from 'react';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const columns = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Templates', 'Integrations'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Help Center', 'Community', 'Contact'],
    },
  ];

  return (
    <div className="bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-20 mb-10">
          <div className="col-span-1">
            <div className="mb-4">
              <span className="text-2xl text-white font-extrabold font-[family-name:var(--font-display)]">
                DigiTools
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {columns.map(col => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-4 text-lg font-[family-name:var(--font-display)]">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-violet-400 text-sm transition-colors no-underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg font-[family-name:var(--font-display)]">
              Social Links
            </h4>
            <div className="flex flex-row gap-3 ">
              <div className="bg-white p-2 rounded-full hover:scale-[1.02] cursor-pointer">
                <RiInstagramFill className="text-xl text-black hover:scale-[1.02]" />
              </div>
              <div className="bg-white p-2 rounded-full hover:scale-[1.02] cursor-pointer">
                <FaFacebookSquare className="text-xl text-black hover:scale-[1.02]" />
              </div>
              <div className="bg-white p-2 rounded-full hover:scale-[1.02] cursor-pointer">
                <FaXTwitter className="text-xl text-black hover:scale-[1.02]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
          <p className="text-gray-200 text-lg">
            ©2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map(link => (
              <a
                key={link}
                href="#"
                className="text-gray-300 hover:text-gray-400 text-lg transition-colors no-underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
