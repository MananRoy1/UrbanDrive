import Link from "next/link";

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Press", href: "#" },
];

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Contact Us", href: "#" },
];

const socialLinks = [
  { label: "In", href: "#" },
  { label: "X", href: "#" },
  { label: "Fb", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#231c0f] border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#fea90b] rounded-lg flex items-center justify-center text-[#231c0f]">
                <span className="material-symbols-outlined text-[20px]">
                  directions_car
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                UrbanDrive
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Premium car rentals for the modern explorer. Experience the city
              on your own terms with our flexible, on-demand fleet.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#fea90b] dark:text-gray-400 dark:hover:text-[#fea90b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#fea90b] dark:text-gray-400 dark:hover:text-[#fea90b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#fea90b] hover:text-gray-900 transition-all font-bold text-lg"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2023 UrbanDrive. All rights reserved.
          </p>
          <div className="flex gap-8">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="material-symbols-outlined text-base">
                language
              </span>
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
