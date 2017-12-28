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
            </div>

        </div>
    </div>
</template>

<script>
    // var $http = require('http')

    export default {
      data(){
        return {
          user: {
          username: '',
          email: ''
          }
        }
      },
      methods: {
        submit(){

          this.$http.post('https://vuejs-http-a2c8e.firebaseio.com/data.json', this.user)
            .then(response => {
              console.log(response)
            }, error => {
              console.log(error)
            });
        }
      }
    }
</script>

<style>
</style>
