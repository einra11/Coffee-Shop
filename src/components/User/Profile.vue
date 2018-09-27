<template>
<v-app>
    <v-card>
      <v-container
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card
            light
             class="ma-4">
              <v-layout>
                <v-flex xs5>
 <v-layout column wrap class="ml-2">
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
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div>
                          <v-data-table
                            :headers="headers"
                            :items="logs"
                            hide-actions
                            class="elevation-1"
                        >
                            <template slot="items" slot-scope="props">
                                <td class="text-xs-left">{{ props.item.customerID }}</td>
                                <td class="text-xs-left">{{ props.item.name }}</td>
                                <td class="text-xs-left">{{ props.item.dateTime}}</td>
                                <td class="text-xs-left">{{ props.item.terminalOccupied}}</td>
                                <td v-if="props.item.status == 'Waiting'" class="text-xs-left">{{ props.item.status}}<v-progress-circular
                                        indeterminate
                                        color="green"
                                        ></v-progress-circular></td>
                                <td v-else-if="props.item.status == 'Serving'" class="text-xs-left">{{props.item.status}}<v-progress-circular
                                        indeterminate
                                        color="red"
                                        ></v-progress-circular></td>
                                          <td v-else-if="props.item.status == 'Done'" class="text-xs-left"> <v-icon>
                                        check_circle_outline</v-icon> {{props.item.status}}</td>            
                            </template>
                        </v-data-table>
                      </div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions>
                <v-btn flat dark @click="test1()">Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
            
        </v-layout>
      </v-container>
    </v-card>
    </v-app>
         
    
</template>
<script>
    var moment = require('moment')
    
  export default {
    computed:{
        terminals(){
            return this.$store.getters.loadedterminals
        },
        formIsValid () {
            return this.email !== '' && this.password !== ''
        },
         logs(){
          return this.$store.getters.loadedLogs
        }
    },
    data()  {
        return{
             itemsPic: [
                {imageUrl:'https://www.liverpool-one.com/wp-content/uploads/2016/10/coffee-shops.jpg', id:'xtbzq1', title:'Coffee-Station1'},
                {imageUrl:'https://southendmencap.org.uk/wp-content/uploads/2018/04/Coffee-Shop-9.jpg', id:'xtbzq2', title:'Coffee-Station2'},
                {imageUrl:'https://cdn-images-1.medium.com/max/2000/1*phcY46KcO-gQnZpu005udg.jpeg', id:'xtbzq3', title:'Coffee-Station3'},
                ],
             headers: [
          {
            text: 'Customers ID',
            align: 'left',
            sortable: false,
            value: 'customerID'
          },
          { text: 'Priority Code', value: 'name' },
          { text: 'Date/Time', value: 'dateTime' },
          { text: 'Terminal', value: 'terminalOccupied' },
          { text: 'Status', value: 'status' },
        ],
                }
    },
    methods:{
        getQueue:function(id){
            
            this.dialog = true
            this.createQue.terminalOccupied = id
            console.log(this.terminalOccupied)
            //  this.$router.push('/signup')
        },
    },
    mounted (){
    },

  }
</script>
<style>
.v-progress-circular{margin: 1rem}
    
</style>
