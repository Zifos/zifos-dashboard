<template>
  <div class="container">
    <div class="form-container">
      <div>
        <login v-if="recovery === false" @click="handleClick"></login>
        <!-- <passwordRecovery v-else @click="handleClick"></passwordRecovery> -->
      </div>
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
.container {
  width: 100%;
  height: 100%;
  background-color: #3d4159;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 26%;
  // height: 70%;
  width: 359px;
  height: 438px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f6e8d9;
  border-radius: 2rem;
  margin-top: 25vh;
  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.3);
}
</style>
