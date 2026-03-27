<template>
<div id="app">
  <h1>{{ appTitle }}</h1>
  <p>Guest: {{ booking.guestName }}</p>
  <p>Hotel: {{ booking.hotelName }}</p>
  <p>Total Cost: {{ totalCost }}</p>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
const appTitle = ref("Hotel Booking")
const guestName = ref("John Doe")
const hotelName = ref("Grand Hotel")
const roomPrice = ref(150)
const nights = ref(3)

const booking = reactive({
guestName: "John",
hotelName: "Paradise Hotel",
roomPrice: 150,
nights: 3
})

const totalCost = computed(() => {
  return roomPrice.value * nights.value
})


</script>

<style scoped>
h1 {
  color: #2c3e50;
}

</style>
