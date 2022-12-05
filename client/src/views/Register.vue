<template>
  <div class="container">
    <div class="form">
      <div class="flex-container">
        <div class="flex-container-item">
          <h1>Register</h1>
        </div>
        <div class="flex-container-item">
          <input 
          type="email"
          name="email"
          v-model="email"
          placeholder="email" />
          </div>
          <br>
          <div class="flex-container-item">
          <input 
          type="password"
          name="password"
          v-model="password"
          placeholder="password" />
          </div>
          <div class="error" v-html="error" />
          <div class="flex-container-item">
          <button 
            @click="register">
            REGISTER
          </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import auth from '@/services/auth'
export default {
  data() {
  return {
    email:'',
    password: '',
    error: null
  }
 },
 methods: {
  async register () {
    try{
      await auth.register({
        email: this.email,
        password: this.password
    }) 
    } catch (error) {
      this.error = error.response.data.error
      console.log(error)
    }
    
  }
 }
}
</script>
<style scoped>
.container { 
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.form { 
  background-color: #fafafa;
  padding: 2rem;
  width: 400px
}
.flex-container-item{
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;
}
.flex-container-item button{
  /* width: 100%; */
  background-color: cyan;
  border: 0;
  font-weight: bold;
  padding: 10px;
}
.flex-container-item button:hover {
  cursor: pointer;
  background-color: rgb(5, 216, 216);
}

.flex-container-item h1{
  display: flex;
  justify-content: center;
  background-color: cyan;
  width: 100%;
}
.error {
  color:red;
}

/* responsiveness */
@media all and (max-width:480px) {
  .flex-container-item {
    flex-direction: column;
  }
}
</style>
