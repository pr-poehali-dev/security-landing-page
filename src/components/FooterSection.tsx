
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FooterSection = () => {
  return (
    <footer className="bg-deep-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">КиберЩит</h3>
            <p className="text-light-gray mb-4 max-w-md">
              Мы помогаем людям и организациям защитить их данные и обеспечить безопасность в цифровом мире.
            </p>
            <div className="flex gap-4">
              <Button size="sm" variant="ghost" className="rounded-full p-2">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="rounded-full p-2">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="rounded-full p-2">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="rounded-full p-2">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-light-gray hover:text-bright-blue transition-colors">О нас</a>
              </li>
              <li>
                <a href="#" className="text-light-gray hover:text-bright-blue transition-colors">Услуги</a>
              </li>
              <li>
                <a href="#" className="text-light-gray hover:text-bright-blue transition-colors">Блог</a>
              </li>
              <li>
                <a href="#" className="text-light-gray hover:text-bright-blue transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-light-gray">
                <Icon name="MapPin" size={16} className="text-bright-blue" />
                <span>Москва, ул. Кибербезопасности, 42</span>
              </li>
              <li className="flex items-center gap-2 text-light-gray">
                <Icon name="Phone" size={16} className="text-bright-blue" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2 text-light-gray">
                <Icon name="Mail" size={16} className="text-bright-blue" />
                <span>info@cybershield.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-gray text-sm">© 2025 КиберЩит. Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-4 text-sm text-light-gray">
              <li><a href="#" className="hover:text-bright-blue transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-bright-blue transition-colors">Условия использования</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
