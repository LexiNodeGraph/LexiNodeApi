<template>
  <div class="bg-page">
    <NavbarComp/>
   
      
       <iframe width="70%" height="700px" allowfullscreen="allowfullscreen" src="http://localhost:3000/demo" title="Sigma.js demo"></iframe>
      



  
    <FooterComp/>
    </div>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue"
import FooterComp from "./components/FooterComp.vue"


export default {
    components: {
    FooterComp,
    NavbarComp,
}

}
</script>

<style>
body { 
  margin: 0; 
  font-size: 25px;
  font-family: 'Bebas Neue', 'cursive';
}

.bg-page {
  background-image: url("@/images/bgi.jpeg");
  border: solid;
  background-repeat: no-repeat; 

}


.main {
  margin-top: 100px;
  text-align: center;
  margin-inline: 100px;
  color: white;
}

.title{
  font-size: 3rem;;
}

.text-area {
  margin-block: 100px;
}

</style>
       