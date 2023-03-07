<script lang="ts" setup>
import { defineAsyncComponent, onBeforeMount, ref } from 'vue'
import { getTodoListHandler } from '../../../logics/specific/todo.handler'

const todoItem = defineAsyncComponent(
  () => import('/src/presentation/components/specific/todoItem.vue')
)

const serverData = ref()

onBeforeMount(async () => {
  const todoData = await getTodoListHandler()
  if (todoData) serverData.value = todoData
})

const handleStatus = (val: string | number) => {
  console.log(val)

  serverData.value[0].status = !serverData.value[0].status
}
</script>

<template>
  <div class="container">
    <div v-for="item in serverData" :key="item.id">
      <todoItem
        :isDone="item.status"
        :title="item.title"
        :id="item.id"
        @update="handleStatus(item.id)"
      />
    </div>
  </div>
</template>
