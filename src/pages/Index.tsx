import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

type SectionId = 'hero' | 'catalog' | 'about' | 'projects' | 'contacts' | 'news' | 'partners';

interface Section {
  id: SectionId;
  title: string;
  component: JSX.Element;
}

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const catalogItems = [
    { title: 'Кромкооблицовочные станки', icon: 'Box', description: 'Профессиональное оборудование для облицовки кромок' },
    { title: 'Форматно-раскроечные станки', icon: 'Layers', description: 'Высокоточная резка листовых материалов' },
    { title: 'Сверлильно-присадочные станки', icon: 'Drill', description: 'Автоматизированное сверление отверстий' },
    { title: 'Шлифовальные станки', icon: 'Disc', description: 'Калибровка и шлифование заготовок' },
  ];

  const projects = [
    { title: 'Мебельная фабрика "Мастер"', year: '2024', description: 'Комплексное оснащение производственной линии' },
    { title: 'ООО "СтройДеталь"', year: '2023', description: 'Модернизация участка раскроя и кромкования' },
    { title: 'ИП Петров', year: '2023', description: 'Запуск малого производства мебели' },
  ];

  const news = [
    { date: '15 Октября 2024', title: 'Новое поступление оборудования', category: 'Новости' },
    { date: '10 Октября 2024', title: 'Как выбрать кромкооблицовочный станок', category: 'Статья' },
    { date: '05 Октября 2024', title: 'Акция на форматно-раскроечные станки', category: 'Акции' },
  ];

  const partners = [
    { name: 'SCM Group', logo: '🏭' },
    { name: 'Biesse', logo: '⚙️' },
    { name: 'Homag', logo: '🔧' },
    { name: 'Felder Group', logo: '🏗️' },
  ];

  const initialSections: Section[] = [
    {
      id: 'hero',
      title: 'Главная',
      component: (
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 border-2 border-white rotate-12"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-white -rotate-12"></div>
          </div>
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                Деревообрабатывающее оборудование
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Промышленные решения для вашего производства
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button size="lg" variant="secondary" className="text-lg px-8 hover-scale">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-white text-white hover:bg-white hover:text-primary hover-scale">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Скачать каталог
                </Button>
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 'catalog',
      title: 'Каталог оборудования',
      component: (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Каталог оборудования</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Широкий ассортимент профессионального деревообрабатывающего оборудования
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {catalogItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon name={item.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                    <Button variant="link" className="mt-4 p-0 text-primary font-semibold">
                      Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )
    },
    {
      id: 'about',
      title: 'О компании',
      component: (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">О компании</h2>
                <p className="text-lg mb-4 text-foreground/80">
                  Более 15 лет мы поставляем качественное деревообрабатывающее оборудование для предприятий по всей России.
                </p>
                <p className="text-lg mb-6 text-foreground/80">
                  Наша миссия — обеспечить ваше производство надёжным и современным оборудованием, которое повысит производительность и качество продукции.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Проектов</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">15</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">200+</div>
                    <div className="text-sm text-muted-foreground">Клиентов</div>
                  </div>
                </div>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 hover-scale">
                  <Icon name="Users" size={20} className="mr-2" />
                  Наша команда
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Factory" size={120} className="text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 'projects',
      title: 'Реализованные проекты',
      component: (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Реализованные проекты</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Примеры успешного оснащения производственных предприятий
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                      <Icon name="CheckCircle2" size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Button variant="outline" className="w-full hover-scale">
                      Смотреть проект
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )
    },
    {
      id: 'contacts',
      title: 'Контакты',
      component: (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Контакты</h2>
                <p className="text-lg mb-8 text-muted-foreground">
                  Свяжитесь с нами для получения консультации по выбору оборудования
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                      <div className="text-muted-foreground">+7 (800) 555-35-35</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-muted-foreground">info@woodequip.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</div>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:border-primary" 
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:border-primary" 
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Сообщение</label>
                      <textarea 
                        className="w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:border-primary h-24" 
                        placeholder="Расскажите о вашем проекте"
                      ></textarea>
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 hover-scale">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 'news',
      title: 'Новости и статьи',
      component: (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Новости и статьи</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Актуальная информация о новинках и тенденциях отрасли
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                    <Button variant="link" className="p-0 text-primary font-semibold">
                      Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )
    },
    {
      id: 'partners',
      title: 'Наши партнёры',
      component: (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Наши партнёры</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Мы работаем с ведущими мировыми производителями оборудования
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-8 border-2 rounded-lg hover:border-primary transition-all hover:shadow-lg group"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {partner.logo}
                  </div>
                  <div className="font-semibold text-center">{partner.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    }
  ];

  const [sections, setSections] = useState(initialSections);

  const handleDragStart = (index: number) => {
    if (!isEditMode) return;
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (!isEditMode || draggedIndex === null || draggedIndex === index) return;

    const newSections = [...sections];
    const draggedSection = newSections[draggedIndex];
    newSections.splice(draggedIndex, 1);
    newSections.splice(index, 0, draggedSection);
    
    setSections(newSections);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    toast(isEditMode ? 'Режим редактирования выключен' : 'Режим редактирования включен. Перетаскивайте блоки для изменения порядка');
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Hammer" size={28} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-primary">WoodEquip</div>
                <div className="text-xs text-muted-foreground">Промышленное оборудование</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {sections.map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm font-semibold hover:text-primary transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={toggleEditMode}
                className={isEditMode ? 'bg-accent/20 text-accent' : ''}
              >
                <Icon name={isEditMode ? "Lock" : "Move"} size={18} className="mr-2" />
                {isEditMode ? 'Готово' : 'Редактировать'}
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {sections.map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-4 py-3 hover:bg-muted rounded-md font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="pt-20">
        {sections.map((section, index) => (
          <div 
            key={section.id}
            id={section.id}
            draggable={isEditMode}
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            className={`
              ${isEditMode ? 'cursor-move border-4 border-dashed border-primary/30 hover:border-primary/60' : ''}
              ${draggedIndex === index ? 'opacity-50' : ''}
              transition-all
            `}
          >
            {isEditMode && (
              <div className="bg-primary text-white px-4 py-2 text-sm font-semibold flex items-center gap-2">
                <Icon name="GripVertical" size={18} />
                {section.title} - перетащите для изменения порядка
              </div>
            )}
            {section.component}
          </div>
        ))}
      </main>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Icon name="Hammer" size={24} className="text-primary" />
                </div>
                <div className="font-bold text-xl">WoodEquip</div>
              </div>
              <p className="text-white/80 text-sm">
                Профессиональное деревообрабатывающее оборудование для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Проекты</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Партнёры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Каталог</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#catalog" className="hover:text-white transition-colors">Оборудование</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@woodequip.ru</li>
                <li>г. Москва, ул. Промышленная, д. 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            © 2024 WoodEquip. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
