<template>
  <div class="container">
    <Header />
    <Modal v-show="isModal"/>
    <h2 class="tasks-title">A fazer</h2>
    <ul>
      <Task
        v-for="task in tasks"
        v-bind:key="task._id"
        v-bind:task="task"
      />
    </ul>
    <h2 class="tasks-title">Feitas</h2>
    <ul>
      <Task
      v-for="task in tasks_nochecked"
      v-bind:key="task._id"
      v-bind:task="task"
      />
    </ul>
    <button v-on:click="openModal" class="btn-form"><i class="material-icons">add</i></button>
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  import Task from "./components/Task.vue";
  import Modal from "./components/Modal.vue";
  import { TasksCollection } from "../api/collections/TasksCollection.js"

  export default {
      name: "App",
      components: {
        Header,
        Task,
        Modal
      },
      data() {
          return { isModal: false };
      },
      methods: {
        openModal() {
          this.isModal = true;
          document.querySelector('#modal-backdrop').classList.add('modal-backdrop');
          document.querySelector('#modal').classList.remove('hidden');
        }
      },
      meteor: {
        tasks() {
          return TasksCollection.find({ checked: true }, { sort: { createdAt: -1 } }).fetch();
        },
        tasks_nochecked() {
          return TasksCollection.find({ checked: false }, { sort: { createdAt: -1 } }).fetch();
        }
      }  
  };
</script>