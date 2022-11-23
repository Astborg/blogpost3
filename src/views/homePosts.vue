<template>
  <div>
    <div v-if="showModal" @click="showModal = false">
      <div
        class="relative w-screen h-screen bg-black opacity-75 z-10 
        flex cursor-pointer items-center justify-center"
      >
        <div v-for="(note, index) in notes" :key="note.id" class="">
          <div
            v-if="selectedIndex === index"
            class="bg-white items-center justify-center opacity-100 p-8 
            m-20 rounded-xl"
          >
            <p class="text-center font-bold text-3xl">{{ note.headline }}</p>
            <p class="font-semibold text-2xl">{{ note.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-6/12 text-center m-auto">
    <h1 class="text-4xl font-bold text-indigo-500 m-5">Blog Posts</h1>
    <input type="text" v-model="search" placeholder="Search in blogposts..." class="border-2 p-0.5">
    <br>
    <br>
    <div v-if="notes.length">
        <Sortable :list="filteredPosts()" item-key="id" tag="div">
        <template #item="{ element, index }" >
            <div
          class="draggable border-2 border-slate-100 rounded-3xl hover:border-red-400"
          :key="index"
          >
          <div class="relative flex flex-col m-0 justify-around cursor-pointer">
            <button
              class="absolute top-0 right-0 w-5 h-5 cursor-pointer rounded-full hover:bg-red-400 p-2.5"
              @click="deleteBtn(element)"
            >x</button>
            <img class="w-24 h-24 p-3.5 rounded-full" :src="element.img" />
            <p class="text-xs text-right pr-3.5">{{ element.writer }}</p>
            <p class="text-lg font-bold">{{ element.headline }}</p>
            <p @click="updateValues(index)" class="text-left p-3.5 text-sm">
              {{ element.text }}
            </p>
          </div>
        </div>
        </template>
        </Sortable>
    </div>
    <div v-else class="text-5xl">Welcome Write A New Post!</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Sortable } from "sortablejs-vue3"

const notes = ref([]);
const selectedIndex = ref(null);
const showModal = ref(false);
const search = ref('')

function filteredPosts(){
    if(!search.value){
        return notes.value
    }else {
        return notes.value.filter(note => note.text.toLowerCase().includes(search.value.toLowerCase()))
    }
    
}
const updateValues = (index) => {
  selectedIndex.value = index
  showModal.value = true
}
notes.value = JSON.parse(localStorage.getItem("notes"));

function deleteBtn(note) {
  notes.value.splice(notes.value.indexOf(note), 1);
  localStorage.setItem("notes", JSON.stringify(notes.value));

  notes.value = JSON.parse(localStorage.getItem("notes"));
  console.log(notes.value);
}
</script>
<style></style>
