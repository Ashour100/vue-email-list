const app= new Vue({
    el:'#app',
    data:{
        emails:[]
    },
    methods:{
        
    },
    mounted(){
            const self=this;
            for(let i=0;i<10;i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then (function(result){
                    self.emails.push(result.data.response);
                });
            }
            console.log(self.emails)
    }
});
