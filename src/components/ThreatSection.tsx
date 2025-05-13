
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const threats = [
  {
    icon: "Shield",
    title: "Вредоносные программы",
    description: "Защита от вирусов, троянов и других вредоносных программ, которые могут нанести вред вашим устройствам и данным.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: "Lock",
    title: "Фишинговые атаки",
    description: "Распознавание и блокировка попыток кражи личных данных через поддельные сайты и электронные письма.",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: "Wifi",
    title: "Незащищенные сети",
    description: "Обеспечение безопасности при подключении к общественным Wi-Fi сетям с помощью шифрования и VPN-сервисов.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: "Key",
    title: "Слабые пароли",
    description: "Создание и управление надежными паролями для защиты ваших учетных записей от несанкционированного доступа.",
    color: "from-blue-500 to-cyan-500"
  },
];

const ThreatSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-blue">
            Основные угрозы <span className="text-bright-blue">и способы защиты</span>
          </h2>
          <p className="text-lg text-light-gray max-w-3xl mx-auto">
            Современный цифровой мир полон угроз безопасности. Узнайте о наиболее распространенных угрозах и эффективных методах защиты от них.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {threats.map((threat, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${threat.color}`}>
                  <Icon name={threat.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-deep-blue">{threat.title}</h3>
                <p className="text-light-gray">{threat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreatSection;
