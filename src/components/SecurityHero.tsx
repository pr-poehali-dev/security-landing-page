
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SecurityHero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-deep-blue text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-bright-blue"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 10}px`,
                height: `${Math.random() * 300 + 10}px`,
                opacity: Math.random() * 0.5,
                filter: "blur(100px)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              КиберЩит:<br />
              <span className="text-bright-blue">Ваша безопасность</span> в цифровом мире
            </h1>
            <p className="text-lg md:text-xl mb-8 text-light-gray">
              Современные решения для защиты от киберугроз и обеспечения безопасности вашей информации.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-bright-blue hover:bg-bright-blue/90 text-white font-medium"
              >
                Узнать больше
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                Получить консультацию
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-slide-in">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-bright-blue to-purple-600 rounded-lg blur opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Кибербезопасность" 
                className="relative rounded-lg w-full h-auto shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityHero;
