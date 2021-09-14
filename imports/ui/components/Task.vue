<template>
    <li v-bind:class="taskClassName">
        <input type="checkbox" readOnly v-bind:checked="!this.task.checked"
        @click="toggleChecked">
        <span v-bind:class="{ done: !this.task.checked}" class="text">{{ this.task.text }}</span>
        <span class="category">{{ this.task.category }}</span>
        <a @click="editThisTask"><i class="material-icons edit">edit</i></a>
        <a @click="deleteThisTask"><i class="material-icons delete">remove_circle_outline</i></a>
    </li>
</template>

<script>
    import { TasksCollection } from "../../api/collections/TasksCollection.js";
    export default {
        name: "Task",
        props: ["task"],
        data() {
            return {};
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
            editThisTask() {
                TasksCollection.update(this.task._id, {
                    $set: { text: "Abc" }
                });
            },
            deleteThisTask() {
                TasksCollection.remove(this.task._id);
            },
        }
    };
</script>