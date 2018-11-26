<template>
  <v-app light>
    <app-sidebar/>
    <app-toolbar></app-toolbar>
    <v-content>
      <page-header/>
      <div class="page-wrapper">
        <nuxt/>
      </div>
      <v-footer height="auto" class="white pa-3 app--footer">
        <span class="caption">isocked.com Design &copy; {{ new Date().getFullYear() }}</span>
        <v-spacer></v-spacer>
        <span class="caption mr-1">Make With Love</span>
        <v-icon color="pink" small>favorite</v-icon>
      </v-footer>
    </v-content>
    <v-navigation-drawer :right="right" v-model="rightDrawer" temporary fixed>
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import AppToolbar from '~/components/common/AppToolbar';
import AppSidebar from '~/components/common/AppSidebar';
import PageHeader from '~/components/common/PageHeader';

export default {
  components: {
    AppToolbar,
    AppSidebar,
    PageHeader
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    };
  }
};
</script>
<style scoped>
.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
}
</style>
