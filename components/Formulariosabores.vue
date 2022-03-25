<template>
        <label for="Sabor">Elige el sabor o sabores del pastel</label><br>
        <input type="checkbox" id="topping1" name="topping1" value="Chocolate" v-model="Sabores">
        <label for="topping1">Chocolate</label><br>
        <input type="checkbox" id="topping2" name="topping2" value="Capricho" v-model="Sabores">
        <label for="topping2">Capricho</label><br>
        <input type="checkbox" id="topping3" name="topping3" value="Zanahoria" v-model="Sabores">
        <label for="topping3">Zanahoria</label><br>
        <input type="checkbox" id="topping4" name="topping4" value="Moka" v-model="Sabores">
        <label for="topping4">Moka</label><br>
        <input type="checkbox" id="topping5" name="topping5" value="Fresa" v-model="Sabores">
        <label for="topping5">Fresa</label><br>
        <input type="checkbox" id="topping6" name="topping6" value="Dulce_de_leche" v-model="Sabores">
        <label for="topping6">Dulce de leche</label><br>
        <input type="checkbox" id="topping7" name="topping7" value="Tres_leches" v-model="Sabores">
        <label for="topping7">Tres leches</label><br>
        <input type="checkbox" id="topping8" name="topping8" value="Frutas" v-model="Sabores">
        <label for="topping8">Frutas</label><br><br>
</template>
<script>
export default {
    name: 'Formulariosabores',
    computed:{
    Sabores:{
        get(){
            return this.$store.state.Sabores;
        },
        set(Sabores){
            this.$store.dispatch("Sabores",Sabores)
        }
    }
    }
}
</script>