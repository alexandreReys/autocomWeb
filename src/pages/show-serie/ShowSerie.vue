<template>
  <div>
    <div class="mt-4 ml-2" style="font-size: 1.3rem" v-if="loading">
      Aguarde um momento ...
    </div>
    <div class="page-serie">
      <template v-if="!loading">
          <h1>{{ serie.title }}</h1>
          <img :src="serie.image" height="600Px" alt="Poster da Série" loading="lazy">
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data: () => ({ loading: true }),
  mounted () {
    this.getData()
  },
  computed: {
    ...mapState('showSerie', ['serie'])
  },
  methods: {
    ...mapActions('showSerie', ['ActionFindSerie']),
    async getData () {
      try {
        await this.ActionFindSerie(this.$route.params.id)
      } catch (error) {
        alert('Não foi possivel carregar a pagina !!')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>
.page-serie {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 56px);
}

</style>
