<template>
  <div>
    <form class="form">
      <label for="writer">Writer name: </label>
      <input v-model="newWriter" type="text" max="500" />
      <br />
      <label for="img">Select image:</label>
      <input type="file" id="img" name="img" accept="image/*" v-on:change="newImg" />
      <br />
      <label for="headline">Headline </label>
      <input v-model="newHeadline" type="text" max="500" />
      <label>Your blogtext: </label>
      <textarea v-model="newNote" name="" id="" cols="30" rows="30"></textarea>
      <button type="submit" @click="addNote" 
        class="button"><router-link to="/" class="link">Post blog</router-link></button>
    </form>
  </div>
</template>

<script setup>

import { ref } from "vue"

const newImg = ref('/assets/person1.jpg')
const newNote = ref("Hej detta är min blog");
const newWriter = ref("Josefin Astborg");
const newHeadline = ref("Bästa bloggen i världen");
const notes = ref([]);

const addNote = () => {
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    writer: newWriter.value,
    img: newImg.value,
    headline: newHeadline.value,
    text: newNote.value,
    
  });
  addLocalStorage(notes)
};

const addLocalStorage = (notes) => {
    
    localStorage.setItem("notes", JSON.stringify(notes))
    JSON.parse(localStorage.getItem("notes"));   
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
.link{
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
