<template>
  <div class="container-fluid">
    <h1 class="mt-4">Watchlist</h1>
    <hr>

    <div class="row">
      <div
        class="col-3"
        :key="item.id"
        v-for="item in watchlist"
      >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Watchlist',
  mounted () {
    this.ActionFindWatchlist()
  },
  computed: {
    ...mapState( 'watchlist', ['watchlist'] )
  },
  methods: {
    ...mapActions( 'watchlist', ['ActionFindWatchlist'] )
  }
}
</script>

<style>
</style>
