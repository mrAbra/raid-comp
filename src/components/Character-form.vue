<template>
    <div>
      <form @submit.prevent="submitCharacter" class="character-form">
        <span class="close-button" @click="closeForm">×</span>
        <label for="characterName">Имя персонажа:</label>
        <input type="text" id="characterName" v-model="characterName" required>
        <br>
        <label for="gearScore">Gear Score:</label>
        <input type="number" id="gearScore" v-model.number="gearScore" required>
        <br>
        <label for="class">Класс:</label>
        <select id="class" v-model="selectedClass" required>
            <option value="warrior">Воин</option>
            <option value="paladin">Паладин</option>
            <option value="deathKnigth">Рыцарь смерти</option>
            <option value="shaman">Шаман</option>
            <option value="hunter">Охотник</option>
            <option value="rogue">Разбойник</option>
            <option value="druid">Разбойник</option>
            <option value="mage">Маг</option>
            <option value="priest">Жрец</option>
            <option value="warlock">Чернокнижник</option>
        </select>
        <br>
        <label for="specialization">Специализация:</label>
        <select id="specialization" v-model="selectedSpecialization" required>
            <option value="tank">Танк</option>
            <option value="healer">Лекарь</option>
            <option value="damage">Урон</option>
        </select>
        <label for="cloak">Есть плащ?</label>
        <input type="checkbox" id="cloak" v-model="hasCloak" required>
        <label for="hasOffspec">Есть оффспек?</label>
        <input type="checkbox" id="hasOffspec" v-model="character.hasOffspec">
        <div v-if="character.hasOffspec">
            <label for="gearScoreOff">Gear Score:</label>
            <input type="number" id="gearScoreOff" v-model.number="gearScore" required>
            <br>
            <label for="specializationOff">Специализация:</label>
            <select id="specializationOff" v-model="character.hasOffspec" required>
                <option value="tank">Танк</option>
                <option value="healer">Лекарь</option>
                <option value="damage">Урон</option>
            </select>
        </div>
        <br>

      </form>
    </div>
  </template>
  
  <script>
  export default {

    props: {
        character: Object // Принимаем объект персонажа через свойство
    },
    data() {
      return {
        characterName: '',
        gearScore: null,
        selectedClass: '', // Добавлено для выбора класса
        selectedSpecialization: '', // Добавлено для выбора специализации
        hasCloak: false,
        hasOffspec: false,
        gearScoreOff: '',
        specializationOff: ''
      };
    },
    methods: {
      submitCharacter() {
      // Здесь можно выполнить действия по обработке данных формы
      console.log('Имя персонажа:', this.characterName);
      console.log('Gear Score:', this.gearScore);
      console.log('Класс:', this.selectedClass);
      console.log('Специализация:', this.selectedSpecialization);
      console.log('Есть ли плащ?', this.hasCloak ? 'Да' : 'Нет');
      },
      closeForm() {
        this.$emit('close');
    }
    }
  };
  </script>
  <style>
    .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #fff;
    }

    .close-button:hover {
    color: #ff0000; /* Изменение цвета при наведении */
    }

    .character-form {
    background-color: #1e1e1e;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-family: Arial, sans-serif;
    margin: 10px 0;
    position: relative; /* Устанавливаем позицию для позиционирования кнопки закрытия */
    }

    .character-form label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    }

    .character-form input[type="text"],
    .character-form input[type="number"],
    .character-form select {
    width: 96%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #303030;
    border-radius: 4px;
    background-color: #2e2e2e;
    color: #fff;
    font-family: Arial, sans-serif;
    }

    .character-form input[type="text"]:focus,
    .character-form input[type="number"]:focus,
    .character-form select:focus {
    border-color: #0074ba;
    }

    .character-form select {
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6"><path fill="#0074ba" d="M6 0l6 6H0z"/></svg>');
    background-size: 12px 6px;
    background-repeat: no-repeat;
    background-position: calc(100% - 12px) center;
    padding-right: 30px;
    }
  </style>