const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Left - Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Event Management. All rights reserved.
        </p>

        {/* Right - Links */}
        <div className="flex gap-4">
          <p className="hover:text-gray-300 transition cursor-pointer">
            Privacy Policy
          </p>
          <p className="hover:text-gray-300 transition cursor-pointer">Terms</p>
          <p className="hover:text-gray-300 transition cursor-pointer">
            Contact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
