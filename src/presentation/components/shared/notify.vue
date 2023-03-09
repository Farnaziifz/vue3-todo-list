<script lang="ts" setup>
export type messageProps = {
  type: string
  messageKey?: string | number
  content: string
  show?: boolean
}

const props = defineProps<messageProps>()
</script>

<template>
  <div class="relative  w-full bg-transparent">
    <div
      class="w-72 h-10 absolute left-1/2 translate-x-[-50%] flex items-center justify-center text-white rounded-lg transition-all top-[100px]"
      :class="{
        success: props.type === 'success',
        error: props.type === 'error',
      }"
    >
      <p>{{ props.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.error {
  background-color: red;
}
.success {
  background-color: green;
}
</style>
