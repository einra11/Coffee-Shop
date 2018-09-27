<template>
    <v-app>
    <v-card>
      <v-container
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card
            dark
            v-for="(terminal,id) in terminals" :key="id"
             color="#EF6C00" class="ma-4">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://southendmencap.org.uk/wp-content/uploads/2018/04/Coffee-Shop-9.jpg"
                    height="500px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Terminal {{id}} <v-divider light></v-divider></div>
                      <div>CODE: {{terminal.idCode}}</div>
                      <div>
                          <v-data-table
                            :headers="headers"
                            :items="logs"
                            :loading="loading"
                            light
                          >
                            <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                            <template v-if="props.item.terminalOccupied === id" slot="items" slot-scope="props">
                              <td>{{ props.item.customerID }}</td>
                              <td class="text-xs-left">{{ props.item.dateTime}}</td>
                              <td class="text-xs-left">{{ props.item.status}}</td>
                              <td class="text-xs-left">
                                <v-btn class="info" :disabled="props.item.status == 'Serving' || props.item.status == 'Done'" @click="serveCust(props.item.customerID)"><v-icon>room_service</v-icon>Serve</v-btn>
                               <v-btn class="warning" :disabled="props.item.status == 'Done'" @click="jobDone(props.item.customerID, props.item.dateTime)"><v-icon>check_circle_outline</v-icon>Done</v-btn></td>
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
export default {
  computed:{
        terminals(){
            return this.$store.getters.loadedterminals
        },
        logs(){
          return this.$store.getters.loadedLogs
        },
        loading(){
          return this.$store.getters.loading
      },
      myfilter(){
        return new RegExp('/DONE/g').test(this.logs.dateTime)
      }
    },
  data () {
    return {
      myRE: new RegExp('DONE'),
      headers: [
          {
            text: 'Customers ID',
            align: 'left',
            sortable: false,
            value: 'customerID'
          },
          { text: 'Date/Time', value: 'dateTime' },
          { text: 'Status', value: 'status' },
        ],
    }
  },
  methods:{
   serveCust(cusID){
      this.$store.dispatch('makeServe', {
        id: cusID,
        status:'Serving'
      })
    },
    jobDone(cusID, dateT){
      this.$store.dispatch('doneServe', {
        id: cusID,
        status:'Done',
        dateTime: 'DONE' + dateT,
      })
    }
  }
}
</script>