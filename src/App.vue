<template>
  <div
    id="app"
    class="bg-gradient"
  >
    <Navbar v-if="showNavbar" />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/layout/LayoutNavbar'

export default {
  components: {
    Navbar
  },
  computed: {
    showNavbar () {
      return this.$route.name !== 'login'
    }
  }
}
</script>

<style>
</style>
