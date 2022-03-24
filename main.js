const app= new Vue({
    el:'#app',
    data:{
        emails:[]
    },
    methods:{
        
    },
    mounted(){
        generateEmails=function(){
            const self=this;
            for(let i=0;i<10;i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then (function(result){
                    self.emails[i]=result.response.response;
                    console.log(i);
                });
            }
        }
    }
});
