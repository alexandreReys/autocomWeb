<template>
  <div id="home">
    <div class="user-info">
      <h2>Olá, {{ user.name }}</h2>
      <h4 class="font-yellow mt-3">
        <!-- <i class="material-icons md-48">laptop_chromebook</i> -->
        Bem vindo ao <span class="font-bold"> AutoCom Web </span>
      </h4>
      <h5 class="mt-2">Software para Lojas, Serviços e Alimentação</h5>
    </div>

    <div class="home-links">
      <router-link
        :key="i"
        class="home-link"
        :to="{ name: route.name }"
        v-for="(route, i) in routes"
      >
        <i class="material-icons md-36">{{ route.meta.icon }}</i>
        <span class="mt-3">{{ route.meta.label }}</span>
      </router-link>

      <a href="#" class="home-link">
        <i class="material-icons md-36">info_outline</i>
        <span class="mt-3">Sobre</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState('auth', ['user']),
    routes () {
      return this.$router.options.routes.filter(route => (
        route.meta && route.meta.showNavbar && route.meta.label
      ))
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin flex-center($columns: false) {
  display: flex;
  align-items: center;
  justify-content: center;

  @if $columns {
    flex-direction: column;
  }
}

#home {
  width: 100%;
  height: 100vh;
  @include flex-center(true);
  justify-content: space-around;

  .user-info {
    text-align: center;
  }

  .home-links {
    width: 100%;
    @include flex-center();
    .home-link {
      flex: 0 0 15%;
      margin: 0 25px 50px;
      padding: 30px 0;
      transition: .4s;
      color: var(--white);
      @include flex-center(true);
      &:hover {
        transform: scale(1.1);
        text-decoration: none;
        box-shadow: 0 10px 20px white
        // box-shadow: 0 10px 20px rgba(0,0,0,0.5)
      }
    }
  }
  .home-link:first-child { background-color: var(--blue) }
  .home-link:nth-child(2) { background-color: var(--orange) }
  .home-link:nth-child(3) { background-color: var(--green) }
  .home-link:last-child { background-color: var(--red) }

}
</style>
