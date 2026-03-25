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

function App() {
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
        <h3 className="text-center text-base font-semibold leading-6">Наши работы</h3>
      </section>
    </div>
  );
}

export default App;
