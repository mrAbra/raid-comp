<template>
    <div class="raid-form">
      <!-- Добавляем шесть таблиц, каждая из которых использует компонент Table.vue -->
      <table-component class="table-component" id="raid-one"></table-component>
      <table-component class="table-component" id="raid-one"></table-component>
      <table-component class="table-component" id="raid-one"></table-component>
      <table-component class="table-component" id="raid-one"></table-component>
      <table-component class="table-component" id="raid-one"></table-component>
      <table-component class="table-component" id="raid-one"></table-component>
    </div>
  </template>
  
  <script>
  import TableComponent from './Raid-comp.vue'; // Импортируем компонент для таблицы
  
  export default {
    components: {
      TableComponent // Регистрируем компонент
    }
  };
  </script>


<style>
    .raid-form, .table-component{
    background-color: #f0f0f0;
    color: rgb(51, 51, 51);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-family: Arial, sans-serif;
    margin-left: 50px;
    width: 70%; /* Устанавливаем ширину формы на 50% экрана */
    float: left; /* Выравниваем форму в левой части экрана */
    }
    .table-component{
     width: 30%;
     margin: 10px;
    }

  </style>