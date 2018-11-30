
<template> 
<div> 
<h1> dick </h1> 
<h1>  {{single_quote}} </h1>

</div>

</template>

 <script>
    export default {
  
    data () {
    return {
         quote:['Never Settle - OnePlus', 'Do not do it better do it differently - Steve Jobs'],
         single_quote:""

    }
    
  }, 
 mounted: function(){

    
     this.single_quote
     this.single_quote = this.quote[Math.floor(Math.random() * (this.quote.length))];
     
 }

}

</script>



