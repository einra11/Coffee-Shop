<template>
  <v-app>
    <v-navigation-drawer absolute disable-resize-watcher v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      <v-toolbar
      clipped-left
      dark
      class="primary"
    >
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up ">
      </v-toolbar-side-icon>
      <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c549.png" alt="" width="35">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"><h4 class="display-2">East-Coffee</h4></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer class="pa-3 primary" dark>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </v-app>
  
</template>
<script>

export default {
  data () {
    return {
      sideNav: false,
        menuItems: [
          { icon: 'sentiment_satisfied_alt', title: 'Terminals', link: '/terminals' },
          { icon: 'person', title: 'Profile', link: '/profile' },
          { icon: 'face', title: 'Sign up', link: '/signup' },
          { icon: 'lock_open', title: 'Sign in', link: '/signin' }
        ],
      
    }
  },
}
</script>
