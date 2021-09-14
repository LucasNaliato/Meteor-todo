<template>
    <header>
        <h1 class="date-title">{{ todayDate }}</h1>
        <span class="checked-span">{{no_checked}} para fazer, {{checked}} feitas</span>
    </header>
</template>

<script>
    import moment from 'moment';
    import { TasksCollection } from "../../api/collections/TasksCollection.js"

    export default {
        name: "Header",
        data() {
            return {}
        },
        methods: {},
        meteor: {
            todayDate() {
                let date = moment().format("LL")
                return date
            },
            checked() {
                let checkeds = TasksCollection.find({ checked: false }, { sort: { createdAt: -1 }}).fetch();
                return checkeds.length;
            },
            no_checked() {
                let no_checkeds = TasksCollection.find({ checked: true }, { sort: { createdAt: -1 }}).fetch();
                return no_checkeds.length;
            },
        }
    }
</script>