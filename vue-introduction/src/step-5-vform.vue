<template>

  <div class="section">

    <h2>Simple click event</h2>

    <p>Current Room Type: <strong> {{ currentRoom }}</strong></p>
    <p>Total Booking: <strong> {{ bookingCount }}</strong></p>

    <button @click="selectRoom('Deluxe')">Book Deluxe</button>
    <button @click="selectRoom('Standard')">Book Standard</button>
    <button @click="selectRoom('Suite')">Book Suite</button>

    <button @click="incrementBooking">Increment Booking Count</button>
    <button @click="resetBooking">Reset Count</button>
    

  </div>

  <div class="section">
    <h2>Form Submission</h2>

    <form @submit.prevent="submitBooking">
      <label for="">Guest Name</label>
      <input v-model="formData.guestName" type="text" placeholder="Enter Name">

      <label for="">Number of Nights</label>
      <input v-model="formData.nights" type="number" placeholder="Enter Number of Nights">

      <label for="">Room Type</label>
      <select v-model="formData.roomType">
        <option value="Standard">Standard</option>
        <option value="Deluxe">Deluxe</option>
        <option value="Suite">Suite</option>
      </select>

      <button type="submit">Submit Booking</button>

    </form>

    <p v-if="bookingSubmitted" class="success-message">
      Booking confirmed for {{ lastBooking.guestName }} - {{ lastBooking.nights }} nights in a {{ lastBooking.roomType }}.
    </p>

  </div>

  <div class="section">

    <h2>Multiple Event Handlers</h2>

    <button 
      @click="handleSingleClick"
      @dblclick="handleDoubleClick"
    > Single Click or Double Click Me</button>

    <p>Single Click: {{ singleClickCount }}</p>
    <p>Double Click: {{ doubleClickCount }}</p>

  </div>

  <div class="section">

    <h2>Event Object ($event)</h2>

    <label for="">Set Room Price</label>
    <input type="number" @input="updatePrice($event)" placeholder="Enter Price">

    <p v-if="priceMessage"> {{ priceMessage }}</p>

  </div>

</template>

<script setup>
import { ref } from 'vue'

// SECTION A: Simple click handlers
// This stores the currently selected room type
const currentRoom = ref('')

// This counts how many bookings have been made
const bookingCount = ref(0)

// Method: selects a room when you click a button
// Takes roomType as parameter (e.g., 'Deluxe', 'Standard', 'Suite')
const selectRoom = (roomType) => {
  currentRoom.value = roomType
}

// Method: adds 1 to the booking counter
const incrementBooking = () => {
  bookingCount.value++
}

// Method: resets booking counter back to 0
const resetBooking = () => {
  bookingCount.value = 0
}

// SECTION B: Form submission
// This stores all form data (guest name, nights, room type)
const formData = ref({
  guestName: '',
  nights: 1,
  roomType: 'Standard'
})

// This tracks if the form was successfully submitted
const bookingSubmitted = ref(false)

// This stores the details of the last submitted booking
const lastBooking = ref({})

// Method: handles form submission
// Called when user clicks "Submit Booking" button or presses Enter
const submitBooking = () => {
  // VALIDATION: Check if guest name is empty, null, undefined, or only spaces
  if (!formData.value.guestName || formData.value.guestName.trim() === '') {
    alert('Please enter a guest name')
    return  // Stop here - don't continue
  }
  
  // VALIDATION: Check if nights is at least 1
  if (formData.value.nights < 1) {
    alert('Please select at least 1 night')
    return  // Stop here
  }
  
  // If we reach here, validation passed
  // Save a copy of the booking data
  lastBooking.value = { ...formData.value }
  
  // Show success message
  bookingSubmitted.value = true
  
  // Reset form after 2 seconds
  setTimeout(() => {
    formData.value = { guestName: '', nights: 1, roomType: 'Standard' }
    bookingSubmitted.value = false
  }, 2000)
}

// SECTION C: Multiple event handlers
// Counts single clicks
const singleClickCount = ref(0)

// Counts double clicks
const doubleClickCount = ref(0)

// Method: handles single click
const handleSingleClick = () => {
  singleClickCount.value++
}

// Method: handles double click
const handleDoubleClick = () => {
  doubleClickCount.value++
}

// SECTION D: Event object
// This stores the price message to display
const priceMessage = ref('')

// Method: called when user types in the price input
// $event contains the event object with the input value
const updatePrice = ($event) => {
  // Get the value that user typed (e.g., "100")
  const price = $event.target.value
  
  // If input is empty, clear the message
  if (price === '' || price === '0') {
    priceMessage.value = ''
    return
  }
  
  // Show different message based on price ranges
  if (price < 50) {
    priceMessage.value = '⚠️ Budget room - very affordable!'
  } else if (price < 150) {
    priceMessage.value = '✅ Standard room - good value!'
  } else if (price < 250) {
    priceMessage.value = '🌟 Deluxe room - premium comfort!'
  } else {
    priceMessage.value = '👑 Suite - luxury experience!'
  }
}
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
  font-size: 14px;
}

button:hover {
  background-color: #359970;
}

input, select {
  padding: 8px;
  margin: 10px 5px 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

label {
  display: block;
  margin: 10px 0 5px 0;
  font-weight: bold;
  color: #2c3e50;
}

form {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 4px;
  margin: 10px 0;
}

p {
  margin: 10px 0;
  font-size: 16px;
}

.success-message {
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
}

strong {
  color: #42b983;
}
</style>