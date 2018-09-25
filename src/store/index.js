import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        loadedterminals:[
                {idCode:'035a', serving:'19', queued:'25'},
                {idCode:'035b', serving:'49', queued:'5'},
                {idCode:'035c', serving:'29', queued:'55'}
        ],
        user:null,
        loading: false,
        error: null,
        loadedLogs:[

        ]
        
    },
    mutations:{
        setLoadedLogs (state, payload){
            state.loadedLogs = payload
        },
        createQueSubmit (state, payload){
            state.loadedLogs.push(payload)
        },
        setUser (state, payload){
            state.user = payload
        },
        setLoading (state, payload) {
            state.loading = payload
        },
        setError (state, payload){
            state.error = payload
        },
        clearError (state, payload) {
            state.error = null
        }
    },
    actions:{
        loadLog ({commit}){
            commit('setLoading', true)
            firebase.database().ref('logs').once('value')
            .then((data) => {
                const logs = []
                const obj = data.val()
                for (let key in obj){
                    logs.push({
                        customerID:key,
                        dateTime:obj[key].dateTime,
                        // priorNumber:obj[key].priorNumber,
                        status:obj[key].status,
                        terminalOccupied:obj[key].terminalOccupied
                     })
                }
                commit('setLoadedLogs', logs)
                commit('setLoading', false)
            })
            .catch(
                (error) => {
                    console.log(error)
                    commit('setLoading', false)
                }
            )
        },
        createQueSubmit ({commit}, payload){
            const logs ={
                // name: payload.name,
                dateTime: payload.dateTime.toISOString(),
                // priorNumber: payload.priorNumber,
                status: payload.status,
                // rating: payload.rating,
                terminalOccupied: payload.terminalOccupied
            }
            firebase.database().ref('logs').push(logs)
                .then((data) =>{
                    const key = data.key
                    commit('createQueSubmit', {
                        ...logs,
                        id: key
                    })
                    console.log(key)
                })
                .catch((error) => {
                    console.log(error)
                })
            //Reach out to firebase an store it!!!
        },
        signUserUp ({commit}, payload){
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        userLevel: ''
                    }
                    commit('setUser', newUser)
                }
            )
            .catch(
                error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                }
            )
        },
        signUserIn ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then (
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.uid,
                            userLevel: ''
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch (
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        },
        clearError ({commit}) {
            commit('clearError')
        }
    },
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
        },
        user (state) {
            return state.user
        },
        loading (state) {
            return state.loading
        },
        error (state) {
            return state.error
        }
    }
})