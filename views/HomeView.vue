<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Accesorios/>
    <Piedepagina/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Accesorios from '@/components/Accesorios.vue'
import Piedepagina from '@/components/Piedepagina.vue'
import Estilos from '@/components/Estilos.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Accesorios,
    Piedepagina,
    Estilos
  }
}
</script>
