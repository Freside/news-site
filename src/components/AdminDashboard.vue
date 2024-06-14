<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Панель администратора</h1>
    <form @submit.prevent="addNews">
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Заголовок</label>
        <input v-model="title" type="text" class="w-full p-2 border border-gray-300 rounded">
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Содержание</label>
        <textarea v-model="content" class="w-full p-2 border border-gray-300 rounded"></textarea>
      </div>
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Добавить новость</button>
    </form>
    <div class="mt-8">
      <h2 class="text-2xl font-bold mb-4">Список новостей</h2>
      <div v-for="news in newsList" :key="news.id" class="mb-6">
        <h3 class="text-xl font-semibold">{{ news.title }}</h3>
        <p>{{ news.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminDashboard',
  data() {
    return {
      title: '',
      content: '',
      newsList: [
        { id: 1, title: 'Новость 1', content: 'Содержание новости 1' },
        { id: 2, title: 'Новость 2', content: 'Содержание новости 2' },
      ],
    };
  },
  methods: {
    addNews() {
      const newNews = {
        id: this.newsList.length + 1,
        title: this.title,
        content: this.content,
      };
      this.newsList.push(newNews);
      this.title = '';
      this.content = '';
    },
  },
});
</script>

<style scoped>
/* Дополнительные стили, если нужно */
</style>
