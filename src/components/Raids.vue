<template>
   <button @click="updateCharacters()" class="player-form-button">Обновить</button>
  <div class="raid-form">
    <!-- Добавляем шесть таблиц, каждая из которых использует компонент Table.vue -->
    <table-component
      v-for="(raid, index) in raids"   
      :key="index"
      :raid="raid"                      
      :class="'table-component ' + raid.raidName" ></table-component>
  </div>
</template>

<script>
import TableComponent from './Raid-comp.vue';
import { raids } from '../router/json-raid-parser.js'; // Импортируйте данные о рейдах
import PlayerForm from './Player-form.vue'; // Импортируйте компонент PlayerForm

export default {
  components: {
    TableComponent,
    PlayerForm
  },
  props:{
    characters: Array
  },
  data() {
    return {
      raids: raids.slice(0, 6) // Получаем первые шесть рейдов из массива
    };
  },
  methods:{
    updateCharacters() {
    // Получаем персонажей из хранилища Vuex
    const characters = this.$store.getters.getCharacters;
    // Перебираем рейды
    characters.forEach(character => {
      // Сначала обнуляем доступные рейды для текущего персонажа
      character.availableRaids = [];
      // Перебираем рейды
      this.raids.forEach(raid => {
        const availableSlots = 10 - raid.characters.length;
        let availableRaidSlots = 2;
        if('Боец' === character.role) availableRaidSlots = 6;
        const RoleInRaid = raid.characters.filter(char => char.role === character.role).length;
        console.log("RoleInRaid:", RoleInRaid);
        // Проверяем, есть ли место в рейде для персонажа данной роли
        if ((RoleInRaid < availableRaidSlots && availableSlots > 0)  ) {
          // Добавляем рейд в доступные рейды для персонажа
          character.availableRaids.push(raid);
        }
      });
      
    });
  }
  }

};
</script> 

<style>
.raid-form {
  background-color: #f0f0f0;
  color: rgb(51, 51, 51);
  border-radius: 8px;
  font-family: Arial, sans-serif;
  margin-left: 50px;
  width: 70%; /* Устанавливаем ширину формы на 70% экрана */
  float: left; /* Выравниваем форму в левой части экрана */
  overflow: auto; /* Добавляем прокрутку, если содержимое выходит за границы */
}

.table-component {
  width: 100%;
}

.table-component table {
  width: 100%; /* Заполняем всю доступную ширину родительского блока */
  border-collapse: collapse; /* Убираем пробелы между ячейками таблицы */
}

.table-component th,
.table-component td {
  text-align: left; /* Выравнивание текста в ячейках */
  padding: 10px; /* Внутренний отступ для ячеек */
}

.table-component th {
  background-color: #f0f0f0; /* Фон заголовков таблицы */
  font-weight: bold; /* Жирный шрифт для заголовков */
}

.table-component tr {
  height: 50px; /* Фиксированная высота строк */
  vertical-align: top; /* Вертикальное выравнивание сверху */
}

/* Стили для ячеек с разными ролями */
.table-component .tank {
  background-color: #ffcccc; /* Цвет для танков */
}

.table-component .healer {
  background-color: #ccffcc; /* Цвет для лекарей */
}

.table-component .dps {
  background-color: #ccccff; /* Цвет для бойцов */
}
</style>
