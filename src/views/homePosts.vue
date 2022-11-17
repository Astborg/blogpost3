<template>
    <div v-if="showModal" @click="showModal = false" class="absolute w-screen h-screen bg-black opacity-75 z-10 flex cursor-pointer items-center justify-center">
        <div class="bg-white p-4 rounded-full">Please write a new blogpost! Click here or write a post!</div>
    </div>
<div class="w-6/12 text-center m-auto">
    <h1 class="text-4xl font-bold text-indigo-500 m-5">Blog Posts</h1>
    <div  class="border-2 border-slate-100 rounded-3xl hover:border-red-400" v-for="note in notes" :key="note.id" > 
        <div class="relative flex flex-col m-0 justify-around cursor-pointer">
            <button class="absolute top-0 right-0 w-5 h-5 cursor-pointer rounded-full hover:bg-red-400 p-2.5" @click="deleteBtn(note)">x</button>
            <img class="w-24 h-24 p-3.5 rounded-full" :src="note.img"> 
            <p class="text-xs text-right pr-3.5"> {{ note.writer }}</p>
            <p class="text-lg font-bold"> {{ note.headline }}</p>
            <p @click="showModal = true" class="text-left p-3.5 text-sm"> {{ note.text }}</p>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const notes = ref([]);

notes.value = JSON.parse(localStorage.getItem('notes'));

    function deleteBtn(note){
        notes.value.splice(notes.value.indexOf(note), 1);
        localStorage.setItem('notes', JSON.stringify(notes.value));


        notes.value = JSON.parse(localStorage.getItem('notes'));
        console.log(notes.value)
    }

const showModal = ref(false)
</script>
<style>

</style>

