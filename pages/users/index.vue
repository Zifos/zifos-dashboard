<template>
  <div class="tab">
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"> Nombre y apellido</span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </a-table>
  </div>
</template>

<script>
  const columns = [
  {
    title: 'Nombre y apellido',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Rol',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
];

const data = [
  {
    key: '1',
    name: 'Federico Peralta',
    email: 'fedeperaltag@gmail.com',
    tags: ['front-end', 'developer'],
  },
  {
    key: '2',
    name: 'Federico Peralta',
    email: 'fedeperaltag@gmail.com',
    tags: ['front-end', 'developer'],
  },
  {
    key: '3',
    name: 'Federico Peralta',
    email: 'fedeperaltag@gmail.com',
    tags: ['front-end', 'developer'],
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/variables';

.ant-tag-geekblue {
  background-color: $navy-blue;
  color: $white;
  border: 1px solid $navy-blue;
  &:hover {
    background-color: $white;
    color: $navy-blue;
    transition: all .2s ease;
    border: 1px solid $navy-blue;
  }
}

</style>
