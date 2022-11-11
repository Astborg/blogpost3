<template>
  <div>
    <form class="form">
      <label for="writer">Writer name: </label>
      <input v-model="newWriter" type="text" max="500" />
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
      <textarea v-model="newNote" name="" id="" cols="30" rows="30"></textarea>
      <button type="submit" @click="addNote" class="button">
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

    function getNote(){
      return JSON.parse(localStorage.getItem("notes"))
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

      localStorage.setItem("notes", JSON.stringify(notes))
      router.push('/')
    }
</script>

<style scoped>
.form {
  width: 50%;
  text-align: left;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.button {
  background-color: rgb(253, 130, 130);
  padding: 5px;
  border: none;
}
.link {
  font-size: 15px;
  text-decoration: none;
  color: black;
}
.button:hover {
  background-color: rgb(247, 186, 186);
}
p {
  color: rgb(193, 15, 15);
}
</style>
