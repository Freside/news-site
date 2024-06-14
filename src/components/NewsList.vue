<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Новости</h1>
    <div v-for="news in newsList" :key="news.id" class="mb-6">
      <h2 class="text-2xl font-semibold">{{ news.title }}</h2>
      <p>{{ news.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewsList',
  data() {
    return {
      newsList: [
        { id: 1, title: 'Новость 1', content: 'Содержание новости 1' },
        { id: 2, title: 'Новость 2', content: 'Содержание новости 2' },
      ],
    };
  },
});
</script>

<style scoped>
/* Дополнительные стили, если нужно */
</style>
