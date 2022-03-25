<template>
        <label for="Tamaño">Tamaño del pastel</label><br>
        <input type="radio" id="grande" name="tamaños" value="Grande" v-model="Tamano">
        <label for="grande">Grande</label><br>
        <input type="radio" id="mini" name="tamaños" value="Mini" v-model="Tamano">
        <label for="mini">Mini</label><br><br>
</template>
<script>
export default {
    name:'Tamanof',
    computed:{
        Tamano:{
            get(){
                return this.$store.state.Tamano;
            },
            set(Tamano){
                this.$store.dispatch("Tamano",Tamano)
            }
        }
    }
}
</script>