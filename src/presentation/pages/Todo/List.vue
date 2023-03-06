<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const todoItem = defineAsyncComponent(
  () => import('/src/presentation/components/specific/todoItem.vue')
)

const handleStatus = (val: string | number) => {
  console.log(val)
}
</script>

<template>
  <div class="container">
    <todoItem
      :isDone="true"
      title="clean my room"
      id="1"
      @update="handleStatus"
    />
  </div>
</template>
