import { useGLTF } from "@tresjs/cientos"
import type { TresObject3D } from "@tresjs/core";
import { shallowRef } from "vue";

const { nodes } = await useGLTF('src/assets/cylinder_1013-transformed.glb', { draco: true })

function useCylinder1013 ()  {
  const model = shallowRef<TresObject3D>(nodes.round_1013.clone())
  return model
}

export default useCylinder1013
