<script lang="ts" setup>
type todoItemProps = {
  title: string
  isDone: boolean
  id: string | number
}

const props = defineProps<todoItemProps>()
</script>

<template>
  <div class="todo-container flex py-2 border-b cursor-pointer" @click="$emit('update', id)">
    <div class="relative " >
      <input
        type="checkbox"
        class="todo-item w-full absolute l-0 h-full opacity-0 cursor-pointer"
      />
      <div class="todo-item-icon border rounded-full">
        <svg width="24" height="24">
          <path
            :fill="props.isDone ? 'red' : 'transparent'"
            d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="todo-item-title ml-4">{{ props.title }}</div>
  </div>
</template>

<style scoped>
.todo-container {
  border-color: var(--secondary-color);
}
</style>
