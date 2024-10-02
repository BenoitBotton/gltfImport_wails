<template>
  <Cylinder_1013_base :color="props.color" :scale="[1.344,1.344,8/13.2]" />
</template>
  
<script setup lang="ts">
import Cylinder_1013_base from "./Cylinder_1013_base.vue"

const props = defineProps<{
  color: string
}>()
</script>
