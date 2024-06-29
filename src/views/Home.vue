<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="pink--text">Галерея Фото</h1>
        <v-list>
          <v-list-item
            v-for="(photo, index) in store.photos"
            :key="index"
            class="mb-4"
          >
            <v-img :src="photo.url" aspect-ratio="1.75" class="rounded"></v-img>
            <v-list-item-content>
              <span class="photo-title">{{ photo.title }}</span>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { store } from '../store';

export default {
  setup() {
    return { store };
  },
};
</script>

<style>
.pink--text {
  color: #E91E63 !important;
}

.v-img {
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.photo-title {
  font-size: 24px;
  font-weight: bold;
  color: #E91E63;
  display: block;
  margin-top: 10px;
}
</style>
