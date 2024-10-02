<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import Cutter from './Cutter.vue'

const cutters = [
  {
    spiral: 1,
    ctype: 1313,
    shape:'cylinder',
    dia: 13.2,
    backrake: 20,
    siderake: 0,
    yrot: 0,
    ztip: 0,
    radius: 0,
    theta: 5,
    color: '#FFFF00',
  },
  {
    spiral: 2,
    ctype: 1308,
    shape:'cylinder',
    dia: 13.2,
    backrake: 25,
    siderake: 0,
    yrot: 0,
    ztip: 0,
    radius: 15,
    theta: 10,
    color: '#FF00FF',
  },

]

</script>

<template>
  <TresCanvas clear-color="#82DBC5" window-size>
    <OrbitControls />
    <TresPerspectiveCamera
      :position="[40,40,30]"
      :fov="35"
      :look-at="[0, 0, 0]"
    />
    <Cutter v-for="cutter in cutters" :key="cutter.spiral"
          :cutter="cutter" :color="cutter.color" />
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