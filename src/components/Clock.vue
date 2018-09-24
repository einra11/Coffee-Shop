<template >
<v-app style="height:50px; width:420px;">
<div
    id="e3"
    style="max-width: 500px;"
    class="grey lighten-3"
 >
    <v-toolbar
    color="#4E342E"
    dark
    flat
>
    <v-toolbar-title class="white--text"><h1>Time: <Clock :displaySeconds="true" :blink="true"></Clock></h1></v-toolbar-title>
  </v-toolbar>
  </div>

  </v-app>
</template>
<script>
    import Clock from 'vue-digital-clock'
    export default {
        name: 'app',
            components: {
                    Clock,
            },
    }
</script>