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

export type SiteData = typeof site;
