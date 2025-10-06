import "boxicons/css/boxicons.min.css";

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobilemenu");
    mobileMenu.classList.toggle("hidden");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-800">
      <div className="flex justify-between items-center py-4 px-5 md:px-16">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-wide text-white">
          Prajith S
        </h1>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#Home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-3xl text-white p-2"
        >
          <i className="bx bx-menu"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobilemenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 bg-black/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8"
      >
        <a href="#Home" onClick={toggleMobileMenu} className="nav-link text-2xl">
          Home
        </a>
        <a href="#about" onClick={toggleMobileMenu} className="nav-link text-2xl">
          About
        </a>
        <a href="#skills" onClick={toggleMobileMenu} className="nav-link text-2xl">
          Skills
        </a>
        <a href="#projects" onClick={toggleMobileMenu} className="nav-link text-2xl">
          Projects
        </a>
        <a href="#contact" onClick={toggleMobileMenu} className="nav-link text-2xl">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
