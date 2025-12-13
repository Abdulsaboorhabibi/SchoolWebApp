const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-zinc-800 dark:bg-zinc-800 dark:text-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center">
            © {new Date().getFullYear()} ACHROMIS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
