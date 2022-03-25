<template>
    <div class="about">
      <Formulario/>
      <Piedepagina/>
      <Estilos/>
    </div>
</template>
<script>
import Piedepagina from '@/components/Piedepagina.vue'
import Formulario from '@/components/Formulario.vue'
import Estilos from '@/components/Estilos.vue'
export default {
  name: 'AboutView',
  components: {
    Piedepagina,
    Formulario,
    Estilos,
  },
}
</script>
