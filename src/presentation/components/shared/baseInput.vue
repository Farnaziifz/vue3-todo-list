<script lang="ts" setup>
import { ref } from 'vue'
const isFocuse = ref(false)
const hasValue = ref(false)
const inputVal = ref('')

console.log( hasValue)

// const handleFocus = () => {
//   isFocuse.value = true
// }
</script>

<template>
  <div class="input-container border-b relative py-2 px-1">
    <label
      for=""
      class="absolute transition-all duration-300"
      :class="{ '-top-2/4': isFocuse, 'top-0': !isFocuse }"
      >salam</label
    >
    <input
      type="text"
      class="bg-transparent focus:outline-none"
      @focus="isFocuse = true"
      @blur="isFocuse = false"
      v-model="inputVal"
    />
  </div>
</template>

<style scoped>
.input-container {
  border-color: var(--primary-color);
}
.test {
  /* transition: all 3s; */
}
</style>
