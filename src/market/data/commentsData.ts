export interface ICommentsData {
  productId: number;
  comments: {
    id: number;
    author: string;
    rate: number;
    comment: string;
  }[];
}

export const commentsData: ICommentsData[] = [
  {
    productId: 1,
    comments: [
      {
        id: 333,
        author: "Nata",
        rate: 5,
        comment:
          "Cutie! My daughter's delight when unpacking, it was a surprise. Now it is bored on the shelf. We smile at each other",
      },
      {
        id: 334,
        author: "Andrey Militsky",
        rate: 5,
        comment:
          "Initially, there was a very unpleasant and pungent smell of rubber, but after a few weeks it almost disappeared.",
      },
    ],
  },
  {
    productId: 2,
    comments: [
      {
        id: 335,
        author: "Anna",
        rate: 5,
        comment:
          "Nameless cutie! Sin buv in capture. The toy has already been worthy. One - no more than a temple, the quality of the cape - is released",
      },
      {
        id: 336,
        author: "Olga Shevchenko",
        rate: 4,
        comment:
          "I ordered my son, he liked it very much, now he sleeps with him. Good quality toy, I want to hug) delivery as always on top, thank you",
      },
    ],
  },
  {
    productId: 3,
    comments: [
      {
        id: 337,
        author: "Maxim Stepanyuk",
        rate: 5,
        comment: "Wife is delighted as a child)",
      },
      {
        id: 338,
        author: "Oleg Kondratiy",
        rate: 5,
        comment:
          "A classy little one, worthy of a mustache and grown up and small!",
      },
    ],
  },
  {
    productId: 4,
    comments: [
      { id: 339, author: "Lesya", rate: 5, comment: "Cool quality toy" },
      {
        id: 340,
        author: "Vladislav Khomenko",
        rate: 3,
        comment:
          "The toy itself is very cute and cool. Daughter is delighted. But the quality of the cape for such a price wants to be better. In a week, the threads climbed and need to be additionally “strengthened”.",
      },
      {
        id: 341,
        author: "Natalia Gurmaza",
        rate: 5,
        comment: "It's just sheer cuteness.",
      },
    ],
  },
  {
    productId: 5,
    comments: [
      {
        id: 342,
        author: "Irina Fedorak",
        rate: 5,
        comment:
          "Already satisfied with the purchase. Dear sweet and yakisna igrushka",
      },
      {
        id: 343,
        author: "Ksenia Shakhova",
        rate: 5,
        comment: "It's just a bomb toy",
      },
    ],
  },
  {
    productId: 6,
    comments: [
      {
        id: 344,
        author: "Evgeny Shkinder",
        rate: 5,
        comment: "cool toy",
      },
    ],
  },
  {
    productId: 9,
    comments: [
      {
        id: 345,
        author: "Ruslan Kolesnik",
        rate: 5,
        comment: "Cool to the touch",
      },
      {
        id: 346,
        author: "Dmitry Shubko",
        rate: 5,
        comment:
          "The toy is great. A child of 7 years old - everywhere with her to rush)))",
      },
      {
        id: 347,
        author: "Dmitry Efimov",
        rate: 5,
        comment: "TGreat toy. I liked it very much",
      },
    ],
  },
  {
    productId: 8,
    comments: [
      {
        id: 348,
        author: "Antonina Dotsenko",
        rate: 5,
        comment:
          "Bought as a gift for a fan of the series and this particular character.The main thing is to endure and not hand over before)",
      },
      {
        id: 349,
        author: "Perepelitsa Nikolay",
        rate: 5,
        comment: "Everything is great.Thank you.",
      },
      {
        id: 350,
        author: "Natalia Gurmaza",
        rate: 5,
        comment: "It's just sheer cuteness.",
      },
    ],
  },
  {
    productId: 7,
    comments: [
      {
        id: 351,
        author: "Bohdan Gavrylyshyn",
        rate: 5,
        comment: "Very good!!!!",
      },
      {
        id: 352,
        author: "Natalia Gurmaza",
        rate: 5,
        comment: "It's just sheer cuteness.",
      },
    ],
  },
];
