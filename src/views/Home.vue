<template>
  <div>
    <Banner></Banner>
    <Info></Info>
    <Productos></Productos>
    <Categorias></Categorias>
    <Temporada></Temporada>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Banner.componet";
import Info from "../components/Info.componet";
import Productos from "../components/Productos.componet";
import Categorias from "../components/Categorias.componet";
import Temporada from "../components/Temporada.componet";

export default {
  name: "Home",
  components: {
    Banner,
    Info,
    Productos,
    Categorias,
    Temporada,
  },
};
</script>
