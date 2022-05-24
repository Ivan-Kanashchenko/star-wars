import soldier from "../img/256305519.jpeg";
import yoda from "../img/141304833-removebg-preview.png";
import veider from "../img/256305530-removebg-preview.png";
import set5in1 from "../img/256305483-removebg-preview.png";
import set6in1 from "../img/256305498-removebg-preview.png";
import interactive from "../img/248052998-removebg-preview.png";

interface serverdata {
  id: number;
  title: string;
  image: string;
  price: number;
  salePrice: number;
  inStock: boolean;
}

export const data: serverdata[] = [
  {
    id: 1,
    title:
      "Малыш Йода Star Wars из сериала Звездные войны: Мандалорець (GWD85)",
    image: yoda,
    price: 1678,
    salePrice: 1449,
    inStock: true,
  },
  {
    id: 2,
    title:
      "Малыш Йода Star Wars из сериала Звездные войны: Мандалорець (GWD85)",
    image: yoda,
    price: 1599,
    salePrice: 1149,
    inStock: true,
  },
  {
    id: 3,
    title: "Фигурка Дарт Вейдер Звездные Войны Star Wars Dart Weider 10 см",
    image: veider,
    price: 399,
    salePrice: 319,
    inStock: true,
  },
  {
    id: 4,
    title:
      "Фигурка Имперский Штурмовик Звездные Войны Star Wars The Imperial Stormtrooper",
    image: soldier,
    price: 399,
    salePrice: 319,
    inStock: true,
  },
  {
    id: 5,
    title:
      'Набор фигурок 5в1 малыш Йода (МАНДОЛОРЕЦ) из сериала "ЗВЕЗДНЫЕ ВОИНЫ" - STAR WARS, MANDALORIAN',
    image: set5in1,
    price: 549,
    salePrice: 429,
    inStock: true,
  },
  {
    id: 6,
    title:
      'Набор фигурок 6в1 малыш Йода (МАНДОЛОРЕЦ) из сериала "ЗВЕЗДНЫЕ ВОИНЫ" - STAR WARS, MANDALORIAN',
    image: set6in1,
    price: 549,
    salePrice: 479,
    inStock: true,
  },
  {
    id: 9,
    title:
      "Интерактивный Малыш Йода Star Wars из сериала Звездные войны: Мандалорець 30 см (GWD87)",
    image: interactive,
    price: 4499,
    salePrice: 2999,
    inStock: false,
  },
  {
    id: 8,
    title: 'Іграшка "Бейбі Йода" з к/ф "Зоряні війни" GWD85 (887961938814)',
    image: yoda,
    price: 1599,
    salePrice: 1599,
    inStock: true,
  },
  {
    id: 7,
    title: 'Іграшка "Бейбі Йода" з к/ф "Зоряні війни" GWD85 (887961938814)',
    image: yoda,
    price: 1759,
    salePrice: 1671,
    inStock: true,
  },
];
