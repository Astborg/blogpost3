<template>
   <div class="container">
    <div>
      <img class="w-28 pl-5 pt-5" src="@/assets/bloglogo.jpg">
    </div>
    <div class="bg-slate-100 w-screen">
        <navbar>
                <ul class="m-auto list-none flex justify-center ">
                    <router-link active-class="font-bold" to="/" class="bg-slate-100 rounded-full p-2.5 m-2.5 cursor-pointer list-none text-black hover:bg-green-400  ">Home</router-link>
                    <router-link active-class="font-bold" to="/writePost" class="bg-slate-100 rounded-full  p-2.5 m-2.5 cursor-pointer list-none text-black hover:bg-green-400 ">Write a post</router-link>
                </ul>
        </navbar>
    </div>   
  </div>
</template>
<script setup >
 import { RouterLink } from 'vue-router';

</script>
