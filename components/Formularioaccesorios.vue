<template>
        <label for="Sabor">Elige el accesorio o accesorios</label><br>
        <input type="checkbox" id="topping9" name="topping9" value="luminosa" v-model="Accesorios">
        <label for="topping1">Vela luminosa</label><br>
        <input type="checkbox" id="topping10" name="topping10" value="Feliz" v-model="Accesorios">
        <label for="topping2">Vela feliz cumpleaños</label><br>
        <input type="checkbox" id="topping11" name="topping11" value="Cucharas_de_plástico" v-model="Accesorios">
        <label for="topping3">Cucharas de plástico</label><br>
        <input type="checkbox" id="topping12" name="topping12" value="Vela_numero" v-model="Accesorios">
        <label for="topping4">Vela numero</label><br>
        <input type="checkbox" id="topping13" name="topping13" value="happy" v-model="Accesorios">
        <label for="topping5">Vela happy birthday</label><br>
        <input type="checkbox" id="topping14" name="topping14" value="Caja" v-model="Accesorios">
        <label for="topping6">Caja de velas</label><br>
        <input type="checkbox" id="topping15" name="topping15" value="interrogacion" v-model="Accesorios">
        <label for="topping7">Vela interrogación</label><br><br>
</template>
<script>
export default {
    name: 'Formularioaccesorios',
    computed:{
    Accesorios:{
        get(){
            return this.$store.state.Accesorios;
        },
        set(Accesorios){
            this.$store.dispatch("Accesorios",Accesorios)
        }
    }
    }
}
</script>