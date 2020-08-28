<template>
  <div>
    <header class="header_area sticky-header">
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light main_box">
          <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <a class="navbar-brand logo_h" href="index.html">
              <img src="img/logo.png" alt />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul class="nav navbar-nav menu_nav ml-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/">Inicio</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Nosotros</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Productos</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Productos de Temporada</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Nav",
};
</script>