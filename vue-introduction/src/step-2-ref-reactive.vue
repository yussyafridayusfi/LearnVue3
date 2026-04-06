<template>
<div id="booking-app">
  <h1>{{ appTitle }}</h1>
  <p>Guest: {{ booking.guestName }}</p>
  <p>Hotel: {{ booking.hotelName }}</p>
  <p>Total Cost: {{ totalCost }}</p>
  </div>
</template>

<script setup>
import {ref, computed, reactive} from 'vue'
const appTitle = ref("Hotel Booking")

const booking = reactive({
guestName: "John",
hotelName: "Paradise Hotel",
roomPrice: 150,
nights: 3
})

const totalCost = computed(() => {
  return booking.roomPrice * booking.nights
})


</script>

<style scoped>
h1 {
  color: #2c3e50;
}

</style>
