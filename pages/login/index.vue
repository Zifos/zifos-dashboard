<template>
  <div class="container">
    <div class="form-container">
      <div>
        <login></login>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
  name: "layoutView",

  methods: {}
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
