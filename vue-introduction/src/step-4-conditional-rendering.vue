<template>

  <div class="section">
    <h2>v-if / v-else</h2>

    <p v-if="isRoomAvailable">✅ Room is available</p>
    <p v-else>❌ Room is not available</p>

    <button @click="isRoomAvailable = !isRoomAvailable"> Toggle Availability</button>

  </div>

  <div class="section">
    <h2>v-else-if</h2>
    <p v-if="roomType === 'budget'">Budget Room - $50/night</p>
    <p v-else-if="roomType === 'standard'">Standard Room - $100/night</p>
    <p v-else-if="roomType === 'premium'">Premium Room - $200/night</p>
    <p v-else>Unknown Room Type</p>

    <!-- button to change room type -->
    <button @click="roomType = 'budget'">Budget</button>
    <button @click="roomType = 'standard'">Standard</button>
    <button @click="roomType = 'premium'">Premium</button>

  </div>

  <div class="section">
    <h2>v-show</h2>

    <p v-show="showDetails"> Room Details: King bed, WiFi, Air conditioning, Mini bar</p>

    <button @click="showDetails = !showDetails"> {{ showDetails ? 'Hide' : 'Show' }} Details</button>


  </div>

</template>

<script setup>
import {ref, reactive} from 'vue'

// SECTION A: v-if / v-else state
// This is a boolean that controls whether the room is available
const isRoomAvailable = ref(true)

// SECTION B: v-else-if state
// This is a string that represents the room type
const roomType = ref('standard')

// SECTION C: v-show state
// This is a boolean that controls whether to show the room details
const showDetails = ref(false)

</script>

<style scoped>
.section {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
}

h2 {
  color: #2c3e50;
  margin-top: 0;
}

button {
  margin: 5px;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #359970;
}

p {
  margin: 10px 0;
  font-size: 16px;
}
</style>