<template>
  <v-toolbar color="primary" fixed dark app>
    <v-toolbar-title>
      <v-toolbar-side-icon></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-spacer/>
    <v-menu origin="center center" left offset-y :nudge-bottom="10">
      <v-btn icon large flat slot="activator">
        <v-avatar size="30px">
          <img :src="noneAvatar">
        </v-avatar>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item,index) in items"
          :to="!item.href ? { name: item.name } : null"
          @click="item.click"
          ripple="ripple"
          :key="index"
        >
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
import noneAvatar from '~/static/avatar.png';
export default {
  data: () => ({
    noneAvatar,
    items: [
      {
        icon: 'account_circle',
        href: '#',
        title: 'Profile',
        click: e => {
          console.log(e);
        }
      },
      {
        icon: 'fullscreen_exit',
        href: '#',
        title: 'Logout',
        click: e => {
          window.getApp.$emit('APP_LOGOUT');
        }
      }
    ]
  })
};
</script>
