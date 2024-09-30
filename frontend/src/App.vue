<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import Cylinder_1013 from './components/Cylinder_1013.vue'

</script>

<template>
  <TresCanvas clear-color="#82DBC5" window-size>
    <OrbitControls />
    <TresPerspectiveCamera
      :position="[20,20,20]"
      :fov="35"
      :look-at="[0, 0, 0]"
    />
    <Suspense fallback={null}>
      <Cylinder_1013 /> 
    </Suspense>
    <TresAmbientLight :intensity="1" />
    <TresDirectionalLight :intensity="1" :position="[500, 500, 0]" />
    <TresDirectionalLight :intensity="0.5" :position="[-500, 500, 0]" />
  </TresCanvas>
</template>

<style scoped>
#mycanvas {
  height: 90dvh;
  width: 80vw;
}
</style>