<template>
  <div class="login-container">
    <div> 
      <a-row type="flex" justify="center">
        <a-col :flex="auto" class="logo">
          (Logo)
        </a-col>
      </a-row>
    </div>

    <div>
      <a-row>
        <a-col :span="14" :offset="5" class="tabs">
          <a href="#">Login</a>
          <a href="#">Singup</a>
        </a-col>
      </a-row>
    </div>

    <a-row>
      <a-col :span="14" :offset="5" align="left" class="login-input">
        <div class="components-input-demo-presuffix">
          <a-input ref="userNameInput" v-model="userName" placeholder="Email"></a-input>
        </div>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="14" :offset="5" class="password-input">
        <a-input-password placeholder="Password" />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="14" :offset="5" class="col-5">
        <a-checkbox @change="onChange" class="checkbox">
          Remember me
        </a-checkbox>
        <a href="#" class="forgot-pass">Forgot password?</a>
      </a-col>
    </a-row>
 
    <a-row>
      <a-col :span="14" :offset="5" class="col-6">
        <a-button type="primary" html-type="submit" class="btn">
          Login
        </a-button>
      </a-col>
    </a-row>

  </div>
</template>

<script>
export default {
    name: 'login',
    data() {
      return {
        userName: '',
      };
    },
    methods: {
      emitEmpty() {
        this.$refs.userNameInput.focus();
        this.userName = '';
      },
       onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      },
    },
  };

</script>

<style lang="css" scoped>

.login-container {
  width: 45%;
  background-color: #252525;
  padding: 2rem 0 4rem 0;
  color: #FFFFFF;
}

.tabs {
  display: flex;
  justify-content: space-around;
  height: 2rem;
}

.tabs a {
  color: #9F9F9F;
}

.tabs a:hover {
  color: #BCBCBC;
}

.login-input {
  margin-top: 0.75rem;
}

.password-input {
  margin-top: 0.75rem;
}

.col-5 {
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
}

.checkbox {
  font-size: 12px;
  color: #9F9F9F;
}

.forgot-pass {
  font-size: 12px;
  margin-left: 0.2rem;
  color: #9F9F9F;
}

.forgot-pass:hover, .checkbox:hover {
  color: #BCBCBC;
}

.col-6 {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.btn {
  width: 60%;
  border-radius: 0;
  background-color: #0F0F0F;
  color: #FFFFFF;
  border: none;
}

.btn:hover {
  border: 2px solid #353535;
}

</style>
