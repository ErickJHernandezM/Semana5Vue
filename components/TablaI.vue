<template>
        <TablaA/>
    <div id="pastel2"><img src="" alt="Pastel" width="400px" height="400px"></div>
    <h3>Producto</h3>
    <table>
        <tr>
            <th>Producto</th>
            <th>Cantidad disponible</th>
        </tr>
        <tr>
            <td>Huevo</td>
            <td>100</td>
        </tr>
        <tr>
            <td>Nueces</td>
            <td>160</td>
        </tr>
        <tr>
            <td>Almendras</td>
            <td>100</td>
        </tr>
        <tr>
            <td>Durazno</td>
            <td>40</td>
        </tr>
        <tr>
            <td>Fresas</td>
            <td>57</td>
        </tr>
        <tr>
            <td>Chocolate</td>
            <td>200</td>
        </tr>
        <tr>
            <td>Cerezas</td>
            <td>100</td>
        </tr>
        <tr>
            <td>Zanahorias</td>
            <td>40</td>
        </tr>
        <tr>
            <td>Leche</td>
            <td>40</td>
        </tr>
    </table><br>
</template>
<script>
import TablaA from '@/components/TablaA.vue'
export default {
    name:'TablaI',
    components:{
        TablaA
    },
}
</script>
<style scoped>
table{
  padding-left: 500px;
}
</style>
