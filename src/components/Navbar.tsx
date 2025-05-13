
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-deep-blue text-white py-4 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Icon name="Shield" className="h-8 w-8 text-bright-blue" />
            <span className="ml-2 text-xl font-bold">КиберЩит</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-bright-blue transition-colors">Главная</a>
            <a href="#" className="text-white hover:text-bright-blue transition-colors">Угрозы</a>
            <a href="#" className="text-white hover:text-bright-blue transition-colors">Ресурсы</a>
            <a href="#" className="text-white hover:text-bright-blue transition-colors">Контакты</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-bright-blue hover:bg-bright-blue/90 text-white">
              Получить консультацию
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-white hover:text-bright-blue transition-colors">Главная</a>
              <a href="#" className="text-white hover:text-bright-blue transition-colors">Угрозы</a>
              <a href="#" className="text-white hover:text-bright-blue transition-colors">Ресурсы</a>
              <a href="#" className="text-white hover:text-bright-blue transition-colors">Контакты</a>
              <Button className="bg-bright-blue hover:bg-bright-blue/90 text-white w-full mt-2">
                Получить консультацию
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
