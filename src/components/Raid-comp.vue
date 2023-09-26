<template>
    <table>
      <!-- Добавляем две строки для танков -->
      <tr v-for="row in 2" :key="'tank-' + row">
        <td>Tank</td>
      </tr>
      <!-- Добавляем две строки для лекарей -->
      <tr v-for="row in 2" :key="'healer-' + row">
        <td>Healer</td>
      </tr>
      <!-- Добавляем шесть строк для бойцов -->
      <tr v-for="row in 6" :key="'fighter-' + row">
        <td>Fighter</td>
      </tr>
    </table>
  </template>
  
  <script>
  export default {
    // Компонент для таблицы с разными типами персонажей
  };
  </script>
  
  <style scoped>
  /* Стили для таблицы, если необходимо */
  </style>