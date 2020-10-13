<template>
  <div class="container">
    <div class="form-container">
      <PasswordRecovery></PasswordRecovery>
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
  name: "passwordRecovery"
};
</script>

<style lang="scss" scoped>
@import '~/assets/variables';

.container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: $bg-color;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 359px;
  height: 438px;
  margin-left: auto;
  margin-right: auto;
  background-color: $bg-login;
  border-radius: 2rem;
  box-shadow: 2px 2px 3px 3px rgba($black, 0.3);
}

</style>
