import { useState } from 'react';

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
  {
    title: 'Металлопрокат',
    image: '/images/painted/metalloprokat.png',
    cardTitle: 'Металлопрокат',
    subtitle: 'Покраска металлопроката',
    priceFrom: 'от 700 ₽/м²'
  },
  {
    title: 'Ограждения\nи ворота',
    image: '/images/painted/fence-gate.png',
    cardTitle: 'Ограждения и ворота',
    subtitle: 'Покраска ограждений и ворот',
    priceFrom: 'от 1200 ₽'
  },
  {
    title: 'Автомобильные диски\nи мото детали',
    image: '/images/painted/wheels-moto.png',
    cardTitle: 'Автомобильные диски',
    subtitle: 'Покраска металлических изделий',
    priceFrom: 'от 1500 ₽'
  },
  {
    title: 'Мебель',
    image: '/images/painted/furniture.png',
    cardTitle: 'Металлическая мебель',
    subtitle: 'Покраска мебели и интерьерных деталей',
    priceFrom: 'от 1000 ₽'
  }
];

const processSteps = [
  'Бесплатно уточним\nстоимость',
  'Работаем четко\nпо срокам',
  'Оплата по факту\nготовности',
  'Даем полную\nгарантию'
];

const paintedItemDetails = {
  Металлопрокат: {
    subtitle: 'Покраска металлоизделий',
    priceFrom: 'от 600 ₽',
    categories: [
      [
        'Алюминий',
        'Ёмкости и банки\nиз нержавейки',
        'Заборы и ограждения',
        'Лестничные ограждения',
        'Металлические двери'
      ],
      [
        'Металлоконструкции\nдля мебельного оборудования',
        'Настилы, навесы и козырьки',
        'Нержавеющая сталь',
        'Профнастил',
        'Рекламные уличные\nметаллоконструкции'
      ],
      [
        'Строительные\nметаллоконструкции',
        'Трубы и трубопроводные\nсистемы',
        'Фурнитура, крепеж,\nметизы'
      ]
    ],
    gallery: [
      {
        title: 'Кронштейны кондиционера',
        color: 'Ral 9003 шагр, Ral 1015 шагр,\nRal 8017 шагр',
        image: '/images/painted/fence-gate.png'
      },
      {
        title: 'Металлокассеты',
        color: 'Ral 5012 гл.мат',
        image: '/images/painted/metalloprokat.png'
      },
      {
        title: 'Металлокассеты',
        color: 'Ral 6018 гл.мат',
        image: '/images/painted/wheels-moto.png'
      },
      {
        title: 'Решетки кондиционера',
        color: 'Ral 9003 гл.мат',
        image: '/images/painted/furniture.png'
      },
      {
        title: 'Перилла',
        color: 'Ral 7024 шарень',
        image: '/images/painted/metalloprokat.png'
      },
      {
        title: 'Монокосоур',
        color: 'Ral 1015 муар',
        image: '/images/painted/fence-gate.png'
      }
    ]
  },
  Мебель: {
    subtitle: 'Покраска металлоизделий',
    priceFrom: 'от 500 ₽',
    gallery: [
      {
        title: 'Стойка для верхней одежды',
        color: 'Ral 9005 муар',
        image: '/images/painted/furniture.png'
      },
      {
        title: 'Мебель для дома',
        color: 'Ral 9005 муар',
        image: '/images/painted/metalloprokat.png'
      },
      {
        title: 'Плинтус',
        color: 'Ral 9005 муар',
        image: '/images/painted/fence-gate.png'
      }
    ]
  }
};

