import soldier from "../img/256305519.jpeg";
import yoda from "../img/141304833-removebg-preview.png";
import veider from "../img/256305530-removebg-preview.png";
import set5in1 from "../img/256305483-removebg-preview.png";
import set6in1 from "../img/256305498-removebg-preview.png";
import interactive from "../img/248052998-removebg-preview.png";

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
}

export const data: IServerdata[] = [
  {
    id: 1,
    title:
      "Малыш Йода Star Wars из сериала Звездные войны: Мандалорець (GWD85)",
    image: yoda,
    price: 1678,
    salePrice: 1449,
    country: "Ukraine",
    company: "rozetka",
    inStock: true,
    type: "single",
  },
  {
    id: 2,
    title:
      "Малыш Йода Star Wars из сериала Звездные войны: Мандалорець (GWD85)",
    image: yoda,
    price: 1599,
    salePrice: 1149,
    country: "Ukraine",
    company: "rozetka",
    inStock: true,
    type: "single",
  },
  {
    id: 3,
    title: "Фигурка Дарт Вейдер Звездные Войны Star Wars Dart Weider 10 см",
    image: veider,
    price: 399,
    salePrice: 319,
    country: "Ukraine",
    company: "funnyBunny",
    inStock: true,
    type: "single",
  },
  {
    id: 4,
    title:
      "Фигурка Имперский Штурмовик Звездные Войны Star Wars The Imperial Stormtrooper",
    image: soldier,
    price: 399,
    salePrice: 319,
    country: "China",
    company: "funnyBunny",
    inStock: true,
    type: "single",
  },
  {
    id: 5,
    title:
      'Набор фигурок 5в1 малыш Йода (МАНДОЛОРЕЦ) из сериала "ЗВЕЗДНЫЕ ВОИНЫ" - STAR WARS, MANDALORIAN',
    image: set5in1,
    price: 549,
    salePrice: 429,
    country: "China",
    company: "lucasArt",
    inStock: true,
    type: "set",
  },
  {
    id: 6,
    title:
      'Набор фигурок 6в1 малыш Йода (МАНДОЛОРЕЦ) из сериала "ЗВЕЗДНЫЕ ВОИНЫ" - STAR WARS, MANDALORIAN',
    image: set6in1,
    price: 549,
    salePrice: 479,
    country: "China",
    company: "lucasArt",
    inStock: true,
    type: "set",
  },
  {
    id: 9,
    title:
      "Интерактивный Малыш Йода Star Wars из сериала Звездные войны: Мандалорець 30 см (GWD87)",
    image: interactive,
    price: 4499,
    salePrice: 2999,
    country: "Germany",
    company: "lucasArt",
    inStock: false,
    type: "single",
  },
  {
    id: 8,
    title: 'Іграшка "Бейбі Йода" з к/ф "Зоряні війни" GWD85 (887961938814)',
    image: yoda,
    price: 1599,
    salePrice: 1599,
    country: "Germany",
    company: "lucasArt",
    inStock: true,
    type: "single",
  },
  {
    id: 7,
    title: 'Іграшка "Бейбі Йода" з к/ф "Зоряні війни" GWD85 (887961938814)',
    image: yoda,
    price: 1759,
    salePrice: 1671,
    country: "Vietnam",
    company: "lucasArt",
    inStock: true,
    type: "single",
  },
];
