<template>
    <table>
        <tbody>
            <tr v-for="(character, index) in characters" :key="index">
            <td>{{ character.name }}</td>
            <td>{{ character.gearScore }}</td>
            <td>
                <!-- Вставляем иконку или текстовое представление роли -->
                <span v-if="character.role === 'Танк'">Танк</span>
                <span v-else-if="character.role === 'Лекарь'">Лекарь</span>
                <span v-else-if="character.role === 'Боец'">Боец</span>
                <!-- Добавьте другие роли по мере необходимости -->
            </td>
            </tr>
        </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: {
    characters: Array // Принимаем массив персонажей как свойство
    },
    // Компонент для таблицы с разными типами персонажей
  };
  </script>
  
  <style scoped>
  /* Стили для таблицы, если необходимо */
  </style>