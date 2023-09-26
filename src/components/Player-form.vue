<template>
    <div class="player-form"> <!-- Пример класса .blue для player-form -->
        <label for="playerName" class="player-form-label">Имя игрока:</label>
        <input type="text" id="playerName" v-model="playerName" class="player-form-input">
        <div  class="character-wrapper">
        <div v-for="(character, index) in characters" :key="character.id">
            <character-form :character="character" @close="handleCharacterFormClose(character.id)"></character-form>
        </div>
        </div>
        <button @click="addCharacter()" class="player-form-button">Добавить персонажа</button>
        <button @click="submitPlayer" class="player-form-button">Сохранить профиль</button>
    </div>
  </template>
  
  <script>
  import CharacterForm from './Character-form.vue';
  
  export default {
    components: {
      CharacterForm
    },
    data() {
      return {
        playerName: '',
        characters: [{}],
        elementInc: 0
      };
    },
    methods: {
      addCharacter() {
        // Добавить новую форму персонажа
        this.elementInc++;
        this.characters.push({ id: this.elementInc });
        this.characters.forEach(character => {
            console.log(character.id);
            });
      },
      handleCharacterFormClose(characterId) {
        // Добавить новую форму персонажа
        
        this.characters = this.characters.filter(character => character.id !== characterId);
      },
      submitPlayer() {
        // Здесь можно выполнить действия по сохранению данных игрока и его персонажей
        console.log('Имя игрока:', this.playerName);
        console.log('Персонажи:', this.characters);
      }
    }
  };
  </script>

  <style>
.player-form {
  background-color: #f0f0f0;
  color: rgb(51, 51, 51);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font-family: Arial, sans-serif;
  width: 400px; /* Устанавливаем ширину формы на 50% экрана */
  float: left; /* Выравниваем форму в левой части экрана */
}

.player-form h3,.player-form h4 {
  margin: 10px;
}

.player-form label {
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.player-form input[type="text"],
.player-form input[type="number"] {
  width: 96%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #303030;
  border-radius: 4px;
  background-color: #2e2e2e;
  color: #fff;
  font-family: Arial, sans-serif;
  margin: 0;
}

.player-form button {
  background-color: #1e1e1e;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 20px 0 0 20px;
  font-family: Arial, sans-serif;
  transition: background-color 0.3s ease;
}

.player-form button:hover {
  background-color: #005797;
}
  </style>
  