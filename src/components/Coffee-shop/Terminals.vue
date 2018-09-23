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
             color="cyan darken-2" class="ma-4">
              <v-layout>
                <v-flex xs5>
                  <v-card-media
                    src="https://southendmencap.org.uk/wp-content/uploads/2018/04/Coffee-Shop-9.jpg"
                    height="500px"
                    contain
                  ></v-card-media>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Terminal {{id}}</div>
                      <div>{{terminal.idCode}}</div>
                      <div>
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
  data () {
    return {
      terminals:[
          {idCode:'035a', serving:'69', queued:'25'},
          {idCode:'035b', serving:'49', queued:'5'},
          {idCode:'035c', serving:'19', queued:'55'}
      ]
    }
  },
}
</script>