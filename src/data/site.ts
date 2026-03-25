export const site = {
  name: 'ПрофПорошок',
  url: 'https://profpowder.example',
  locale: 'ru_RU',
  title: 'Порошковая покраска металла в вашем городе',
  description:
    'Промышленная и частная порошковая покраска: быстро, аккуратно, с гарантией качества.',
  phone: '+7 (900) 000-00-00',
  email: 'hello@profpowder.example',
  address: 'г. Ваш город, ул. Производственная, 1',
  keywords: [
    'порошковая покраска',
    'покраска металла',
    'порошковая краска',
    'покраска дисков',
    'покраска профиля'
  ]
} as const;

export const navItems = [
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Услуги', href: '#services' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Контакты', href: '#contacts' }
] as const;

export const heroBenefits = ['Камера до 6 м', 'Срок от 3 дней', 'Гарантия 24 месяца'] as const;

export const advantages = [
  { value: '10+', title: 'Лет опыта', description: 'Работаем с частными и промышленными заказами с 2014 года.' },
  { value: '48ч', title: 'Средний срок', description: 'Большинство стандартных заказов отдаём уже через два дня.' },
  { value: '1200м²', title: 'Площадь цеха', description: 'Полный цикл: подготовка, окраска и контроль качества на месте.' },
  { value: '24мес', title: 'Гарантия', description: 'Фиксируем гарантийные обязательства в договоре на каждую партию.' }
] as const;

export const services = [
  { title: 'Диски и авто детали', countLabel: 'до 200 шт/смена', image: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&w=900&q=80' },
  { title: 'Металлоконструкции', countLabel: 'до 6 м длина', image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80' },
  { title: 'Профиль и лист', countLabel: 'малые партии', image: 'https://images.unsplash.com/photo-1571974599782-87624638275e?auto=format&fit=crop&w=900&q=80' },
  { title: 'Серийные изделия', countLabel: 'потоковые линии', image: 'https://images.unsplash.com/photo-1581092919535-7146ff1a5908?auto=format&fit=crop&w=900&q=80' }
] as const;

export const pricing = [
  { planName: 'Базовый', price: 'от 450 ₽', period: '/м²' },
  { planName: 'Стандарт', price: 'от 790 ₽', period: '/м²' },
  { planName: 'Премиум', price: 'от 1190 ₽', period: '/м²' }
] as const;

export const portfolioTabs = ['Диски', 'Ограждения', 'Промышленность'] as const;
export const partnersTabs = ['Материалы', 'Застройщики', 'Производства'] as const;

export const partnerCards = [
  'RAL Coatings',
  'NordMetal',
  'Factory Group',
  'BuildLine',
  'Steel Vision',
  'Urban Frame'
] as const;

export const leadBenefits = [
  'Бесплатный расчёт за 15 минут',
  'Подбор цвета по RAL',
  'Фотоотчёт перед отгрузкой',
  'Самовывоз и доставка по городу'
] as const;

export type SiteData = typeof site;
