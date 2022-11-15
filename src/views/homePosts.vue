<template>
<div class="post-container">
    <h1>Blog Posts</h1>
    <div class="post-mini-container" v-for="note in notes" :key="note.id" > 
        <div class="post">
            <button class="delete" @click="deleteBtn(note)">x</button>
            <img class="img-post" :src="note.img"> 
            <p class="writer"> {{ note.writer }}</p>
            <p class="headline"> {{ note.headline }}</p>
            <p class="blog-text" > {{ note.text }}</p>
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

</script>

<style scoped>
.post-container{
    width: 50%;  
    text-align: center;
    margin: auto; 
}
.post{
    display: flex; 
    flex-direction: column; 
    margin: 0;
    justify-content: space-around;
    cursor: pointer;

}
.post-mini-container{
    border: 2px solid rgb(237, 234, 234); 
    border-radius: 20px; 
}
.post-mini-container:hover{
    border-color: rgb(253, 130, 130);
}
.img-post{
    width: 50px; 
    height: 50px; 
    padding: 15px; 
    border-radius: 50px; 
}
.blog-text{
    text-align: left; 
    padding: 8px; 
    font-size: 15px; 
     
}
.writer{ 
    font-size: 10px;
    text-align: right;
    padding-right: 15px;  
}
.headline{
    font-size: 20px;
    font-weight: bold; 
}

.delete{
    border: none; 
    background-color: white; 
    border-radius: 100%;
    width: 20px; 
    margin-left: 570px;
    margin-top: 5px; 
    cursor: pointer; 
      
}
.delete:hover{
    background-color: rgb(253, 130, 130);
}
</style>