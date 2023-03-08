<script lang="ts" setup>
import { defineAsyncComponent, onBeforeMount, ref } from 'vue'
import { todoItem } from '../../../core/types/todo.type'
import { getTodoListHandler } from '../../../logics/specific/todo.handler'
// import { goToPath } from '../../../logics/shared/route.handler'
import { useRouter } from 'vue-router'
const rr = useRouter()
const todoItemComponent = defineAsyncComponent(
  () => import('/src/presentation/components/specific/todoItem.vue')
)
const baseInput = defineAsyncComponent(
  () => import('/src/presentation/components/shared/baseInput.vue')
)
const baseButton = defineAsyncComponent(
  () => import('/src/presentation/components/shared/baseButton.vue')
)

const serverData = ref()
const todoData = ref('')

onBeforeMount(async () => {
  const todoData = await getTodoListHandler()
  if (todoData?.status === 401) {
    console.log('salawefcwefweddddm', todoData)
    rr.push('/auth/login')
  }
  if (todoData) serverData.value = todoData
})

const updatetodoList = (value: string) => {
  todoData.value = value
}

const onSubmitItem = () => {
  console.log(typeof serverData.value)
  serverData.value.push({
    id: serverData.value.length + 1,
    title: todoData.value,
    status: false,
  })
  todoData.value = ''
}

const handleStatus = (val: string | number) => {
  serverData.value.find((el: todoItem) => {
    if (el.id === val) el.status = !el.status
  })
}
</script>

<template>
  <div class="container">
    <div class="pb-20">
      <div class="flex items-center">
        <!-- -->
        <baseInput
          @update="updatetodoList"
          label="Add todo Item"
          type="text"
          class="my-20 mr-2 w-full"
          v-model="todoData"
        />
        <baseButton class="w-16" title="add" @click="onSubmitItem" />
      </div>
      <div v-for="item in serverData" :key="item.id">
        <todoItemComponent
          :isDone="item.status"
          :title="item.title"
          :id="item.id"
          @update="handleStatus(item.id)"
          ref="test"
        />
      </div>
    </div>
  </div>
</template>
