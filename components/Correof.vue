<template>
            <label for="correo1">Correo: </label>
            <input type="email" id="correo1" name="correo1" v-model="Correo"><br><br>
</template>
<script>
export default {
    name:'Correof',
    computed:{
        Correo:{
            get(){
                return this.$store.state.Correo;
            },
            set(Correo){
                this.$store.dispatch("Correo",Correo)
            }
        }
    }
}
</script>