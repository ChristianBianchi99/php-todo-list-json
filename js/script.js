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
    methods: {
        addTask(){
            let data={
                todoItem: {'text': this.todoItem, 'done': false}
            }
            axios.post(this.url, data, {headers:{'Content-Type': 'multipart/form-data'}}).then((response) => {
                this.todoItem= '';
                this.todoList= response.data;
            })
        }
    },
}).mount('#app');