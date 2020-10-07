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


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
 
  &__password{
    display: flex;
    justify-content: center;
    align-items: center;
    height:80%;
    width: 70%; 
    background-color: #f6e8d9;
    border-radius: 2rem;
    box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.3);

  }
}

</style>