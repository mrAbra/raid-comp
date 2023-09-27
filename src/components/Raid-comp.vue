<template>
    <div>
      <!-- Пройдемся по массиву рейдов -->
        <h2>{{ raid.raidName }}</h2>
        <table>
          <tbody>
            <!-- Пройдемся по массиву персонажей в текущем рейде -->
            <tr v-for="(character, characterIndex) in raid.characters" :key="characterIndex">
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
    </div>
  </template>
  
  <script>
 
  export default {
    props:{
        raid: Object,
    },
    data() {
      return {
        };
    },
  };
  </script>
  
  <style scoped>
  /* Стили для таблицы, если необходимо */
  </style>