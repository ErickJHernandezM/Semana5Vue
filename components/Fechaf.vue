<template>
        <label for="Input1"> Fecha y hora de entrega</label><br>
        <input type="datetime-local" id="fecha2" name="fecha2" v-model="Fecha"><br><br>
</template>
<script>
export default {
    name:'Fechaf',
    computed:{
        Fecha:{
            get(){
                return this.$store.state.Fecha;
            },
            set(Fecha){
                this.$store.dispatch("Fecha",Fecha)
            }
        }
    }
}
</script>