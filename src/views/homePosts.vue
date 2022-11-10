<template>
<div class="post-container">
    <h1>Blog Posts</h1>
    <div class="post-mini-container" > 
        <div  class="post" v-for="note in newnotes" :key="note.id" >
            <img class="img-post" :src="newImg"> 
            <p class="writer"> {{ note.writer }}</p>
            <p class="headline"> {{ note.headline }}</p>
            <p class="blog-text" > {{ note.text }}</p>
        </div>
    </div>
</div>
</template>

<script>
export default{
    name: 'homePosts',
   setup(){
    const newnotes = JSON.parse(localStorage.get('notes'))
    return {newnotes}
   }
} 
// // Returns new array
// function addData(key, item) {
//     // Get current array
//     let currentData = getData(key);

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
    font-size: 15px;
}


</style>