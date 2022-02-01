 
 
 //引入
 import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';


 createApp({

     data(){

         return{

              apiurl:'https://vue3-course-api.hexschool.io/v2/admin/signin' ,
              user:{
                  username:'',
                  password:''
              }
            

          
         }
     },

     methods:{

      login(){

          console.log(  this.apiurl , this.user  )

axios.post( this.apiurl , this.user )
.then( (res) => {
console.log(res);

//解構
const { token, expired } = res.data;

//console.log( token, expired );

alert(`${res.data.message}`);



document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
  window.location = 'week4.html';


} )
.catch( (err) => {
alert(err.data.message);
} )

}


     },

     mounted(){

         
     }




 }).mount('#app');


