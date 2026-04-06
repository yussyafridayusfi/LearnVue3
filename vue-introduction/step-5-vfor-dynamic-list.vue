<template>

  <div class="section">
    <h2>v-for : List of Rooms</h2>
    
    <div v-for="room in rooms" :key="room.id" class="room-card">
      <h3> {{ room.name }} </h3>
      <p>Price : ${{ room.price }} /night</p>
      <p>Capacity : {{ room.capacity }} guests</p>

    </div>
  </div>

  <div class="section">
    <h2>v-for with Index: Room Numbers</h2>
    <p v-for="(room,index) in rooms" :key="room.id">
      Room #{{ index + 1 }} : {{ room.name }}
    </p>

  </div>

  <div class="section">
    <h2>Dynamite List: Add or Remove Rooms</h2>
    
    <button @click="addRoom">Add Room</button>
    <button @click="removeFirstRoom">Remove First Room</button>

    <div v-for="room in dynamicRooms" :key="room.id" class="room.card">
      <h3>{{ room.name }}</h3>
      <p>ID : {{ room.id }}</p>

    </div>

  </div>

  <div class="section">
    <h2>v-for Objects : Room Features</h2>

    <p v-for="(value, key) in selectedRoom" :key="key">
      <strong> {{ key }} : </strong> {{ value }}
    </p>
  </div>

</template>
<script setup>
import { ref } from 'vue'

// SECTION A: Basic v-for state
// This is an array of room objects. Each room has id, name, price, and capacity
const rooms = ref([
  { id: 1, name: 'Standard Room', price: 100, capacity: 2 },
  { id: 2, name: 'Deluxe Room', price: 150, capacity: 3 },
  { id: 3, name: 'Suite', price: 250, capacity: 4 }
])

// SECTION C: Dynamic list state
// We'll add/remove rooms from this list to show why :key matters
// Every new room gets a unique nextId
let nextId = 4
const dynamicRooms = ref([
  { id: 1, name: 'Room A' },
  { id: 2, name: 'Room B' },
  { id: 3, name: 'Room C' }
])

// Function to add a new room to dynamicRooms
const addRoom = () => {
  dynamicRooms.value.push({ id: nextId, name: `Room ${String.fromCharCode(64 + nextId)}` })
  nextId++
}

// Function to remove the first room from dynamicRooms
const removeFirstRoom = () => {
  dynamicRooms.value.shift() // shift() removes and returns the first element
}

// SECTION D: Object properties state
// This is an object (not an array), used to demonstrate v-for over object properties
const selectedRoom = ref({
  name: 'Deluxe Room',
  price: 150,
  capacity: 3,
  amenities: 'WiFi, AC, TV',
  view: 'Ocean View'
})
</script>

<style scoped>
  .room-card {
    background-color: #f5f5f5;
    padding: 15px;
    margin: 10px 0;
    border-left: 4px solid #42b983;
    border-radius: 4px;
  }

  .room-card h3 {
    margin-top: 0;
    color: #2c3e50;
  }

  .room-card p {
    margin: 5px 0;
  }
</style>
