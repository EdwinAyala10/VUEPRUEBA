<template>
    <div>
        <h1> Este es mi componente  {{msg}} </h1>
        <h2> {{subtitle}}</h2>
        <button v-on:click="dos += 1">Add 1</button> {{dos}} 
        <div class="user" v-for="user in arrayUser" :key="user.id">
            <h3>{{user.name}}</h3>
        </div>   
        <div class="user" v-for="user1 in arrayUserFetch" :key="user1.id">
            <h3>{{user1.name}}</h3>
        </div>   
        <button @click="calculate()">Calculate</button>  
        <select name="" @change="calculate($event)" id="select">
            <option value="uno">listar 1</option>
            <option value="dos">listar 2</option>
        </select>
        <input v-model="codeUser" @keyup.enter="crearPaciente" type="text" class="form-control" placeholder="Nombre">
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'MiComponente',
    props: {
        msg: String
    },
    data(){
        return {
            contador:0,
            dos:0,
            arrayUser:[],
            arrayUserFetch: [],
            value:20,
            //codeUser:'GFLORES'
        }
    },
    mounted(){
        let this_ = this;
        axios.post('http://localhost/Bancosmym/public/api/postventa/users/by-roles',{
            id:'MPEREZ'
        })
        .then(  function(res){
            this_.arrayUser = res.data;
            console.log(this_.arrayUser);
        });
    },
    methods: {
      calculate(event) {
        let aux = this.value;
        let this_ = this;
        console.log(this.double(aux));
        console.log(event.target.value);
        fetch('http://localhost/Bancosmym/public/api/postventa/users/by-roles',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:this_.codeUser
            })
        } )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this_.arrayUserFetch = data;
        })
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
      },
      double(value) {
        return value * 2;
      }
    }
}
</script>