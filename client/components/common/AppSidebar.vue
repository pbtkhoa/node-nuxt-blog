<template>
  <v-navigation-drawer fixed app width="260">
    <v-toolbar color="primary darken-1" dark>
      <img v-bind:src="logo" height="36" alt="Vue Material Admin Template">
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vue Material</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-list dense expand>
      <template v-for="(item, i) in menus">
        <!--group with subitems-->
        <v-list-group
          v-if="item.items"
          :key="item.name"
          :prepend-icon="item.icon"
          no-action="no-action"
          :value="checkParentTarget(item)"
        >
          <v-list-tile slot="activator" ripple="ripple">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <template v-for="(subItem, i) in item.items">
            <v-list-tile :key="i" :to="genChildTarget(subItem)" ripple="ripple">
              <v-list-tile-content>
                <v-list-tile-title>
                  <span>{{ subItem.title }}</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list-group>
        <v-subheader v-else-if="item.header" :key="i">{{ item.header }}</v-subheader>
        <v-divider v-else-if="item.divider" :key="i"></v-divider>
        <!--top-level link-->
        <v-list-tile
          v-else
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          rel="noopener"
          :key="item.name"
        >
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action v-if="item.subAction">
            <v-icon class="success--text">{{ item.subAction }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import logo from '~/static/v.png';
import menus from '~/config/menus';

export default {
  data() {
    return {
      logo,
      menus
    };
  },
  methods: {
    genChildTarget(subItem) {
      return {
        name: subItem.name
      };
    },
    checkParentTarget(parent) {
      if (parent.group) {
        return this.$route.name.indexOf(parent.group) > -1;
      }
      return false;
    }
  }
};
</script>
