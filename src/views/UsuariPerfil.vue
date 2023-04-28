<template>
  <RouterLink to="/usuari/info">Perfil</RouterLink>
  <div class="about">
    <h1>This is an about user perfil page</h1>
  </div>
</template>

<script>
  //imports

  export default {
    name: "UsuariPerfil",
    /*
    components: {
      exempleComponent
    },
    Si es necesari l'estructura es aixi
    props: {
      title: String
    },
    setup(props) {
    */
    setup() {

      return {

      }
    }
  }


</script>

<style scoped>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
  