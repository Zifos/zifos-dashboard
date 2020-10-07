<template>
  <div class="password-container">
    <a-col class="password-container__logo">
      <img :src="require('../assets/svg/logo-zifos.svg')" alt="Logo Zifos" />
    </a-col>

    <div class="password-container__restore-password">
      <a-text>
        <h3>Restablecer tu contraseña</h3>
      </a-text>
    </div>

    <a-input
      class="password-container__email"
      v-model="userData.mail"
      placeholder="Email"
    >
      <a-icon slot="prefix" type="mail" />
    </a-input>

    <div>
      <a-button
        class="password-container__btn-send"
        type="danger"
        :disabled="userData.mail === ''"
        @click="recoverPassword"
      >
        Enviar instrucciones
      </a-button>
      <nuxt-link
        to="/login"
        type="link"
        class="password-container__backto-login"
      >
        Volver al ingreso
      </nuxt-link>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Password-recovery",
  data() {
    return {
      userData: {
        mail: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.password-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 210px;
  height: 100vh;
  overflow: hiiden;
  &__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 3.8rem;
  }
  &__restore-password {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  &__email {
    margin-bottom: 1rem;
    ::placeholder {
      padding-left: 4px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
  &__btn-send {
    width: 100%;
  }
  &__backto-login {
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    color: rgba(237, 31, 44, 0.5);
    &:hover {
      color: #ed1f2c;
    }
  }
}
</style>
