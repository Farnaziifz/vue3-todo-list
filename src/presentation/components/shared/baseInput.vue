<script lang="ts" setup>
import { ref, watch } from 'vue'

type baseInputProps = {
  type: string
  value?: string | number | undefined
  label: string,
}

const props = defineProps<baseInputProps>()

const isFocus = ref(false)
const inputVal = ref()

const emits = defineEmits(['update'])

const handleFocus = (focus: boolean) => {
  isFocus.value = focus
}

watch(
  inputVal,
  () => {
    emits('update', inputVal.value)
  },
  { deep: true }
)
</script>

<template>
  <div class="input-container border-b relative py-2 px-1">
    <label
      for=""
      class="absolute transition-all duration-300"
      :class="{
        '-top-1/4 text-xs ': isFocus || inputVal,
        'top-0 text-sm': !isFocus && !inputVal,
      }"
      >{{ props.label }}</label
    >
    <input
      :type="props.type"
      class="bg-transparent focus:outline-none w-full"
      @focus="handleFocus(true)"
      @blur="handleFocus(false)"
      v-model="inputVal"
      :value="inputVal"
    />
  </div>
</template>

<style scoped>
.input-container {
  border-color: var(--primary-color);
}
</style>
