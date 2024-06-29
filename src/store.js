// src/store.js
import { reactive } from 'vue';

export const store = reactive({
  photos: [
    { title: 'Фото 1', url: 'https://cveti32.ru/wp-content/uploads/2022/12/zelenye-cvety-scaled.jpg' },
    { title: 'Фото 2', url: 'https://mykaleidoscope.ru/uploads/posts/2021-10/1635290454_5-mykaleidoscope-ru-p-krasivie-krupnie-tsveti-tsveti-5.jpg' },
  ],
  addPhoto(photo) {
    this.photos.push(photo);
  },
});
