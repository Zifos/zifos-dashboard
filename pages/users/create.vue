<template>
  <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="Nombre">
      <a-input v-model="form.name" />
    </a-form-model-item>
    <a-form-model-item label="Apellido">
      <a-input v-model="form.surname" />
    </a-form-model-item>
    <a-form-model-item label="Email">
      <a-input v-model="form.email" />
    </a-form-model-item>
    <a-form-model-item label="Rol">
      <a-select v-model="form.rol">
        <a-select-option value="developer">
          Developer
        </a-select-option>
        <a-select-option value="front-end">
          Front-End
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        Create
      </a-button>
      <a-button style="margin-left: 10px;">
        Cancel
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        surname: '',
        email: '',
        rol: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
  },
};
</script>

<style lang="scss" scoped>



</style>
