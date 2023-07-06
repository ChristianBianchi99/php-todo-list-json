const { createApp } = Vue;

createApp({
    data() {
        return {
            todoItem: '',
            todoList: '',
            url: 'server.php',
        }
    },
    mounted() {
        axios.get(this.url).then((response) => {
            this.todoList= response.data;
        })
    },
}).mount('#app');