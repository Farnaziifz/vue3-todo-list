<script lang="ts" setup>
// import { watch } from 'vue'

import _ from 'lodash'
import { computed } from 'vue'

type basePaginateProps = {
  total: string | number
  page: number | string
}

const paginationButton = computed(() => {
  if (props.total) {
    const count = _.toNumber(props.total) / 5
    return count
  }
  return 1
})
const props = defineProps<basePaginateProps>()
// watch(props.page, () => {}, { deep: true })
</script>

<template>
  <div class="flex justify-center">
    <div
      v-for="n in paginationButton"
      :key="n"
      class="border p-2 m-2 w-10 h-10 flex items-center justify-center rounded cursor-pointer"
    >
      <span
        :class="{ 'font-bold active-item': n === _.toNumber(page) }"
        @click="$emit('clickPage', n)"
        >{{ n }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.active-item {
  color: var(--secondary-color);
}
</style>
