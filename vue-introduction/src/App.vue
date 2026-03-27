<template>
  <input :value="hotelName" @input="event => hotelName = event.target.value" />
  <p>Hotel Name: {{ hotelName }}</p>

  <input v-model="hotelName" />
  <p>Hotel Name: {{ hotelName }}</p>

</template>
<script setup>
import {ref} from 'vue'
const hotelName =ref("")
</script>
