<template>
  <div class="newpassword-container">
    <a-col class="newpassword-container__logo">
      <img :src="require('../assets/svg/logo-zifos.svg')" alt="Logo Zifos" />
    </a-col>

    <div class="newpassword-container__title">
      <a-text>
        <h3>Crea tu nueva contraseña</h3>
      </a-text>
    </div>

    <div>
      <a-input-password
        class="newpassword-container__password"
        type="password"
        placeholder="Nueva contraseña"
        v-model="$v.password.$model"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.4)" />
      </a-input-password>

      <a-input-password
        class="newpassword-container__password"
        placeholder="Confirmar contraseña"
        v-model="$v.confirmationPassword.$model"
        :disabled="password == ''"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.4)" />
      </a-input-password>
    </div>
    <div class="newpassword-container__error">
      <span v-if="$v.confirmationPassword.$error"
        >Contraseñas no coinciden
      </span>
    </div>

    <a-button
      class="newpassword-container__submit"
      type="primary"
      html-type="submit"
      :disabled="
        password == '' ||
        confirmationPassword == '' ||
        $v.confirmationPassword.$error
      "
    >
      Cambia mí contraseña
    </a-button>
    <a-button type="link" class="newpassword-container__backto-login">
      <nuxt-link to="login">Volver al inicio</nuxt-link>
    </a-button>
  </div>
</template>

<script>
import { required, sameAs  } from "vuelidate/lib/validators";
export default {
  layout: "login",
  name: "New-password",
  data() {
    return {
        password: "",
        confirmationPassword: "" 
    };
  },

  validations:{
    password:{required,},
    confirmationPassword:{required,
    sameAsPassword: sameAs('password')
    }

  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/variables";

.newpassword-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 210px;
  height: 100%;
  &__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 3.8rem;
  }
  &__title {
    display: flex;
    justify-content: center;
    margin-bottom: 0.6rem;
  }
  &__error {
    display: flex;
    justify-content: center;
    color: #ed1f2c;
  }
  &__password {
    margin-bottom: 1rem;
    ::placeholder {
      padding-left: 4px;
      font-size: 14px;
      color: rgba($black, 0.4);
    }
  }
  &__submit {
    width: 100%;
    margin-top: 0.5rem;
  }
  &__backto-login{
    color: rgba($navy-blue, 0.5);
    &:hover {
      color: $navy-blue;
    }
  }
}
</style>
