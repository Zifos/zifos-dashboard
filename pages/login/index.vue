<template>
  <div class="form-container">
    <div>
      <login v-if="recovery === false" @click="handleClick"></login>
      <!-- <passwordRecovery v-else @click="handleClick"></passwordRecovery> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
  name: "layoutView",
  data() {
    return {
      recovery: false
    };
  },

  methods: {
    formSubmit() {
      console.log(this.userForm);
    },
    handleClick() {
      this.recovery = !this.recovery;
      console.log(this.recovery);
      // routes.replace("PasswordRecovery");
    }
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 25%;
  background-color: #f6e8d9;
  border-radius: 2rem;
  margin-top: 10%;
  border: 1px solid black;
}
</style>
