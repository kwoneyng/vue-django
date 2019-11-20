<template>
  <div class="todo-list">
    <div class="card" v-for="todo in todos" :key="todo.id">
      <div class="card-body d-flex justify-content-between">
        <span>{{ todo.title }}</span>
        <span @click="deleteTodo(todo)">삭제</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {  
  name: 'TodoList',
  components:{
  },
  props: {
    todos: {
      type: Array
    }
  },
  // data 와 비슷하게 사용되며 계산해서 값을 가져옴
  computed:{
    options(){
      return this.$store.getters.options
    }
  },

  methods:{
    deleteTodo(todo){
      
      const SERVER_IP = process.env.VUE_APP_SERVER_IP // 환경변수에 저장해 놓은 서버 IP를 가지고온다

      axios.delete(`${SERVER_IP}/api/v1/todos/${todo.id}/`, this.options)
        .then(response => {
          console.log(response)
          // const tragetTodo = this.todos.find(item =>{
          //   return item == todo
          // })
          const idx = this.todos.indexOf(todo)
          if (idx > -1){   // 찾는값이 없으면 -1을 반환
            this.todos.splice(idx,1)
          }

        })
        .catch(error => {
          console.error(error)
        })
    },
  }
}
</script>

<style>

</style>