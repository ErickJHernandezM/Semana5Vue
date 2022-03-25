<template>
    <div class="inventario">
      <TablaI/>
      <Estilos/>

    </div>
</template>
<script>
import TablaI from '@/components/TablaI.vue'
import Estilos from '@/components/Estilos.vue'
export default {
  name: 'AboutView',
  components: {
    TablaI,
    Estilos,
  },
}
</script>

