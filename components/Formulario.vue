<template>
    <h1>Bienvenido realiza aquí tu pedido</h1>
    <div id="pastel1"><img src="../assets/pastel1.jpg" alt="Pastel tematica espacial" height="600px"></div>
    <section>
    <form @submit.prevent="" id="form1">
        <label for="Input1"> Nombre:</label>
        <input type="text" id="Input1" name="Input1" v-model="Npersonas">
        <br><br>
        <Telefonof/>
        <Correof/>
        <Descripcionf/>
        <Fechaf/>
        <Tamanof/>
        <Formulariosabores/>
        <Formularioaccesorios/>
        <input type="submit" value="Enviar">
        <input type="reset" value="Cancelar">
    </form><br>
    </section>
    <hr>
    <Pencargos/>
</template>
<script>
import Formulariosabores from '@/components/Formulariosabores.vue'
import Formularioaccesorios from '@/components/Formularioaccesorios.vue'
import Pencargos from '@/components/Pencargos.vue'
import Telefonof from '@/components/Telefonof.vue'
import Correof from '@/components/Correof.vue'
import Descripcionf from '@/components/Descripcionf.vue'
import Fechaf from '@/components/Fechaf.vue'
import Tamanof from '@/components/Tamanof.vue'
export default {
    name:'Formulario',
    components:{
        Formulariosabores,
        Formularioaccesorios,
        Pencargos,
        Telefonof,
        Correof,
        Descripcionf,
        Fechaf,
        Tamanof
    },
        computed:{
        Npersonas:{
            get(){
                return this.$store.state.Npersonas;
            },
            set(Npersonas){
                this.$store.dispatch("Npersonas",Npersonas);
            },
        }
    }
}

</script>