<template>
    <div class="task-container">
    <li v-bind:class="taskClassName">
        <input type="checkbox" readOnly v-bind:checked="!this.task.checked"
        @click="toggleChecked">
        <span v-bind:class="{ done: !this.task.checked}" class="text">{{ this.task.text }}</span>
        <a v-on:click="deleteThisTask"><i class="material-icons delete">clear</i></a>
        <p class="category">{{ this.task.category }}</p>
    </li>
    </div>
</template>

<script>
    import { TasksCollection } from "../../api/collections/TasksCollection.js";

    export default {
        name: "Task",
        props: ["task"],
        data() {
            return {
                isModalEdit: false,
                taskId: this.task._id,
                taskText: this.task.text,
                taskCategory: this.task.category
            };
        },
        computed: {
            taskClassName: function() {
                return this.task.checked ? "checked" : "";
            }
        },
        methods: {
            toggleChecked() {
                TasksCollection.update(this.task._id, {
                    $set: { checked: !this.task.checked }
                });
            },
            deleteThisTask() {
                TasksCollection.remove(this.task._id);
            },
        }
    };
</script>