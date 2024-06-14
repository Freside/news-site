<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Вход для администратора</h1>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Логин</label>
        <input v-model="username" type="text" class="w-full p-2 border border-gray-300 rounded">
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Пароль</label>
        <input v-model="password" type="password" class="w-full p-2 border border-gray-300 rounded">
      </div>
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Войти</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AdminLogin',
  setup() {
    const router = useRouter();
    const username = ref<string>(''); // Указываем тип string для username
    const password = ref<string>(''); // Указываем тип string для password

    const login = () => {
      if (username.value === 'admin' && password.value === 'password') {
        router.push('/admin/dashboard');
      } else {
        alert('Неверные учетные данные');
      }
    };

    return {
      username,
      password,
      login,
    };
  },
});
</script>

<style scoped>
/* Дополнительные стили, если нужно */
</style>
