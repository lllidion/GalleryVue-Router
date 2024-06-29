<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="pink--text">Добавить Фото</h1>
        <v-text-field v-model="title" label="Название" color="primary"></v-text-field>
        <v-text-field v-model="url" label="URL Фото" color="primary"></v-text-field>
        <v-btn @click="addPhoto" color="primary" dark>Добавить</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { store } from '../store';

export default {
  setup() {
    const title = ref('');
    const url = ref('');

    const addPhoto = () => {
      if (title.value && url.value) {
        store.addPhoto({ title: title.value, url: url.value });
        title.value = '';
        url.value = '';
        alert('Фото добавлено');
      } else {
        alert('Заполните все поля');
      }
    };

    return { title, url, addPhoto };
  },
};
</script>

<style>
.pink--text {
  color: #E91E63 !important;
}
</style>
