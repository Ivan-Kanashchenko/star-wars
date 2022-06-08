import interactive from "../img/248052998-removebg-preview.png";
import set5in1 from "../img/256305483-removebg-preview.png";
import set6in1 from "../img/256305498-removebg-preview.png";
import soldier from "../img/256305519.jpeg";
import veider from "../img/256305530-removebg-preview.png";
import yoda from "../img/141304833-removebg-preview.png";

type Parameters = {
  heigth: string;
  width: string;
  weight: string;
};

export interface IServerdata {
  id: number;
  title: string;
  image: string;
  price: number;
  salePrice: number;
  country: string;
  company: string;
  inStock: boolean;
  type: string;
  description: string;
  characteristics: Parameters;
}

export const productsData: IServerdata[] = [
  {
    id: 1,
    title:
      "Малыш Йода Star Wars из сериала Звездные войны: Мандалорець (GWD85)",
    image: yoda,
    price: 1678,
    salePrice: 1449,
    country: "Ukraine",
    company: "Rozetka",
    inStock: true,
    type: "single",
    characteristics: {
      heigth: "8 sm",
      width: "4 sm",
      weight: "200g",
    },
    description:
      "Эту чрезвычайно мягкую на ощупь 28-сантиметровую игрушку так и хочется обнимать снова и снова. Маленький ушастый герой будто сошел с сериала-спин-офф «Звездные войны» под названием «Мандалорець».",
  },
  {
    id: 2,
    title:
      "Малыш Йода Star Wars из сериала Звездные войны: Мандалорець (GWD85)",
    image: yoda,
    price: 1599,
    salePrice: 1149,
    country: "Ukraine",
    company: "Rozetka",
    inStock: true,
    type: "single",
    characteristics: {
      heigth: "9 sm",
      width: "5 sm",
      weight: "300 g",
    },
    description:
      "Эту чрезвычайно мягкую на ощупь 28-сантиметровую игрушку так и хочется обнимать снова и снова. Маленький ушастый герой будто сошел с сериала-спин-офф «Звездные войны» под названием «Мандалорець».",
  },
  {
    id: 3,
    title: "Фигурка Дарт Вейдер Звездные Войны Star Wars Dart Weider 10 см",
    image: veider,
    price: 399,
    salePrice: 319,
    country: "Ukraine",
    company: "Funny Bunny",
    inStock: true,
    type: "single",
    characteristics: {
      heigth: "6 sm",
      width: "4 sm",
      weight: "100 g",
    },
    description: "",
  },
  {
    id: 4,
    title:
      "Фигурка Имперский Штурмовик Звездные Войны Star Wars The Imperial Stormtrooper",
    image: soldier,
    price: 399,
    salePrice: 319,
    country: "China",
    company: "Funny Bunny",
    inStock: true,
    type: "single",
    characteristics: {
      heigth: "6 sm",
      width: "4 sm",
      weight: "100 g",
    },
    description: "",
  },
  {
    id: 5,
    title:
      'Набор фигурок 5в1 малыш Йода (МАНДОЛОРЕЦ) из сериала "ЗВЕЗДНЫЕ ВОИНЫ" - STAR WARS, MANDALORIAN',
    image: set5in1,
    price: 549,
    salePrice: 429,
    country: "China",
    company: "LucasArts",
    inStock: true,
    type: "set",
    characteristics: {
      heigth: "6 sm",
      width: "3 sm",
      weight: "100 g",
    },
    description:
      'Набор фигурок 5в1 Малыш Йода (Мандолорец) из сериала "Звездные воины" - Star Wars, Mandalorian,Высота: 6 см Количество: 5 шт',
  },
  {
    id: 6,
    title:
      'Набор фигурок 6в1 малыш Йода (МАНДОЛОРЕЦ) из сериала "ЗВЕЗДНЫЕ ВОИНЫ" - STAR WARS, MANDALORIAN',
    image: set6in1,
    price: 549,
    salePrice: 479,
    country: "China",
    company: "LucasArts",
    inStock: true,
    type: "set",
    characteristics: {
      heigth: "6 sm",
      width: "3 sm",
      weight: "100 g",
    },
    description:
      'Набор из сериала "Звездные войны/Star Wars" высотой 6 см из ПВХ без точек артикуляций',
  },
  {
    id: 9,
    title:
      "Интерактивный Малыш Йода Star Wars из сериала Звездные войны: Мандалорець 30 см (GWD87)",
    image: interactive,
    price: 4499,
    salePrice: 2999,
    country: "Germany",
    company: "LucasArts",
    inStock: false,
    type: "single",
    characteristics: {
      heigth: "30 sm",
      width: "40 sm",
      weight: "500 g",
    },
    description:
      "Эту чрезвычайно мягкую на ощупь 28-сантиметровую игрушку так и хочется обнимать снова и снова. Маленький ушастый герой будто сошел с сериала-спин-офф «Звездные войны» под названием «Мандалорець».",
  },
  {
    id: 8,
    title: 'Іграшка "Бейбі Йода" з к/ф "Зоряні війни" GWD85 (887961938814)',
    image: yoda,
    price: 1599,
    salePrice: 1599,
    country: "Germany",
    company: "LucasArts",
    inStock: true,
    type: "single",
    characteristics: {
      heigth: "9 sm",
      width: "5 sm",
      weight: "300 g",
    },
    description:
      "Эту чрезвычайно мягкую на ощупь 28-сантиметровую игрушку так и хочется обнимать снова и снова. Маленький ушастый герой будто сошел с сериала-спин-офф «Звездные войны» под названием «Мандалорець».",
  },
  {
    id: 7,
    title: 'Іграшка "Бейбі Йода" з к/ф "Зоряні війни" GWD85 (887961938814)',
    image: yoda,
    price: 1759,
    salePrice: 1671,
    country: "Vietnam",
    company: "LucasArts",
    inStock: true,
    type: "single",
    characteristics: {
      heigth: "9 sm",
      width: "5 sm",
      weight: "300 g",
    },
    description:
      "Эту чрезвычайно мягкую на ощупь 28-сантиметровую игрушку так и хочется обнимать снова и снова. Маленький ушастый герой будто сошел с сериала-спин-офф «Звездные войны» под названием «Мандалорець».",
  },
];
