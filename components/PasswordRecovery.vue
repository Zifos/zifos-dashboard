<template>
  <div class="password-container">
    <a-input
      class="password-container__email"
      v-model="userData.mail"
      placeholder="Email"
    >
      <a-icon slot="prefix" type="mail" />
    </a-input>
    <div>
      <nuxt-link to="/login" type="link">
        <!-- //@click="login  -->
        Volver al login
      </nuxt-link>

      <a-button
        type="danger"
        :disabled="userData.mail === ''"
        @click="recoverPassword"
      >
        Recuperar contraseña
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Password",
  data() {
    return {
      userData: {
        mail: ""
      }
    };
  },

  methods: {
    recoverPassword() {
      console.log(this.userData);
    },

    login() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.password-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__user {
    width: 100%;
    margin-bottom: 1rem;
  }
  &__email {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