function App() {
  const [selectedPaintedItem, setSelectedPaintedItem] = useState(null);
  const selectedDetails = selectedPaintedItem ? paintedItemDetails[selectedPaintedItem.title] : null;
  const itemSubtitle = selectedDetails?.subtitle || selectedPaintedItem?.subtitle;
  const itemPriceFrom = selectedDetails?.priceFrom || selectedPaintedItem?.priceFrom;
  const gallery = selectedDetails?.gallery;
  const categories = selectedDetails?.categories;

  if (selectedPaintedItem) {
    return (
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-16 text-gray-100"
        style={{ backgroundImage: "url('/backgrounds/bg-2.png')" }}
      >
        <div className="mx-auto max-w-[1240px]">
          <button
            onClick={() => setSelectedPaintedItem(null)}
            className="mb-10 inline-flex items-center rounded-md border border-white/45 bg-black/45 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition hover:border-white hover:bg-black/60"
          >
            ← Назад к списку
          </button>

          <h1 className="text-center text-4xl font-semibold leading-tight md:text-5xl">
            {selectedPaintedItem.title}
          </h1>
          <p className="mt-3 text-center text-base text-gray-300">{itemSubtitle}</p>

          {categories ? (
            <div className="mx-auto mt-8 max-w-[1150px]">
              <div className="grid gap-10 md:grid-cols-3">
                {categories.map((column) => (
                  <div key={column[0]} className="space-y-3 text-left">
                    {column.map((line, index) => (
                      <p
                        key={line}
                        className={`whitespace-pre-line text-xl leading-tight ${index % 2 === 0 ? 'font-semibold text-[#EB8121]' : 'text-gray-100'}`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {gallery?.map((card) => (
                  <article key={`${card.title}-${card.color}`} className="overflow-hidden rounded border border-white/35 bg-black/60">
                    <img src={card.image} alt={card.title} className="h-[250px] w-full object-cover" />
                    <div className="border-t border-white/25 bg-black/70 px-4 py-3 text-center">
                      <h2 className="text-4xl font-semibold leading-[1.05]">{card.title}</h2>
                      <p className="whitespace-pre-line text-4xl font-semibold leading-[1.05]">{card.color}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : gallery ? (
            <div className="mx-auto mt-10 grid max-w-[980px] gap-5 md:grid-cols-3">
              {gallery.map((card) => (
                <article key={card.title} className="overflow-hidden rounded border border-white/35 bg-black/60">
                  <img src={card.image} alt={card.title} className="h-[250px] w-full object-cover" />
                  <div className="border-t border-white/25 bg-black/70 px-4 py-3 text-center">
                    <h2 className="text-[34px] font-semibold leading-[1.05]">{card.title}</h2>
                    <p className="text-[34px] font-semibold leading-[1.05]">{card.color}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <article className="mx-auto mt-12 w-full max-w-[360px] overflow-hidden rounded border border-white/30 bg-black/55">
              <img src={selectedPaintedItem.image} alt={selectedPaintedItem.cardTitle} className="h-[250px] w-full object-cover" />
              <div className="flex h-16 items-center justify-center border-t border-white/25 px-4">
                <h2 className="text-center text-3xl font-semibold leading-tight">{selectedPaintedItem.cardTitle}</h2>
              </div>
            </article>
          )}

          <div className="mx-auto mt-14 w-full max-w-[700px] rounded border border-white/20 bg-black/40 px-8 py-10 text-center">
            <p className="text-5xl font-semibold leading-none">Цена</p>
            <p className="mt-4 text-5xl font-light leading-none">{itemPriceFrom}</p>
            <button className="mt-8 inline-flex h-14 items-center justify-center rounded-[5px] bg-[radial-gradient(ellipse_89.93%_82.48%_at_36.11%_34.00%,_#F2861F_0%,_#EB8121_19%,_#E57C22_39%,_#893F16_100%)] px-7 py-4 text-lg font-semibold leading-6 text-gray-200 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:brightness-110">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#06090d] text-gray-200 font-['Montserrat']">
      <section
        id="hero"
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/backgrounds/bg-1.png')"
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
              <img
                src="/images/painted/Group44.png"
                alt="Иконка срока выполнения"
                className="h-6 w-6 object-contain"
              />
              {facts.map((fact, index) => (
                <div key={fact} className="flex items-center gap-3">
                  <span>{fact}</span>
                  {index !== facts.length - 1 && (
                    <span className="hidden md:inline w-2 h-2 rounded-full bg-[#d47626]"></span>
                  )}
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
                  <h3 className="mt-7 whitespace-pre-line text-[32px] font-semibold leading-tight text-[#EB8121] md:text-[42px] xl:text-[30px]">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-7 max-w-[280px] text-lg font-normal leading-snug text-gray-100 md:text-[21px] xl:text-[18px]">
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
            <button
              key={item.title}
              onClick={() => setSelectedPaintedItem(item)}
              className="overflow-hidden rounded border border-white/25 bg-black/40 text-left transition hover:border-white/60 hover:brightness-110"
            >
              <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
              <div className="flex h-14 items-center justify-center border-t border-white/25 px-4">
                <h4 className="whitespace-pre-line text-center text-lg font-semibold leading-4">{item.title}</h4>
              </div>
            </button>
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
            <article
              key={step}
              className="rounded-[20px] border border-gray-300/60 bg-black/25 px-6 pb-9 pt-8 text-center"
            >
              <p className="text-8xl font-light leading-none text-gray-100">{index + 1}</p>
              <p className="mt-7 whitespace-pre-line text-[34px] font-semibold leading-tight text-[#EB8121] md:text-[38px] xl:text-[30px]">
                {step}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="oven-size"
        className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-8"
      >
        <div className="overflow-hidden rounded bg-black/30">
          <div className="px-6 py-10 md:px-10">
            <div>
              <h3 className="text-center text-4xl font-semibold leading-tight md:text-5xl">
                Габариты печи
              </h3>
              <p className="mt-4 text-center text-base text-gray-300 md:text-lg">
                Позволяет производить порошковую окраску габаритных металлоизделий
              </p>
            </div>
            <div className="mt-6 flex justify-center md:mt-8">
              <img
                src="/images/prices/container.png"
                alt=""
                aria-hidden="true"
                className="w-[88%] translate-x-[15%] object-contain object-center opacity-95 md:w-[72%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-8">
        <h3 className="text-center text-4xl font-semibold leading-8">Контакты</h3>

        <div className="mt-8 grid items-stretch gap-6 rounded-2xl bg-black/20 p-4 md:p-6 lg:grid-cols-[340px_1fr]">
          <div className="flex h-full flex-col rounded-xl bg-black/35 p-6 md:p-8">
            <p className="text-2xl font-semibold leading-tight text-gray-100 md:text-3xl">Профи Порошок</p>
            <p className="mt-4 text-base font-normal leading-snug text-gray-200 md:text-xl">г. Йошкар-Ола, ул. Кирова, 6</p>

            <div className="mt-6 space-y-3 text-lg leading-tight text-gray-200 md:text-2xl">
              <p>+7 (902) 124-33-69</p>
              <a className="block underline underline-offset-4 transition hover:text-white" href="mailto:porochok12@gmail.com">
                porochok12@gmail.com
              </a>
              <a className="block transition hover:text-white" href="https://t.me/DLPowder" target="_blank" rel="noreferrer">
                @DLPowder
              </a>
            </div>
          </div>

          <div className="h-[340px] overflow-hidden rounded-xl bg-black/40 md:h-auto md:min-h-[360px]">
            <iframe
              title="Карта Яндекс — Профи Порошок"
              src="https://yandex.ru/map-widget/v1/?ll=47.890458%2C56.631754&pt=47.890458%2C56.631754%2Cpm2rdm&z=17"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(3, 6, 10, 0.11) 0%, rgba(3,6,10,0.92) 100%), url('/backgrounds/bg-5.png')"
        }}
      >
        <div className="mx-auto flex max-w-[1240px] flex-col items-center px-6 pb-14 pt-8 lg:px-8">
          <div className="w-full max-w-[560px] rounded-[5px] border border-white/30 bg-black/15 p-10 md:p-12">
            <label className="block text-base font-medium leading-7 text-gray-200" htmlFor="order-name">
              Ваше имя*
            </label>
            <input
              id="order-name"
              type="text"
              className="mt-2 h-12 w-full rounded-[5px] border border-white/35 bg-transparent px-4 text-base text-gray-100 outline-none placeholder:text-gray-400/80 focus:border-[#EB8121]"
            />

            <label className="mt-8 block text-base font-medium leading-7 text-gray-200" htmlFor="order-phone">
              Телефон*
            </label>
            <input
              id="order-phone"
              type="tel"
              className="mt-2 h-12 w-full rounded-[5px] border border-white/35 bg-transparent px-4 text-base text-gray-100 outline-none placeholder:text-gray-400/80 focus:border-[#EB8121]"
            />

            <label className="mt-8 block text-base font-medium leading-7 text-gray-200" htmlFor="order-comment">
              Комментарии
            </label>
            <textarea
              id="order-comment"
              rows={4}
              className="mt-2 w-full resize-none rounded-[5px] border border-white/35 bg-transparent p-4 text-base text-gray-100 outline-none placeholder:text-gray-400/80 focus:border-[#EB8121]"
            />

            <label
              htmlFor="order-photo"
              className="mt-8 flex h-12 w-full max-w-[250px] cursor-pointer items-center rounded-[5px] border border-white/35 bg-transparent px-5"
            >
              <span className="text-3xl font-medium leading-7 text-[#EB8121]">+</span>
              <span className="ml-6 text-base font-medium leading-7 text-gray-200">Прикрепить фото</span>
            </label>
            <input id="order-photo" type="file" className="hidden" />

            <button className="mt-24 inline-flex h-16 w-full items-center justify-center rounded-[5px] bg-[radial-gradient(ellipse_89.93%_82.48%_at_36.11%_34.00%,_#F2861F_0%,_#EB8121_19%,_#E57C22_39%,_#893F16_100%)] px-7 py-4 text-center text-4xl font-semibold leading-6 text-gray-200 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:brightness-110">
              Заказать расчет
            </button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-8 pb-2">
            <a href="#hero" className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded border-2 border-gray-200/80">
                <div className="absolute inset-[5px] rounded-sm border border-gray-200/80" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-black leading-4 text-gray-200">
                  П
                </span>
              </div>
              <p className="text-center text-xl font-bold leading-5 text-gray-200">
                ПРОФИ ПОРОШОК
              </p>
            </a>

            <p className="text-center text-xl font-medium leading-7 text-gray-200">
              © 2026 ПРОФИ ПОРОШОК
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
