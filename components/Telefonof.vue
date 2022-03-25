<template>
        <label for="tel1">Teléfono:</label>
        <input type="tel" id="tel1" name="tel1" maxlength="10" v-model="Tell"><br><br>
</template>
<script>
export default {
    name:'Telefonof',
    computed:{
        Tell:{
            get(){
                return this.$store.state.Tell;
            },
            set(Tell){
                this.$store.dispatch("Tell",Tell)
            }
        }
    }
}
</script>