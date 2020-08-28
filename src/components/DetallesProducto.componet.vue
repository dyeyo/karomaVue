<template>
  <div>
    <div class="product_image_area">
      <div class="container">
        <div class="row s_product_inner">
          <div class="col-lg-6">
            <div class="s_Product_carousel">
              <div class="single-prd-item">
                <img class="img-fluid" :src="`../../public/img/${model.img}`" alt />
              </div>
              <div class="single-prd-item">
                <img class="img-fluid" :src="model.img" alt />
              </div>
              <div class="single-prd-item">
                <img class="img-fluid" :src="model.img" alt />
              </div>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <div class="s_product_text">
              <h3>{{model.nombre}}</h3>
              <h2>{{model.precio}}</h2>
              <!-- <ul class="list">
                <li>
                  <a class="active" href="#">
                    <span>Category</span> : Household
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Availibility</span> : In Stock
                  </a>
                </li>
              </ul>-->
              <p>{{model.descripcion}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Detalles",
  data() {
    return {
      productosLista: [
        {
          id: 1,
          nombre: "121",
          precio: 5000,
          descripcion: "asdasd",
          img: "cart.jpg",
        },
        {
          id: 2,
          nombre: "121",
          precio: 5000,
          descripcion: "asdasd",
          img: "cart.jpg",
        },
        {
          id: 3,
          nombre: "121",
          precio: 5000,
          descripcion: "asdasd",
          img: "cart.jpg",
        },
        {
          id: 4,
          nombre: "121",
          precio: 5000,
          descripcion: "asdasd",
          img: "cart.jpg",
        },
        {
          id: 5,
          nombre: "121",
          precio: 5000,
          descripcion: "asdasd",
          img: "cart.jpg",
        },
      ],
      productosSelect: [],
      model: {
        nombre: "",
        descripcion: "",
        precio: 0,
        img: "",
      },
    };
  },
  mounted() {
    this.mirar();
  },
  methods: {
    mirar() {
      let pro = this.productosLista.find(
        (obj) => (obj.id = this.$route.params.id)
      );
      console.log(pro);
      this.model.nombre = pro.nombre;
      this.model.descripcion = pro.descripcion;
      this.model.precio = pro.precio;
      this.model.img = pro.img;
    },
  },
};
</script>