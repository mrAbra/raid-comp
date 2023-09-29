<template>
  <div class="raid-info">
    <!-- Пройдемся по массиву рейдов -->
    <h3>{{ raid.raidName }}</h3>
    <div class="raid-content">
      <table class="minimalist-table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Очки снаряжения</th>
            <th>Роль</th>
          </tr>
        </thead>
        <tbody>
          <!-- Пройдемся по массиву персонажей с фильтрацией по ролям -->
          <tr v-for="(character, characterIndex) in filteredCharacters" :key="characterIndex">
            <td>{{ character ? character.characterName : '' }}</td>
            <td>{{ character ? character.gearScore : '' }}</td>
            <td>{{ character ? character.role : '' }}</td>
          </tr>
          <!-- Добавим пустые строки для недостающих ролей -->
          <tr v-for="(missingRole, missingRoleIndex) in missingRoles" :key="'missing-' + missingRoleIndex">
            <td></td>
            <td></td>
            <td class="missing-role">{{ missingRole }}</td>
          </tr>
        </tbody>
      </table>
      <div class="raid-rating">
        <h5>Оценка рейда</h5>
        <p>Заполненность рейда: {{ raidFillRate }}/10</p>
        <p>Средний уровень снаряжения: {{ averageGearScore }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    raid: Object
  },
  computed: {
    // Вычисляемое свойство, которое фильтрует персонажей по ролям
    filteredCharacters() {
      const characters = this.raid.characters;
      const tanks = characters.filter(character => character.role === 'Танк').slice(0, 2);
      const healers = characters.filter(character => character.role === 'Лекарь').slice(0, 2);
      const dps = characters.filter(character => character.role === 'Боец').slice(0, 6);
      return [...tanks, ...healers, ...dps];
    },
    // Вычисляемое свойство, которое возвращает массив недостающих ролей
    missingRoles() {
      const characters = this.raid.characters;
      const tanksCount = characters.filter(character => character.role === 'Танк').length;
      const healersCount = characters.filter(character => character.role === 'Лекарь').length;
      const dpsCount = characters.filter(character => character.role === 'Боец').length;
      const missingTanks = Math.max(2 - tanksCount, 0);
      const missingHealers = Math.max(2 - healersCount, 0);
      const missingDps = Math.max(6 - dpsCount, 0);
      const missingRoles = [];
      for (let i = 0; i < missingTanks; i++) {
        missingRoles.push('Танк');
      }
      for (let i = 0; i < missingHealers; i++) {
        missingRoles.push('Лекарь');
      }
      for (let i = 0; i < missingDps; i++) {
        missingRoles.push('Боец');
      }
      return missingRoles;
    },
    // Вычисляемое свойство, которое возвращает заполненность рейда от 1 до 10
    raidFillRate() {
      return this.filteredCharacters.length;
    },
    // Вычисляемое свойство, которое возвращает средний уровень снаряжения персонажей рейда
    averageGearScore() {
      if (this.filteredCharacters.length === 0) {
        return 0;
      }
      const totalGearScore = this.filteredCharacters.reduce((sum, character) => sum + character.gearScore, 0);
      return Math.round(totalGearScore / this.filteredCharacters.length);
    }
  }
};
</script>

<style scoped>
/* Стили для минималистичной таблицы */
.minimalist-table {
  width: 100%;
  border-collapse: collapse;
  padding: 20px;
  min-height: 500px;
}

.minimalist-table th,
.minimalist-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.minimalist-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

/* Уберем границы для первой колонки и выровняем текст по центру */
.minimalist-table th:first-child,
.minimalist-table td:first-child {
  border-left: none;
  text-align: center;
}

/* Уберем границы для последней колонки и выровняем текст по центру */
.minimalist-table th:last-child,
.minimalist-table td:last-child {
  border-right: none;
  text-align: center;
}

/* Стили для недостающих ролей */

</style>

<style scoped>
/* Стили для контейнера с содержимым рейда (таблица и оценка рейда) */
.raid-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
/* Стили для минималистичной таблицы */
.minimalist-table {
  flex-basis: 40%; /* Занимает 40% ширины */
  border-collapse: collapse;
  padding: 20px;
  min-height: 500px;
}

/* Стили для контейнера с оценкой рейда */
.raid-rating {
  flex-basis: 60%; /* Занимает 60% ширины */
  text-align: center;
}

.minimalist-table th,
.minimalist-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.minimalist-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

/* Уберем границы для первой колонки и выровняем текст по центру */
.minimalist-table th:first-child,
.minimalist-table td:first-child {
  border-left: none;
  text-align: center;
}

/* Уберем границы для последней колонки и выровняем текст по центру */
.minimalist-table th:last-child,
.minimalist-table td:last-child {
  border-right: none;
  text-align: center;
}

</style>
