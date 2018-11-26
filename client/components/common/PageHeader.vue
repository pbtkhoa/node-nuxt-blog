<template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <div class="page-header-left">
      <h1 class="pr-3">{{title}}</h1>
    </div>
    <v-breadcrumbs :items="breadcrumbs" divider="-">
      <template slot="item" slot-scope="props">
        <v-breadcrumbs-item>{{ props.item}}</v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </v-layout>
</template>

<script>
import menus from '~/config/menus';
export default {
  data() {
    return {
      title: ''
    };
  },
  computed: {
    breadcrumbs: function() {
      let breadcrumbs = [];
      menus.forEach(item => {
        if (item.items) {
          let child = item.items.find(i => {
            return i.name === this.$route.name;
          });
          if (child) {
            breadcrumbs.push(item.title);
            breadcrumbs.push(child.title);
            this.setTitle(child.title);
          }
        } else {
          if (item.name === this.$route.name) {
            this.setTitle(item.title);
            breadcrumbs.push(item.title);
          }
        }
      });
      return breadcrumbs;
    }
  },
  methods: {
    setTitle(newTitle) {
      this.title = newTitle;
    }
  }
};
</script>

<style >
.v-breadcrumbs li:last-child a {
  cursor: default;
  pointer-events: none;
  color: rgba(0, 0, 0, 0.38);
}
</style>
