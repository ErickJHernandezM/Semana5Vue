<template>
    <h2>Pedidos</h2>
    <div id="imagen"><img src="../assets/images.jpg" alt="Pasteles" width="400px"></div>
    <table>
        <tr>
            <th>Nombre del cliente</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Descripción del pastel</th>
            <th>Fecha y hora de entrega</th>
            <th>Tamaño del pastel</th>
            <th>Sabores</th>
            <th>Accesorios</th>
        </tr>
        <tr>
            <td>{{$store.getters.Npersonas}}</td>
            <td>{{$store.getters.Tell}}</td>
            <td>{{$store.getters.Correo}}</td>
            <td>{{$store.getters.Descripcion}}</td>
            <td>{{$store.getters.Fecha}}</td>
            <td>{{$store.getters.Tamano}}</td>
            <td>{{$store.getters.Sabores}}</td>
            <td>{{$store.getters.Accesorios}}</td>
        </tr>
    </table><br>
</template>
<script>
export default {
    name:'Pencargos',
}
</script>