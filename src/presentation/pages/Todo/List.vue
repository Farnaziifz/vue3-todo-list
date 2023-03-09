<script lang="ts" setup>
import { defineAsyncComponent, onBeforeMount, ref } from 'vue'
import { todoItem } from '../../../core/types/todo.type'
import {
  getTodoWithPaginationHandler,
  getTodoListHandler,
} from '../../../logics/specific/todo.handler'
import { useRouter } from 'vue-router'
import _ from 'lodash'

const router = useRouter()

const todoItemComponent = defineAsyncComponent(
  () => import('/src/presentation/components/specific/todoItem.vue')
)

const basePagination = defineAsyncComponent(
  () => import('/src/presentation/components/shared/basePagination.vue')
)
const baseInput = defineAsyncComponent(
  () => import('/src/presentation/components/shared/baseInput.vue')
)
const baseButton = defineAsyncComponent(
  () => import('/src/presentation/components/shared/baseButton.vue')
)

const serverData = ref()
const serverDataCount = ref()
const todoData = ref('')
const activePage = ref(1)

onBeforeMount(async () => {
  const todoData = await getTodoWithPaginationHandler(activePage.value)
  const todoDataCount = await getTodoListHandler()
  if (todoData?.status === 401) {
    router.push('/auth/login')
  }
  if (todoData) serverData.value = todoData
  if (todoDataCount) serverDataCount.value = todoDataCount
})

const changePage = async (page: string | number) => {
  activePage.value = _.toNumber(page)
  const todoData = await getTodoWithPaginationHandler(page)
  if (todoData) serverData.value = todoData
}

const updatetodoList = (value: string) => {
  todoData.value = value
}

const onSubmitItem = () => {
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
      <basePagination
        class="mt-10"
        :total="serverDataCount?.length"
        :page="activePage"
        @clickPage="changePage"
      />
    </div>
  </div>
</template>
