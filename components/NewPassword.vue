<template>
  <div>
    <div>
      <h3>Crea tu nueva contraseña</h3>
    </div>
    <div>
      <a-input-password
        v-model="dataNewPassword.password"
        type="password"
        placeholder="Contraseña"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.4)" />
      </a-input-password>

      <a-input
        v-model="dataNewPassword.passwordConfirmed"
        placeholder="Confirmar contraseña"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.4)" />
      </a-input>
    </div>
    <a-button
      :disabled="
        dataNewPassword.password === '' ||
        dataNewPassword.passwordConfirmed === ''
      "
      @click="changePassword"
      type="danger"
      html-type="submit"
    >
      Cambiar contraseña
    </a-button>
  </div>
</template>


<script>
export default {
    layout: "login",
    name:"New-password",
    
    data(){
        return {
        dataNewPassword:{
            password:"",
            passwordConfirmed:""
        }
    }
    
    },

    methods:{
        changePassword(){
            console.log(this.dataNewPassword)
        }
    }

}
</script>


<style lang="scss" scoped>

</style>