<template> 

    <div id="valid"> 
         <form v-on:submit.prevent="onSubmit">
   
    <p> First Name </p>
    
    <div>
        <input v-validate.initial="'required|alpha|min:10'" v-model="first_name"  type="text" name="first name"> 
        <span v-show="errors.has('first name')" class="help is-danger">{{ errors.first('first name') }}</span> 
    </div>
    
    <p> Phone Number  </p>
    
    <div> 
        <input v-validate.initial="'required|min:4'" v-model="number"  type="number" name="number"> 
        <span v-show="errors.has('number')" class="help is-danger">{{ errors.first('number') }}</span> 
    </div>
    
    <p> Email </p>
    
    <div>
        <input v-validate.initial="'required|email'" v-model="email" type="text" name="email">
        <span v-show="errors.has('email')" class="help is-danger"> {{errors.first('email')}}</span>
   </div>
   
    <p> Message </p>
    
   <div> 
        <textarea v-validate.initial="'required|alpha_dash|max:250'" v-model="message" name="txtarea" placeholder="add multiple lines"></textarea>
        <span v-show="errors.has('txtarea')" class="help is-danger"> {{errors.first('txtarea')}}</span>
   </div>
   
   
   <button type="submit"> Submit </button>
   
   </form>
    
    
    </div>


</template>



<script>
    export default {
  
    data () {
    return {
         email: '',
            number: '',
            first_name: '',
            message: '',
      
    }
  }


}

</script>