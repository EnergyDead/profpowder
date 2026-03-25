import { useMemo, useState } from 'react';

const benefits = [
  {
    number: '1',
    title: 'Ударопрочное\nпокрытие',
    description:
      'Покрытие выдерживает механические нагрузки, не трескается и защищает металл от сколов'
  },
  {
    number: '2',
    title: 'Защита\nот коррозии',
    description:
      'Плотный слой краски полностью изолирует металл от влаги и воздуха, предотвращая появление ржавчины'
  },
  {
    number: '3',
    title: 'Идеально\nровный слой',
    description:
      'Без подтёков, разводов и дефектов — поверхность выглядит как новая даже при сложной геометрии изделия'
  },
  {
    number: '4',
    title: 'Срок службы\n5+ лет',
    description:
      'Покрытие устойчиво к перепадам температур, ультрафиолету и износу, сохраняя внешний вид'
  }
];

const facts = ['От 1 дня', 'Гарантия качества', 'Работаем с любыми изделиями'];

const paintedItems = [
  { title: 'Металлопрокат', image: '/images/painted/metalloprokat.jpg' },
  { title: 'Ограждения\nи ворота', image: '/images/painted/fence-gate.jpg' },
  { title: 'Автомобильные диски\nи мото детали', image: '/images/painted/wheels-moto.jpg' },
  { title: 'Мебель', image: '/images/painted/furniture.jpg' }
];

const prices = [
  { title: 'Диски', priceFrom: '2000 ₽', background: '/images/prices/diski-bg.jpg' },
  { title: 'Детали', priceFrom: '500 ₽', background: '/images/prices/details-bg.jpg' },
  {
    title: 'Конструкции',
    priceFrom: '700 ₽/м²',
    background: '/images/prices/constructions-bg.jpg'
  }
];

const categories = ['Все', 'Диски', 'Ограждения', 'Детали', 'Мебель'];

const processSteps = [
  'Бесплатно уточним\nстоимость',
  'Работаем четко\nпо срокам',
  'Оплата по факту\nготовности',
  'Даем полную\nгарантию'
];

const workPairs = [
  {
    category: 'Диски',
    before: 'https://placehold.co/606x284/4a4a4a/E8E8E8?text=Диски+до',
    after: 'https://placehold.co/606x284/6a6a6a/E8E8E8?text=Диски+после'
  },
  {
    category: 'Ограждения',
    before: 'https://placehold.co/606x284/4f565c/E8E8E8?text=Ограждения+до',
    after: 'https://placehold.co/606x284/687178/E8E8E8?text=Ограждения+после'
  },
  {
    category: 'Детали',
    before: 'https://placehold.co/606x284/454545/E8E8E8?text=Детали+до',
    after: 'https://placehold.co/606x284/616161/E8E8E8?text=Детали+после'
  },
  {
    category: 'Мебель',
    before: 'https://placehold.co/606x284/3d4450/E8E8E8?text=Мебель+до',
    after: 'https://placehold.co/606x284/5d6673/E8E8E8?text=Мебель+после'
  }
];

const partners = [
  { category: 'Диски', name: 'Disk Service', logo: 'DS' },
  { category: 'Ограждения', name: 'Steel Guard', logo: 'SG' },
  { category: 'Детали', name: 'MetaLine', logo: 'ML' },
  { category: 'Мебель', name: 'Loft Home', logo: 'LH' },
  { category: 'Диски', name: 'R17 Center', logo: 'R17' },
  { category: 'Ограждения', name: 'FencePro', logo: 'FP' }
];

const activeFilterClass =
  'bg-[radial-gradient(ellipse_89.93%_82.48%_at_36.11%_34.00%,_#F2861F_0%,_#EB8121_19%,_#E57C22_39%,_#893F16_100%)] border-transparent';

const baseFilterClass = 'border border-black/80 bg-transparent hover:border-white/40';

