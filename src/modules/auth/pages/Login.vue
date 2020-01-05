<template>
  <div class="bg-gradient">
    <form @submit.prevent="submit()">
      <div class="login-page">
        <div class="card mt-5">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="email"
                v-model="form.email"
                class="form-control"
                placeholder="E-mail"
              >
            </div>
            <div class="form-group">
              <input
                required
                type="password"
                v-model="form.password"
                class="form-control"
                placeholder="Senha"
              >
            </div>
            <button class="btn btn-primary d-w-100">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submit () {
      try {
        await this.ActionDoLogin(this.form)
        this.$router.push({ name: 'home' })
      } catch (err) {
        console.log(err)
        alert(err.data ? err.data.message : 'Não foi possivel fazer login')
      }
    }
  }
}
</script>

<style>
  .login-page {
    height: 300px;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    color: darkblue;
  }
  .card {
    width: 30%;
  }
</style>
