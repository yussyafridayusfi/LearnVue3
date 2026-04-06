<!-- v-bind and v-model example
v-bind - Connect Data to HTML Attributes
Sometimes you need to put data into HTML attributes (not the text content). That's what v-bind does.
-->

<template>
  <img :src="hotelImage" alt="hotel exterior view" />

  <a :href="bookingLink"> Book now! </a>

  <button :title="tooltipText">Click me!</button>

  <button :disabled="isButtonDisabled">Submit</button>

  <div :class="activeStatus">Content</div>

  <p :style="{color: textColor, fontSize: '20px'}"> Styled text</p>

</template>

<script setup>
import {ref} from 'vue'

const hotelImage = ref("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60")
const bookingLink = ref("https://www.booking.com/")
const tooltipText = ref("This is a tooltip")
const isButtonDisabled = ref(false)
const activeStatus = ref("premium-room")
const textColor = ref("blue")

</script>
