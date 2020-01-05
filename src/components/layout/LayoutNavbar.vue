<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        AutoCom Web
      </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
      aria-label="Toggle navigation" @click="toggleNavbar()"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText" v-bind:class="{ show: show }">
      <ul class="navbar-nav mr-auto font-size12">
          <router-link class="nav-item" tag="li"
            exact
            :key="i"
            exact-active-class="active"
            :to="{ name: route.name }"
            v-for="(route, i) in routes"
          >
            <a href="#" class="nav-link">{{ route.meta.title }}</a>
          </router-link>
      </ul>
      <span class="navbar-text">
        <div v-if="user.name">
          <a class="nav-link pointer font-size12" @click="logout()">
            Olá, {{ user.name }} |  Sair
          </a>
        </div>
      </span>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      show: false
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    routes () {
      return this.$router.options.routes.filter(route => (
        route.meta && route.meta.showNavbar
      ))
    }
  },
  methods: {
    ...mapActions(
      'auth', ['ActionSignOut']
    ),
    async logout () {
      try {
        await this.ActionSignOut()
        this.$router.push({ name: 'login' })
      } catch (err) {
        console.log(err)
        alert(err.data ? err.data.message : 'Não foi possivel fazer logout')
      }
    },
    toggleNavbar () {
      this.show = !this.show
    }
  }
}
</script>

<style>
</style>
