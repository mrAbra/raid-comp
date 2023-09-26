<template>
  <div>
    <player-form></player-form>
    <raids></raids>
  </div>
</template>

<script>
import PlayerForm from './components/Player-form.vue';
import Raids from './components/Raids.vue';

export default {
  components: {
    PlayerForm,
    Raids
  }
};
</script>

<style>
/* BASIC TYPOGRAPHY                       */
/* from https://github.com/oxalorg/sakura */
html {
  font-size: 62.5%;
  font-family: serif;
}
body {
  font-size: 1.8rem;
  line-height: 1.618;
  color: #4a4a4a;
  background-color: #f9f9f9;
  padding: 13px;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.1;
  font-family: Verdana, Geneva, sans-serif;
  font-weight: 700;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
h1 {
  font-size: 2.35em;
}
h2 {
  font-size: 2em;
}
h3 {
  font-size: 1.75em;
}
h4 {
  font-size: 1.5em;
}
h5 {
  font-size: 1.25em;
}
h6 {
  font-size: 1em;
}
</style>