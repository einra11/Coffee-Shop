<template>
    <v-app>
    <v-container fluid grid-list-md>
        <v-layout column wrap>
            <v-flex sx12>
                <v-carousel>
                    <v-carousel-item
                    v-for="(item) in itemsPic"
                    :key="item.id"
                    :src="item.imageUrl"
                    ></v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
    <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    height="800"
    >
    
    <v-layout row wrap>
    <v-card light width="400">
                <v-card-title primary>
                    <router-link to="/" tag="span" style="cursor: pointer"><h4 class="display-3">
                    <!-- <v-icon color="success" size="100">check</v-icon> -->
                    <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c549.png" alt="" width="100"> East-Cafe`</h4></router-link>
                    </v-card-title>
                    <v-divider light></v-divider>
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
                </v-card>
                <!-- terminals -->
            <v-layout column wrap class="hidden-sm-and-down">
            <v-flex d-flex xs12 sm6 md4>
                <v-card light class="ml-1"
                v-for="(terminal,id) in terminals" :key="id"
                >
                <v-card-text>Terminal: {{id}}</v-card-text>
                <v-card-title primary><h4 class="display-3">
                    <v-icon color="success" size="64">av_timer</v-icon>
                    Serving <small>{{terminal.serving}}</small></h4>
                    </v-card-title>
                    <v-card-text>There are {{terminal.queued}} waitng</v-card-text>
                    <v-card-actions>
                    <v-btn
                    class="mx-0"
                    color="primary"
                    large
                    @click.prevent="getQueue()"
                >
                    Queue here!
                </v-btn>
              </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <!-- mobile form -->
        <v-layout column wrap class="hidden-sm-and-up">
            <v-flex xs12 sm6 md4>
                <v-card light class="mb-2"
                v-for="(terminal,id) in terminals" :key="id"
                >
                <v-card-title primary class="text-xs-center"><h3 class="display">
                    <v-icon color="success" size="40">av_timer</v-icon>
                    Serving <small>{{terminal.serving}}</small></h3>
                    </v-card-title>
                    <v-card-actions>
                    <v-btn
                    class="mx-0"
                    color="primary"
                    small
                    @click.prevent="getQueue()"
                >
                    Queue here!
                </v-btn>
              </v-card-actions>
                </v-card>
            </v-flex>
           
        </v-layout>
    </v-layout>
    </v-parallax>
    </v-container>
        <v-snackbar
      v-model="snackbar"
      bottom="bottom"
      right="right"
      :timeout="timeout"
    >
      {{ text }}
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>


    <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
    <v-form v-model="valid">
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Sign-in
          <v-spacer></v-spacer>
        </v-card-title>

        <v-card-text>
         
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>
                <v-text-field
                v-model="password"
                label="Password"
                required
                ></v-text-field>

                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    @click="confirmQueue()"
                    :disabled="!formIsValid"
                >
                    Get in line
                </v-btn>
                </v-card-actions>
      </v-card>
    </v-form>
    </v-dialog>
  </div>


    </v-app>
</template>
<script>
  export default {
    computed:{
        terminals(){
            return this.$store.getters.loadedterminals
        },
        formIsValid () {
            return this.email !== '' && this.password !== ''
        }
    },
    data: () => ({
      itemsPic: [
          {imageUrl:'https://www.liverpool-one.com/wp-content/uploads/2016/10/coffee-shops.jpg', id:'xtbzq1', title:'Coffee-Station1'},
           {imageUrl:'https://southendmencap.org.uk/wp-content/uploads/2018/04/Coffee-Shop-9.jpg', id:'xtbzq2', title:'Coffee-Station2'},
           {imageUrl:'https://cdn-images-1.medium.com/max/2000/1*phcY46KcO-gQnZpu005udg.jpeg', id:'xtbzq3', title:'Coffee-Station3'},
        ],
      snackbar : false,
      text:'Your are now in line!',
      timeout: 3000,
      dialog: false,
      
      valid: false,
      password: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      menuItems: [
          { icon: 'sentiment_satisfied_alt', title: 'Terminals', link: '/terminals' },
          { icon: 'person', title: 'Profile', link: '/profile' },
          { icon: 'face', title: 'Sign up', link: '/signup' },
          { icon: 'lock_open', title: 'Sign in', link: '/signin' }
        ],
      createQue:{
          userID:'',

      }

    }),
    methods:{
        getQueue:function(){
            
            this.dialog = true
            //  this.$router.push('/signup')
        },
        confirmQueue:function(){
            this.dialog = false
            this.snackbar = true
        }
    }
  }
</script>

<style>
</style>

