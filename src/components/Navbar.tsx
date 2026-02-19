import { useState, useEffect } from 'react';
import { Menu, X, Layers, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const maker = {
    name: 'Ubongabasi',
    job: 'Web Developer',
  };

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 border-b ${scrolled
          ? 'py-3 bg-primary/80 backdrop-blur-lg border-gray-200'
          : 'py-5 '
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a href="/" className="group flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-text-main leading-tight">
                {maker.name}
              </span>
            </div>
          </a>

          {/* Controls Section */}
          <div className="flex items-center space-x-4">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-semibold text-text-main hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="h-6 w-px bg-secondary" />
              <div className="flex items-center space-x-4">
                <a href="#" className="p-2 text-gray-400 hover:text-text-main transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="p-2 text-gray-400 hover:text-text-main transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="h-6 w-px bg-secondary hidden md:block" />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-text-main hover:bg-secondary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-[-1] transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Container */}
      <div
        className={`absolute top-full left-0 w-full bg-primary border-b border-secondary overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-text-main hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex items-center space-x-6 border-t border-secondary">
            <a href="#" className="text-gray-400 hover:text-text-main transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-text-main transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-text-main transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
