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
    >
    <v-layout row wrap>
    <v-card light width="400">
                <v-card-title primary><h4 class="display-3">
                    <v-icon color="success" size="100">check</v-icon>
                    East-Cafe`</h4>
                    </v-card-title>
                    <v-card-text>Mas lami pa sa imong EX!</v-card-text>
                    <v-card-actions>
                    <v-btn
                    class="mx-0"
                    color="primary"
                    large
                >
                    Queue here!
                </v-btn>
              </v-card-actions>
                </v-card>
                <!-- terminals -->
            <v-layout column wrap class="hidden-sm-and-down">
            <v-flex d-flex xs12 sm6 md4>
                <v-card light
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
                >
                    Queue here!
                </v-btn>
              </v-card-actions>
                </v-card>
            </v-flex>
           
        </v-layout>
        <!-- mobile form -->
        <v-layout column wrap class="hidden-sm-and-up">
            <v-flex d-flex xs12 sm6 md4>
                <v-card light
                v-for="(terminal,id) in terminals" :key="id"
                >
                <v-card-title primary class="text-xs-center"><h3 class="display">
                    <v-icon color="success" size="64">av_timer</v-icon>
                    Serving <small>{{terminal.serving}}</small></h3>
                    </v-card-title>
                    <v-card-actions>
                    <v-btn
                    class="mx-0"
                    color="primary"
                    small
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
    </v-app>
</template>
<script>
  export default {
    data: () => ({
      itemsPic: [
          {imageUrl:'https://www.liverpool-one.com/wp-content/uploads/2016/10/coffee-shops.jpg', id:'xtbzq1', title:'Coffee-Station1'},
           {imageUrl:'https://southendmencap.org.uk/wp-content/uploads/2018/04/Coffee-Shop-9.jpg', id:'xtbzq2', title:'Coffee-Station2'},
           {imageUrl:'https://cdn-images-1.medium.com/max/2000/1*phcY46KcO-gQnZpu005udg.jpeg', id:'xtbzq3', title:'Coffee-Station3'},
        ],
        terminals:[
          {idCode:'035a', serving:'69', queued:'25'},
          {idCode:'035b', serving:'49', queued:'5'},
          {idCode:'035c', serving:'19', queued:'55'}
      ]
    })
  }
</script>

<style>
</style>

