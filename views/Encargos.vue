<template>
    <div class="encargos">
      <Pencargos/>
      <Estilos/>
    </div>
</template>
<script>
import Pencargos from '@/components/Pencargos.vue'
import Estilos from '@/components/Estilos.vue'
export default {
  name: 'Encargos',
  components: {
    Pencargos,
    Estilos
  },
}
</script>