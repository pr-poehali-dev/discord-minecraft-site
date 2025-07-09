import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const gameItems = [
    {
      title: "Выживание",
      description: "Классический режим выживания в мире полном опасностей",
      icon: "Sword",
      players: "24/50",
      color: "neon-green",
    },
    {
      title: "SkyWars",
      description: "Воздушные бои на парящих островах",
      icon: "Zap",
      players: "18/32",
      color: "neon-cyan",
    },
    {
      title: "BedWars",
      description: "Защищай свою кровать и уничтожай чужие",
      icon: "Shield",
      players: "45/64",
      color: "neon-purple",
    },
    {
      title: "Анархия",
      description: "Мир без правил - выживает сильнейший",
      icon: "Flame",
      players: "12/30",
      color: "neon-magenta",
    },
    {
      title: "BuildCraft",
      description: "Творческий режим для строительства",
      icon: "Hammer",
      players: "8/20",
      color: "neon-green",
    },
  ];

  const admins = [
    { name: "SaintAdmin", role: "Главный администратор", status: "online" },
    { name: "ModeratorX", role: "Модератор", status: "online" },
    { name: "HelperBot", role: "Помощник", status: "offline" },
  ];

  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      {/* Navigation */}
      <nav className="bg-gaming-dark border-b border-neon-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold pixel-text text-neon-purple">
                  SAINT EMPIRE
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-neon-cyan hover:text-neon-purple px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Главная
                  </a>
                  <a
                    href="#servers"
                    className="text-gray-300 hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Сервера
                  </a>
                  <a
                    href="#guides"
                    className="text-gray-300 hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Гайды
                  </a>
                  <a
                    href="#community"
                    className="text-gray-300 hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Сообщество
                  </a>
                  <a
                    href="#admins"
                    className="text-gray-300 hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Админы
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://discord.gg/CfB7CjsAvp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white animate-neon-glow">
                  <Icon name="MessageCircle" size={16} />
                  Discord
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 to-neon-cyan/10"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="text-neon-purple">SAINT</span>
            <span className="text-neon-cyan"> EMPIRE</span>
            <span className="text-neon-magenta"> GAMERS</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up">
            Присоединяйся к лучшему игровому сообществу! Множество режимов,
            активная модерация и дружелюбные игроки ждут тебя.
          </p>
          <div className="bg-gaming-dark/80 rounded-lg p-6 inline-block neon-border animate-float">
            <div className="flex items-center justify-center space-x-4">
              <Icon name="Server" className="text-neon-cyan" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-400">IP сервера:</p>
                <p className="text-lg font-mono text-neon-cyan">
                  saintservercraft.sosal.today
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Modes Section */}
      <section id="servers" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-purple">
            Игровые режимы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameItems.map((item, index) => (
              <Card
                key={index}
                className="bg-gaming-dark border-neon-purple/20 hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon
                      name={item.icon}
                      className="text-neon-cyan"
                      size={24}
                    />
                    <Badge className="bg-neon-green text-gaming-darker">
                      {item.players}
                    </Badge>
                  </div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-neon-purple hover:bg-neon-purple/80">
                    Играть сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section id="community" className="py-16 px-4 bg-gaming-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-neon-cyan">
            Статистика сообщества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gaming-dark rounded-lg p-6 neon-border">
              <div className="text-3xl font-bold text-neon-purple mb-2">
                1,247
              </div>
              <div className="text-gray-400">Зарегистрированных игроков</div>
            </div>
            <div className="bg-gaming-dark rounded-lg p-6 neon-border">
              <div className="text-3xl font-bold text-neon-cyan mb-2">156</div>
              <div className="text-gray-400">Онлайн сейчас</div>
            </div>
            <div className="bg-gaming-dark rounded-lg p-6 neon-border">
              <div className="text-3xl font-bold text-neon-magenta mb-2">
                24/7
              </div>
              <div className="text-gray-400">Время работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Admins Section */}
      <section id="admins" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-purple">
            Команда администрации
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {admins.map((admin, index) => (
              <Card
                key={index}
                className="bg-gaming-dark border-neon-purple/20 text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-neon-purple/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="text-neon-purple" size={24} />
                  </div>
                  <CardTitle className="text-white">{admin.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {admin.role}
                  </CardDescription>
                  <Badge
                    className={
                      admin.status === "online"
                        ? "bg-neon-green"
                        : "bg-gray-600"
                    }
                  >
                    {admin.status === "online" ? "В сети" : "Не в сети"}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-16 px-4 bg-gaming-dark/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-cyan">
            Полезные гайды
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gaming-dark border-neon-cyan/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon
                    name="BookOpen"
                    className="text-neon-cyan mr-2"
                    size={20}
                  />
                  Как начать играть
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Пошаговое руководство для новичков
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gaming-dark border-neon-cyan/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon
                    name="Trophy"
                    className="text-neon-magenta mr-2"
                    size={20}
                  />
                  Правила сервера
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Основные правила и ограничения
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gaming-dark border-t border-neon-purple/20 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-neon-purple mb-4">Связь</h3>
              <div className="space-y-2">
                <a
                  href="https://discord.gg/CfB7CjsAvp"
                  className="block text-gray-400 hover:text-neon-cyan"
                >
                  <Icon
                    name="MessageCircle"
                    className="inline mr-2"
                    size={16}
                  />
                  Discord сервер
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neon-cyan mb-4">
                Информация
              </h3>
              <div className="space-y-2">
                <p className="text-gray-400">
                  IP: saintservercraft.sosal.today
                </p>
                <p className="text-gray-400">Версия: 1.20.x</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neon-magenta mb-4">
                Донаты
              </h3>
              <Button className="bg-neon-magenta hover:bg-neon-magenta/80">
                Поддержать проект
              </Button>
            </div>
          </div>
          <div className="text-center text-gray-500">
            <p>&copy; 2024 Saint Empire Gamers. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
