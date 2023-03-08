<script lang="ts" setup>

// TODO: handle outline and disabled state for btn

type baseButtonProps = {
  title: string
}

const props = defineProps<baseButtonProps>()
</script>

<template>
  <button class="button-compponent w-full rounded-lg p-2 text-white h-14">
    {{ props.title }}
  </button>
</template>

<style scoped>
.button-compponent {
  background-color: var(--primary-color);
}
</style>
