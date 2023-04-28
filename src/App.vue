<template>
  <header>

    <v-card>
      <nav style="display: flex; justify-content: space-between;">
          <RouterLink to="/">
            <img source="logo" width="40" height="40" />
          </RouterLink>

          <RouterLink to="/usuari/1/edit">
            <img source="foto_perfil" width="40" height="40" />
          </RouterLink>
      </nav>
    </v-card>

    

  </header>

  <RouterView />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'


  //Per cridar una api rest
</script>



<style scoped>

  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

</style>
