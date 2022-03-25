<template>
        <label for="Input1"> Descripción del pastel</label><br>
        <textarea name="descripcion" rows="5" cols="40" placeholder="Descripción del pastel" v-model="Descripcion"></textarea><br>
</template>
<script>
export default {
    name:'Descripcionf',
    computed:{
        Descripcion:{
            get(){
                return this.$store.state.Descripcion;
            },
            set(Descripcion){
                this.$store.dispatch("Descripcion",Descripcion)
            }
        }
    }
}
</script>