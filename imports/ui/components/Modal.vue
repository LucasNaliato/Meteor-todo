<template>
    <div id="modal-backdrop" class="modal-backdrop">
    <div id="modal" class="modal">
        <form class="new-task" @submit.prevent="handleSubmit">
        <div class="input-group">
        <label for="input-task">Tarefa</label>
        <input id="input-task" class="input-task" type="text" placeholder="Ex: Pagar conta de energia" v-model="newTask">
        </div>
        <div class="input-group">
        <label for="input-category">Categoria</label>
        <input id="input-category" class="input-category" type="text" placeholder="Ex: Financeiro" v-model="newCategory">
        </div>
        <button type="submit" class="add-task">Adicionar</button>
        <button type="button" class="btn-close" @click="close">Fechar</button>
        </form>
    </div>
    </div>
</template>

<script>
    import { TasksCollection } from "../../api/collections/TasksCollection";

    export default {
        name: "Modal",
        data() {
            return {
                newTask: "",
                newCategory: "",
                isModalVisible: false
            }
        },
        methods: {
            handleSubmit(event) {
                TasksCollection.insert({
                    text: this.newTask,
                    category: this.newCategory,
                    checked: true,
                    createdAt: new Date()
                });

                this.newTask = "";
                this.newCategory = "";
            },
            close() {
                this.isModalVisible = false;
                document.querySelector('#modal-backdrop').classList.remove('modal-backdrop');
                document.querySelector('#modal').classList.add('hidden');
            }
        }
    }
</script>