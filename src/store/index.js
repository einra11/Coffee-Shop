import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        loadedterminals:[
                {idCode:'035a', serving:'19', queued:'25'},
                {idCode:'035b', serving:'49', queued:'5'},
                {idCode:'035c', serving:'19', queued:'55'}
        ],
        loaderUser:{
            id:'xzbtxyyz23',
            userLevel:1,  //terminal
            email:'kennethclone55@gmail.com',
            password:'ero',
        },
        loadedLogs:[
            {
                value: false,
                customerID: '112425',
                name: 'dummy',
                dateTime: '9-24-2018',
                priorNumber: 1,
                status: 'Serving',
                rating: 4.0,
                terminalOccupied:0
              },
              {
                value: false,
                customerID: '112425',
                name: 'Law',
                dateTime: '9-24-2018',
                priorNumber: 7,
                status: 'Serving',
                rating: 4.0,
                terminalOccupied:1
              },
              {
                value: false,
                customerID: '112425',
                name: 'Luffy',
                dateTime: '9-24-2018',
                priorNumber: 67,
                status: 'Serving',
                rating: 4.0,
                terminalOccupied:2
              }
        ]
        
    },
    mutations:{},
    actions:{},
    getters:{
        loadedterminals (state){
            return state.loadedterminals.sort((terminalA, terminalB) => {
                return terminalA.index > terminalB.index
            })
        },
        loadedLogs (state){
            return state.loadedLogs.sort((logA, logB) => {
                return logA.dateTime > logB.dateTime
            })
        }
    }
})