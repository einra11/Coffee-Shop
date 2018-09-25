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
                            <template v-if="props.item.terminalOccupied == id" slot="items" slot-scope="props">
                              <td>{{ props.item.customerID }}</td>
                              <td class="text-xs-right">{{ props.item.name }}</td>
                              <td class="text-xs-right">{{ props.item.dateTime}}</td>
                              <!-- <td class="text-xs-right">{{ props.item.priorNumber}}</td> -->
                              <td class="text-xs-right">{{ props.item.status}}</td>
                              <!-- <td class="text-xs-right">{{ props.item.rating  }}</td> -->
                            </template>
                          </v-data-table>

                      </div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
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
      }
    },
  data () {
    return {
      headers: [
          {
            text: 'Customers ID',
            align: 'left',
            sortable: false,
            value: 'customerID'
          },
          { text: 'Name', value: 'name' },
          { text: 'Date/Time', value: 'dateTime' },
          // { text: 'Priority Number', value: 'priorNumber' },
          { text: 'Status', value: 'status' },
          // { text: 'Rating', value: 'rating' }
        ],
    }
  },
}
</script>