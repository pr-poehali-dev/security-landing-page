
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const resources = [
  {
    title: "Лаборатория Касперского",
    description: "Ведущий разработчик систем защиты от вредоносного ПО, интернет-угроз и кибератак.",
    image: "https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=800&auto=format&fit=crop",
    link: "https://www.kaspersky.ru/",
    icon: "ExternalLink"
  },
  {
    title: "SecurityLab",
    description: "Портал о компьютерной безопасности с новостями, статьями и аналитикой в сфере кибербезопасности.",
    image: "https://images.unsplash.com/photo-1563013544-08f91909c2cd?q=80&w=800&auto=format&fit=crop",
    link: "https://www.securitylab.ru/",
    icon: "ExternalLink"
  },
  {
    title: "Хабр - Информационная безопасность",
    description: "Раздел популярного IT-портала, посвященный вопросам информационной безопасности.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    link: "https://habr.com/ru/hub/infosecurity/",
    icon: "ExternalLink"
  }
];

const ResourcesSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-blue">
            Полезные <span className="text-bright-blue">ресурсы</span>
          </h2>
          <p className="text-lg text-light-gray max-w-3xl mx-auto">
            Подборка проверенных ресурсов, которые помогут вам быть в курсе последних тенденций в сфере кибербезопасности.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">{resource.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-deep-blue">{resource.title}</h3>
                <p className="text-light-gray mb-4">{resource.description}</p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-bright-blue hover:text-bright-blue/80 font-medium"
                >
                  Перейти на сайт
                  <Icon name={resource.icon} className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-bright-blue text-bright-blue hover:bg-bright-blue hover:text-white"
          >
            Больше ресурсов
            <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
