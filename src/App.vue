<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label>Username</label>
                  <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                  <label>Mail</label>
                  <input type="text" class="form-control" v-model="user.email">
                </div>
                <button @click="submit" class="btn btn-primary">Submit</button>
                <hr>
                <p><i>Determines which node the data is fetched from...</i></p>
                <input type="text" class="form-control" v-model="node">
                <br>
                <button @click="getData" class="btn btn-primary" >Fetch Data</button>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}}</li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    // var $http = require('http')

    export default {
      created(){
        const customActions = {
          saveAlt: {method: "POST", url: 'alternative.json'},
          getData: {method: "GET", }
        }
        this.resource = this.$resource('{node}.json', {}, customActions);

      },
      data(){
        return {
          user: {
            username: '',
            email: ''
          },
          users: [],
          resource: {},
          node: 'data',
        };
      },
      methods: {
        submit(){
          this.resource.saveAlt(this.user);
          // this.resource.save({}, this.user);

          // this.$http.post('data.json', this.user)
          //   .then(response => {
          //     console.log(response)
          //   }, error => {
          //     console.log(error)
          //   });
        },
        getData(){
          this.resource.getData({node: this.node})
            .then(response => {
              // returns a promise
              return response.json()
            })
            .then(data => {
              const dataResults = [];
              for (let key in data){
                dataResults.push(data[key]);
              }
              this.users = dataResults;
            });

          // this.$http.get('data.json')
            // .then(response => {
            //   // returns a promise
            //   return response.json()
            // })
            // .then(data => {
            //   const dataResults = [];
            //   for (let key in data){
            //     dataResults.push(data[key]);
            //   }
            //   this.users = dataResults;
            // });
        }
      }
    }
</script>

<style>
</style>
