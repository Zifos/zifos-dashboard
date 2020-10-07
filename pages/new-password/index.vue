<template>
  <div class="container">
    <div class="container__password">
      <new-password></new-password>
    </div>
  </div>
</template>

<script>
export default {
    layout: "login",
    name:"New-password"
}
</script>

<style lang="scss" scoped>
@import '~/assets/variables';

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: $bg-color;
 
  &__password{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 359px;
    height: 438px;
    background-color: $bg-login;
    border-radius: 2rem;
    box-shadow: 2px 2px 3px 3px rgba($black, 0.3);

  }
}
</style>