function App() {
  const [workCategory, setWorkCategory] = useState('Все');
  const [partnerCategory, setPartnerCategory] = useState('Все');
  const [workIndex, setWorkIndex] = useState(0);

  const filteredWorks = useMemo(
    () => (workCategory === 'Все' ? workPairs : workPairs.filter((item) => item.category === workCategory)),
    [workCategory]
  );

  const filteredPartners = useMemo(
    () =>
      partnerCategory === 'Все'
        ? partners
        : partners.filter((item) => item.category === partnerCategory),
    [partnerCategory]
  );

  const currentWork = filteredWorks[workIndex % filteredWorks.length] ?? workPairs[0];

  const showNextWork = () => {
    setWorkIndex((prev) => (prev + 1) % filteredWorks.length);
  };

  const selectWorkCategory = (category) => {
    setWorkCategory(category);
    setWorkIndex(0);
  };

  return (
    <div className="bg-[#06090d] text-gray-200 font-['Montserrat']">
      <section
        id="hero"
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(3,6,10,0.75) 0%, rgba(3,6,10,0.9) 70%, #03060a 100%), url('/backgrounds/bg-1.png')"
        }}
      >
        <div className="mx-auto flex min-h-screen max-w-[1240px] flex-col px-6 pb-20 pt-8 lg:px-8">
          <header className="flex flex-wrap items-center justify-between gap-6">
            <a href="#hero" className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded border-2 border-gray-200/80">
                <div className="absolute inset-[5px] rounded-sm border border-gray-200/80" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-black leading-4 text-gray-200">
                  П
                </span>
              </div>
              <span className="text-xl font-bold uppercase leading-5">ПРОФИ ПОРОШОК</span>
            </a>

            <nav className="flex flex-wrap items-center gap-6 text-base font-semibold leading-6">
              <a href="#advantages" className="transition hover:text-white">
                Преимущества
              </a>
              <a href="#painted" className="transition hover:text-white">
                Что красим
              </a>
              <a href="#prices" className="transition hover:text-white">
                Цены
              </a>
              <a href="#works" className="transition hover:text-white">
                Наши работы
              </a>
              <button className="rounded border border-white/35 px-6 py-3 text-sm font-semibold leading-4 transition hover:border-white/60 hover:bg-white/5">
                Заказать звонок
              </button>
            </nav>
          </header>

          <div className="mt-16 max-w-4xl lg:mt-24">
            <h1 className="text-4xl font-semibold leading-[1.08] md:text-6xl md:leading-[1.05]">
              Порошковая покраска
              <br />в Йошкар-Оле
            </h1>

            <p className="mt-6 text-2xl leading-9 text-gray-300 md:text-[36px] md:leading-[1.2]">
              Это <span className="font-semibold">современный метод</span> нанесения полимерного
              покрытия на металлические изделия
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm leading-6 text-gray-300 md:gap-6">
              {facts.map((fact, index) => (
                <div key={fact} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#d47626]" />
                  <span>{fact}</span>
                  {index !== facts.length - 1 && <span className="hidden text-[#d47626] md:inline">•</span>}
                </div>
              ))}
            </div>

            <button className="mt-8 inline-flex h-14 items-center justify-center rounded-[5px] bg-[radial-gradient(ellipse_89.93%_82.48%_at_36.11%_34.00%,_#F2861F_0%,_#EB8121_19%,_#E57C22_39%,_#893F16_100%)] px-7 py-4 text-lg font-semibold leading-6 text-gray-200 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:brightness-110">
              Оставить заявку
            </button>
          </div>

          <div id="advantages" className="mt-48 lg:mt-56">
            <h2 className="text-center text-4xl font-semibold leading-8 md:text-5xl">
              Преимущества порошковой покраски:
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
              {benefits.map((item) => (
                <article
                  key={item.number}
                  className="rounded-[20px] border border-gray-300/60 bg-black/25 px-6 pb-9 pt-8 text-center"
                >
                  <p className="text-8xl font-light leading-none text-gray-100">{item.number}</p>
                  <h3 className="mt-7 whitespace-pre-line text-4xl font-semibold leading-tight text-[#EB8121] md:text-5xl xl:text-[34px]">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-7 max-w-[280px] text-xl font-normal leading-snug text-gray-100 md:text-2xl xl:text-[20px]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="painted" className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8">
        <h3 className="text-center text-4xl font-semibold leading-8">Что красим</h3>
        <p className="mx-auto mt-7 max-w-[740px] text-center text-base font-normal leading-4 text-gray-200">
          Красим любые металлические изделия — от автомобильных дисков до крупных конструкций
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {paintedItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded border border-white/25 bg-black/40">
              <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
              <div className="flex h-14 items-center justify-center border-t border-white/25 px-4">
                <h4 className="whitespace-pre-line text-center text-lg font-semibold leading-4">{item.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="prices" className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8">
        <h3 className="text-center text-4xl font-semibold leading-8">Цены</h3>
        <p className="mx-auto mt-7 max-w-[740px] text-center text-base font-normal leading-4 text-gray-200">
          Рассчитаем точную стоимость за 5 минут. Пришлите фото — подскажем цену и сроки
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {prices.map((item) => (
            <article
              key={item.title}
              className="rounded border border-white/25 bg-black/50 bg-cover bg-center px-8 pb-10 pt-8"
              style={{ backgroundImage: `url('${item.background}')` }}
            >
              <h4 className="text-center text-5xl font-semibold leading-8">{item.title}</h4>
              <p className="mt-6 text-center text-5xl font-light leading-8">
                от <span className="font-semibold text-6xl">{item.priceFrom}</span>
              </p>
              <button className="mx-auto mt-10 flex h-14 items-center justify-center rounded-[5px] bg-[radial-gradient(ellipse_89.93%_82.48%_at_36.11%_34.00%,_#F2861F_0%,_#EB8121_19%,_#E57C22_39%,_#893F16_100%)] px-7 py-4 text-lg font-semibold leading-6 text-gray-200 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:brightness-110">
                Оставить заявку
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="works" className="mx-auto max-w-[1240px] px-6 pb-24 pt-24 lg:px-8">
        <h3 className="text-center text-4xl font-semibold leading-8">Наши работы</h3>
        <p className="mt-6 text-center text-base font-normal leading-3 text-gray-200">
          Посмотрите наши работы: оцените результат до и после покраски
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => selectWorkCategory(category)}
              className={`h-14 rounded-[5px] px-7 py-4 text-lg font-semibold leading-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition ${workCategory === category ? activeFilterClass : baseFilterClass}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-9 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <article className="overflow-hidden rounded border border-black bg-black/40">
            <img src={currentWork.before} alt={`До покраски (${currentWork.category})`} className="h-72 w-full object-cover" />
            <div className="flex h-12 items-center justify-center border-t border-black px-4">
              <p className="text-center text-lg font-semibold leading-4">ДО порошковой покраски</p>
            </div>
          </article>

          <button
            onClick={showNextWork}
            aria-label="Показать следующую пару"
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-black bg-black text-3xl font-semibold text-[#D9D9D9] transition hover:scale-105 hover:text-white"
          >
            ›
          </button>

          <article className="overflow-hidden rounded border border-black bg-black/40">
            <img src={currentWork.after} alt={`После покраски (${currentWork.category})`} className="h-72 w-full object-cover" />
            <div className="flex h-12 items-center justify-center border-t border-black px-4">
              <p className="text-center text-lg font-semibold leading-4">ПОСЛЕ порошковой покраски</p>
            </div>
          </article>
        </div>

        <h3 className="mt-12 text-center text-4xl font-semibold leading-8">Наши партнеры</h3>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={`partner-${category}`}
              onClick={() => setPartnerCategory(category)}
              className={`h-14 rounded-[5px] px-7 py-4 text-lg font-semibold leading-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition ${partnerCategory === category ? activeFilterClass : baseFilterClass}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPartners.map((partner) => (
            <article
              key={`${partner.name}-${partner.category}`}
              className="flex h-24 items-center gap-4 rounded border border-black bg-[#000000] px-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded bg-[#D9D9D9] text-sm font-semibold text-black">
                {partner.logo}
              </div>
              <div>
                <p className="text-lg font-semibold leading-6">{partner.name}</p>
                <p className="text-sm text-gray-400">{partner.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="order" className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-8">
        <h3 className="text-center text-4xl font-semibold leading-8">Закажите порошковую покраску</h3>
        <p className="mt-6 text-center text-base font-normal leading-3 text-gray-200">
          Отправьте фото изделия - узнаете точную цену и сроки покраски
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step} className="overflow-hidden rounded border border-black/80 bg-black/40">
              <div className="flex h-20 items-center justify-center">
                <p className="text-7xl font-light leading-4 text-gray-200">{index + 1}</p>
              </div>
              <div className="bg-[radial-gradient(ellipse_70.36%_68.52%_at_36.11%_34.00%,_#F2861F_0%,_#EB8121_19%,_#E57C22_39%,_#893F16_100%)] px-4 py-3">
                <p className="whitespace-pre-line text-center text-sm font-semibold leading-4 text-white">
                  {step}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-8">
        <h3 className="text-center text-4xl font-semibold leading-8">Контакты</h3>

        <div className="mt-8 grid gap-6 rounded border border-black p-5 lg:grid-cols-[350px_1fr]">
          <div className="rounded bg-[#0b0f14] p-5">
            <p className="text-center text-4xl font-semibold leading-9 text-gray-200">Профи Порошок</p>
            <p className="mt-8 text-center text-2xl font-normal leading-4 text-gray-200">
              г. Йошкар-Ола, ул. Кирова, 6
            </p>
            <div className="mt-8 space-y-6 text-2xl font-normal leading-4 text-gray-200">
              <p className="text-center">+7 (902) 124-33-69</p>
              <a className="block text-center underline hover:text-white" href="mailto:porochok12gmail.com">
                porochok12gmail.com
              </a>
              <a className="block text-center hover:text-white" href="https://t.me/DLPowder" target="_blank" rel="noreferrer">
                @DLPowder
              </a>
            </div>
          </div>

          <div className="h-80 overflow-hidden rounded border border-black">
            <iframe
              title="Карта 2ГИС — Профи Порошок"
              src="https://widgets.2gis.com/widget?type=firmsonmap&opts=%7B%22city%22%3A%22yoshkarola%22%2C%22search%22%3A%22%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%2C%206%22%7D"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-black/80 bg-[#070b10]">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-6 py-14 lg:grid-cols-[minmax(0,596px)_1fr] lg:items-end lg:px-8">
          <div className="relative rounded-[5px] border border-black p-12">
            <label className="block text-base font-medium leading-7 text-gray-200" htmlFor="order-name">
              Ваше имя*
            </label>
            <input
              id="order-name"
              type="text"
              className="mt-2 h-12 w-full rounded-[5px] border border-black bg-transparent px-4 text-base text-gray-100 outline-none placeholder:text-gray-400/80 focus:border-[#EB8121]"
            />

            <label className="mt-8 block text-base font-medium leading-7 text-gray-200" htmlFor="order-phone">
              Телефон*
            </label>
            <input
              id="order-phone"
              type="tel"
              className="mt-2 h-12 w-full rounded-[5px] border border-black bg-transparent px-4 text-base text-gray-100 outline-none placeholder:text-gray-400/80 focus:border-[#EB8121]"
            />

            <label className="mt-8 block text-base font-medium leading-7 text-gray-200" htmlFor="order-comment">
              Комменатрии
            </label>
            <textarea
              id="order-comment"
              rows={4}
              className="mt-2 w-full resize-none rounded-[5px] border border-black bg-transparent p-4 text-base text-gray-100 outline-none placeholder:text-gray-400/80 focus:border-[#EB8121]"
            />

            <label
              htmlFor="order-photo"
              className="mt-8 flex h-12 w-full cursor-pointer items-center rounded-[5px] border border-black bg-[radial-gradient(ellipse_70.36%_68.52%_at_36.11%_34.00%,_#F2861F_0%,_#EB8121_19%,_#E57C22_39%,_#893F16_100%)] px-5"
            >
              <span className="text-3xl font-medium leading-7 text-white">+</span>
              <span className="ml-6 text-base font-medium leading-7 text-gray-200">Прикрепить фото</span>
            </label>
            <input id="order-photo" type="file" className="hidden" />

            <button className="mt-10 inline-flex h-20 w-full items-center justify-center rounded-[5px] bg-[radial-gradient(ellipse_89.93%_82.48%_at_36.11%_34.00%,_#F2861F_0%,_#EB8121_19%,_#E57C22_39%,_#893F16_100%)] px-7 py-4 text-center text-4xl font-semibold leading-6 text-gray-200 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:brightness-110">
              Заказать расчет
            </button>
          </div>

          <div className="flex flex-col items-center gap-10 pb-2 lg:items-start">
            <a href="#hero" className="relative h-20 w-72">
              <div className="absolute left-[9px] top-[56.61px] h-10 w-20 origin-top-left -rotate-[47.35deg] bg-zinc-300" />
              <div className="absolute left-0 top-[56.61px] h-10 w-20 origin-top-left -rotate-[47.35deg] bg-zinc-300" />
              <div className="absolute left-[36px] top-[34px] flex h-10 w-10 items-center justify-center rounded border-4 border-black">
                <div className="h-7 w-6 bg-gradient-to-br from-stone-300 to-neutral-800" />
                <span className="absolute text-2xl font-black leading-4 text-gray-200">П</span>
              </div>
              <p className="absolute left-[85px] top-[44px] text-center text-xl font-bold leading-5 text-gray-200">
                ПРОФИ ПОРОШОК
              </p>
            </a>

            <p className="text-center text-xl font-medium leading-6 text-gray-200 lg:text-left">
              © 2026 ПОРФИ ПОРШОК
              <br />
              Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
