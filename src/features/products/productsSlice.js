import { createSlice, nanoid } from "@reduxjs/toolkit";
import { shuffle } from "../../utils/common"; 

const initialState = {
  list: [
   
    {
      id: nanoid(),
      name: "Белая футболка",
      description: "Футболка женская оверсайз однотонная прямого кроя с удлиненным рукавом и круглым вырезом под горло является универсальным, стильным и одновременно удобным элементом гардероба каждой женщины. 100% хлопок",
      price: 1000,
      category: { id: "1", name: "Футболки" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-z/wc1000/6702325379.jpg",
      sizes: ["S","L","XL"],
      
    },
    {
      id: nanoid(),
      name: "Черная футболка",
      description: "  Майка имеет короткий рукав и круглую горловину, что делает её универсальной и подходящей для любого образа. Она отлично подойдет как для повседневного ношения, так и для офиса или деловых встреч. Однотонный трикотажный материал придаёт изделию стильный и модный вид, идеально сочетающийся с пиджаком или спортивной одеждой.",
      price: 604,
      category: { id: "1", name: "Футболки" }, 
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-1-o/wc1000/7241462304.jpg",
      sizes: ["L","XL"],
      
    },
    {
      id: nanoid(),
      name: "Зеленая футболка",
      description: "Универсальная модель свободного прямого кроя в меру широкая, можно сказать умеренный оверсайз, не приталенная, она свободно ложится по фигуре, что позволяет скрыть широкую талию, с коротким рукавом и v-образным вырезом горловины делает эту вещь удобной и подходящей для любой женской фигуры. ",
      price: 1000,
      category: { id: "1", name: "Футболки" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-1-6/wc1000/7027992042.jpg",
      sizes: ["M", "L","XL"],
      
    },
    {
      id: nanoid(),
      name: "Черная блуза",
      description: "Наша блузка прекрасно сочетается с юбками, брюками и джинсами, что позволяет создавать разнообразные образы подходящие для различных ситуаций.",
      price: 418,
      category: { id: "2", name: "Блузки" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-1-6/wc1000/7083680802.jpg",
      sizes: ["M","L", "XL"]
    },
   
    {
      id: nanoid(),
      name: "Синяя блуза",
      description: "Наша блузка прекрасно сочетается с юбками, брюками и джинсами, что позволяет создавать разнообразные образы подходящие для различных ситуаций.",
      price: 300,
      category: { id: "2", name: "Блузки" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-k/wc1000/6857180768.jpg",
      sizes: ["S", "M", "L"]
    },
    {
      id: nanoid(),
      name: "Зеленая блуза",
      description: "Наша блузка прекрасно сочетается с юбками, брюками и джинсами, что позволяет создавать разнообразные образы подходящие для различных ситуаций.",
      price: 500,
      category: { id: "2", name: "Блузки" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-f/wc1000/6853546059.jpg",
      sizes: ["S", "M", "XL"]
    },
    {
      id: nanoid(),
      name: "Черный худи",
      description: "Пайта из мягкого трикотажа, она окружает вас теплом и уютом благодаря внутреннему начесу.",
      price: 1680,
      category: { id: "3", name: "Кофты" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-1-t/wc1000/6973060205.jpg",
      sizes: ["S", "L", "XL"]
    },
    {
      id: nanoid(),
      name: "Серый худи",
      description: "Пайта из мягкого трикотажа, она окружает вас теплом и уютом благодаря внутреннему начесу.",
      price: 1680,
      category: { id: "3", name: "Кофты" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-1-6/wc1000/7310071590.jpg",
      sizes: ["S", "M", "L"]
    },
    {
      id: nanoid(),
      name: "Розовая кофта",
      description: "Сшитый из мягкой хлопковой ткани с волокнами лайкры, эластичный трикотажный лонг приятен к телу, не раздражает кожу и не сковывает движения.",
      price: 839,
      category: { id: "3", name: "Кофты" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-1-9/wc1000/7099432641.jpg",
      sizes: ["M", "L", "XL"]
    },
    {
      id: nanoid(),
      name: "Красное платье",
      description: "Платье длинное вечернее — идеальный выбор для тех, кто ценит стиль и комфорт в праздничные моменты. Это женское платье с воротником лодочка и длинными рукавами создает элегантный силуэт, подчеркивая достоинства фигуры и скрывая недостатки. Его приталенный фасон облегает фигуру, а красивая и оригинальная драпировка делает модель особенно привлекательной.",
      price: 800,
      category: { id: "4", name: "Платья" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-1-5/wc1000/7313782505.jpg",
      sizes: ["M", "L", "XL"]
    },
    {
      id: nanoid(),
      name: "Бордовое платье",
      description: "Бордовое женское платье оверсайз выполнено из вязаного трикотажа с добавлением шерсти. Шерсть отличается естественным теплом и невероятной мягкостью. Oversize-крой, длинные рукава и изящные разрезы создают расслабленный образ.",
      price: 2054,
      category: { id: "4", name: "Платья" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-1-3/wc1000/7114581795.jpg",
      sizes: ["S", "M", "L"]
    },
    {
      id: nanoid(),
      name: "Черное платье",
      description: "Женственный силуэт легко формируется благодаря добавлению эластана в состав трикотажа и четко выверенным лекалам. Эластичность платья дает моделирующий эффект утяжки и не просвечивает. Вы почувствуете легкость и уверенность в движении. Особенно вас порадует износостойкость любимого наряда, которое сохраняет форму и цвет даже после много численных стирок.",
      price: 2000,
      category: { id: "4", name: "Платья" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-1-k/wc1000/7299023996.jpg",
      sizes: ["S", "M", "XL"]
    },
    {
      id: nanoid(),
      name: "Голубая рубашка",
      description: "Эффектная и универсальная рубашка женская оверсайз идеальная современная модель, которую можно носить на учебу и на работу в офис, на прогулку, романтическое свидание и встречу с подругами, на более торжественные поводы или просто на каждый день.",
      price: 2330,
      category: { id: "5", name: "Рубашки" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-1-m/wc1000/7045658518.jpg",
      sizes: ["M", "L", "XL"]
    },
    {
      id: nanoid(),
      name: "Зеленая рубашка",
      description: "Рубашка женская оверсайз oversize классическая блузка с добавлением хлопка - идеальное решение для тех, кто ищет универсальную вещь для всех случаев жизни. Рубашка отлично подойдет как для деловых встреч, так и для повседневного образа.",
      price: 1702,
      category: { id: "5", name: "Рубашки" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-1-r/wc1000/7118110575.jpg",
      sizes: ["S", "M", "XL"]
    },
    {
      id: nanoid(),
      name: "Розова рубашка",
      description: "Женская рубашка оверсайз выполнена из натурального хлопка. Воротник-стойка и интересный спущенный рукав-фонарик с изящными манжетами выгодно выделяют рубашку для женщин среди других моделей. Благодаря свободному крою однотонная рубашка подходит женщинам с любым типом фигуры. Хлопковая дышащая ткань батист приятна к телу, а небольшое количество эластана в составе позволяет ткани слегка растягиваться и легко разглаживаться.",
      price: 1337,
      category: { id: "5", name: "Рубашки" },
      imageUrl: "https://ir-3.ozone.ru/s3/multimedia-3/wc1000/6825472239.jpg",
      sizes: ["S", "M", "XL"]
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByPrice: (state, { payload }) => {
      state.filtered = state.list.filter(({ price }) => price < payload);
    },
    getRelatedProducts: (state, { payload }) => {
      const list = state.list.filter(({ category: { id } }) => id === payload);
      state.related = shuffle(list);
    },
    addProduct: (state, action) => {
      state.list.push({ ...action.payload, id: nanoid() });
    },
    deleteProduct: (state, action) => {
      state.list = state.list.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const { id, ...updates } = action.payload;
      state.list = state.list.map((product) =>
        product.id === id ? { ...product, ...updates } : product
      );
    },
  },
});

export const {
  filterByPrice,
  getRelatedProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = productsSlice.actions;

export default productsSlice.reducer;