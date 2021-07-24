const App = {
    async mounted(){
      const res = await fetch('api/server')
      this.servers = await res.json()
    },
    data: () => ({
        servers: []
    }),
    methods: {
        async remove(id){
            const res = await fetch(`api/server/${id}`, {method: 'DELETE'})
            this.servers = this.servers.filter(s => s.id !== id)
        }
    }

}
Vue.createApp(App).mount('#app')
