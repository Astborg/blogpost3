<template>
  <div>
    <form class="w-6/12 text-left m-auto flex flex-col">
      <label for="writer">Writer name: </label>
      <input v-model="newWriter" type="text" max="500" class="" />
      <br />
      <label for="img">Select image:</label>
      <input
        type="text"
        id="img"
        name="img" v-model="newImg">
      <br />
      <label for="headline">Headline </label>
      <input v-model="newHeadline" type="text" max="500" />
      <label>Your blogtext: </label>
      <textarea v-model="newNote" name="" id="" cols="20" rows="20"></textarea>
      <button type="submit" @click="addNote" class="bg-red-400 hover:bg-red-300 p-1.5 outline-none mb-5">
        Post blog
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

    const newImg = ref("");
    const newNote = ref("");
    const newWriter = ref("");
    const newHeadline = ref("");
    const router = useRouter()

    function getNote() {
    if (localStorage.getItem("notes")) {
    return JSON.parse(localStorage.getItem("notes"));
    }

    return [];
  }

    function addNote(){
      let notes = getNote()

      const note = {
        id: Math.floor(Math.random() * 1000000),
        img: newImg.value,
        writer: newWriter.value,
        headline: newHeadline.value,
        text: newNote.value,
      }
      notes = [...notes, note]

      localStorage.setItem("notes",JSON.stringify(notes))
      router.push('/')
    }

</script>

<style scoped>

.link {
  font-size: 15px;
  text-decoration: none;
  color: black;
}

</style>
