<template>
  <div>
    <section class="owl-carousel active-product-area section_gap">
      <!-- single product slide -->
      <div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
              <div class="section-title">
                <h1>Nuestros Productos</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                  magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div v-for="(producto, index) in productosLista" :key="index" class="col-lg-3 col-md-6">
              <div class="single-product">
                <img class="img-fluid" src alt />
                <div class="product-details">
                  <h6>{{producto.nombre}}</h6>
                  <div class="price">
                    <h6>${{producto.precio}}</h6>
                  </div>
                  <div
                    class="prd-bottom"
                    style="float: right !important; margin-top: -45px !important;"
                  >
                    <router-link class="social-info" :to="`detalle/${producto.id}`">
                      <!-- <a class="social-info" @click="getProduct(producto)">
                        <span class="ti-eye"></span>
                        <p class="hover-text">Ver detalle</p>
                      </a>-->
                      Ver detalle
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- single product slide -->
    </section>
  </div>
</template>
<script>
export default {
  name: "Productos",

  data() {
    return {
      productosLista: [
        {
          id: 1,
          nombre: "121",
          precio: 5000,
          descripcion: "asdasd",
          img: "../../public/img/cart.jpg",
        },
        {
          id: 2,
          nombre: "121",
          precio: 5000,
          descripcion: "asdasd",
          img: "../../public/img/cart.jpg",
        },
        {
          id: 3,
          nombre: "121",
          precio: 5000,
          descripcion: "asdasd",
          img: "../../public/img/cart.jpg",
        },
        {
          id: 4,
          nombre: "121",
          precio: 5000,
          descripcion: "asdasd",
          img: "../../public/img/cart.jpg",
        },
        {
          id: 5,
          nombre: "121",
          precio: 5000,
          descripcion: "asdasd",
          img: "../../public/img/cart.jpg",
        },
      ],
    };
  },
  methods: {
    getProduct(producto) {
      console.log(producto);
      router.push({ name: "detalles", params: { producto } });
    },
  },
};
</script>