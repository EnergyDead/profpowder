export const site = {
  name: 'ПрофПорошок',
  url: 'https://profpowder.example',
  locale: 'ru_RU',
  title: 'Порошковая покраска металла для бизнеса и частных клиентов',
  description:
    'Порошковая покраска металлических изделий в собственном цехе: подготовка, окраска, упаковка и доставка с гарантией качества.',
  phone: '+7 (900) 125-48-90',
  email: 'zakaz@profpowder.ru',
  address: 'г. Екатеринбург, ул. Монтажников, 14Б',
  keywords: [
    'порошковая покраска',
    'покраска металла',
    'покраска дисков',
    'покраска металлоконструкций',
    'цех порошковой покраски екатеринбург'
  ]
} as const;

export const menu = {
  ariaLabel: 'Основная навигация',
  items: [
    { label: 'Преимущества', href: '#advantages' },
    { label: 'Услуги', href: '#services' },
    { label: 'Цены', href: '#pricing' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Партнёры', href: '#partners' },
    { label: 'Контакты', href: '#contacts' }
  ]
} as const;

export const hero = {
  image: {
    src: '/images/hero-placeholder.svg',
    alt: 'Фоновое изображение производственного цеха (заглушка)'
  },
  logoText: 'ПРОФИ ПОРОШОК',
  navItems: [
    { label: 'Преимущества', href: '#advantages' },
    { label: 'Что красим', href: '#services' },
    { label: 'Цены', href: '#pricing' },
    { label: 'Наши работы', href: '#portfolio' }
  ],
  callButtonLabel: 'Заказать звонок',
  title: 'Порошковая покраска\nв Йошкар-Оле',
  subtitleStart: 'Это ',
  subtitleStrong: 'современный метод',
  subtitleEnd: ' нанесения полимерного\nпокрытия на металлические изделия',
  benefits: ['От 1 дня', 'Гарантия качества', 'Работаем с любыми изделиями'],
  ctaLabel: 'Оставить заявку'
} as const;

export const advantages = {
  section: {
    title: 'Преимущества порошковой покраски:'
  },
  cards: [
    {
      value: '1',
      title: 'Ударопрочное\nпокрытие',
      description: 'Покрытие выдерживает\nмеханические нагрузки,\nне трескается и защищает\nметалл от сколов'
    },
    {
      value: '2',
      title: 'Защита\nот коррозии',
      description: 'Плотный слой краски\nполностью изолирует металл от\nвлаги и воздуха, предотвращая\nпоявление ржавчины'
    },
    {
      value: '3',
      title: 'Идеально\nровный слой',
      description: 'Без подтёков, разводов\nи дефектов — поверхность\nвыглядит как новая даже при\nсложной геометрии изделия'
    },
    {
      value: '4',
      title: 'Срок службы\n5+ лет',
      description: 'Покрытие устойчиво к\nперепадам температур,\nультрафиолету и износу,\nсохраняя внешний вид'
    }
  ]
} as const;

export const serviceCategories = {
  section: {
    eyebrow: 'Услуги',
    title: 'Категории изделий, которые мы красим',
    subtitle:
      'Работаем с автомобильными деталями, архитектурным металлом и промышленными изделиями разной геометрии.'
  },
  items: [
    {
      title: 'Колёсные диски и автоэлементы',
      countLabel: 'до 220 шт/смена',
      image: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Ограждения и металлоконструкции',
      countLabel: 'длина изделий до 6,5 м',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Профиль, лист и доборные элементы',
      countLabel: 'мелкие и средние партии',
      image: 'https://images.unsplash.com/photo-1571974599782-87624638275e?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Серийные изделия для производства',
      countLabel: 'потоковая окраска по графику',
      image: 'https://images.unsplash.com/photo-1581092919535-7146ff1a5908?auto=format&fit=crop&w=900&q=80'
    }
  ]
} as const;

export const pricing = {
  section: {
    title: 'Цены',
    subtitle: 'Рассчитаем точную стоимость за 5 минут. Пришлите фото — подскажем цену и сроки'
  },
  plans: [
    { planName: 'Диски', price: '2000 ₽' },
    { planName: 'Детали', price: '500 ₽' },
    { planName: 'Конструкции', price: '700 ₽/м²' }
  ]
} as const;

export const portfolio = {
  section: {
    eyebrow: 'Портфолио',
    title: 'Примеры наших проектов',
    subtitle: 'Показываем реальные кейсы по восстановлению и серийной окраске металлических изделий.'
  },
  tabs: ['Диски', 'Фасадный металл', 'Промышленность'],
  beforeLabel: 'До',
  afterLabel: 'После',
  beforePlaceholder: 'Изделие до подготовки и окраски',
  afterPlaceholder: 'Изделие после порошковой покраски'
} as const;

export const partners = {
  section: {
    eyebrow: 'Партнёры',
    title: 'С кем мы работаем на постоянной основе',
    subtitle: 'Закупаем проверенные материалы и выполняем заказы для строительных, производственных и сервисных компаний.'
  },
  tabs: ['Поставщики порошка', 'Застройщики', 'Производственные компании'],
  cards: ['AkzoNobel', 'Primatek', 'УралСтройМет', 'ТехКаркас', 'ПромМаш', 'СитиФасад']
} as const;

export const contacts = {
  section: {
    eyebrow: 'Контакты',
    title: 'Приезжайте на производство или отправьте запрос онлайн',
    subtitle: 'Оцениваем стоимость по фото, чертежам и спецификациям. Для оптовых клиентов подготавливаем коммерческое предложение.'
  },
  phoneLabel: 'Телефон',
  emailLabel: 'Email',
  addressLabel: 'Адрес',
  routeButton: 'Построить маршрут',
  mapPlaceholderTitle: 'Здесь будет интерактивная карта',
  mapPlaceholderSubtitle: 'Подключим карту с точкой производства и схемой заезда.'
} as const;

export const formLabels = {
  section: {
    eyebrow: 'Заявка',
    title: 'Отправьте данные для расчёта стоимости',
    subtitle: 'Заполните форму, и менеджер свяжется с вами, чтобы уточнить сроки, объём и требования к покрытию.'
  },
  benefits: [
    'Бесплатный расчёт в течение 15 минут',
    'Подбор оттенка по каталогу RAL',
    'Фотоотчёт перед отгрузкой партии',
    'Самовывоз и доставка по Екатеринбургу и области'
  ],
  fields: {
    name: { label: 'Имя', placeholder: 'Как к вам обращаться' },
    phone: { label: 'Телефон', placeholder: '+7 (___) ___-__-__' },
    comment: {
      label: 'Комментарий',
      placeholder: 'Опишите изделия, размеры, объём партии и желаемый цвет'
    },
    file: {
      label: 'Файл / чертёж'
    }
  },
  submitButton: 'Отправить заявку'
} as const;

export const footer = {
  rights: 'Все права защищены.'
} as const;

export type SiteData = typeof site;
