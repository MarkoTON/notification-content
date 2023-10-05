<template>
  <div class="card">
    <img src="" alt="user image">
    <h3 class="card-title">
      Marko Canovic 
    </h3>
    <p class="card-body">
      <ul>
        <li>Email</li>
        <li>Notification numbers</li>
        <li>Username</li>
      </ul>
    </p>
    {{ profile }}
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    userData: {
      type: Array,
      require: true
    }
  },  
  data(){
    return {
      profile: this.userData
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  background-color: #fff;
  margin-bottom: 20px;
  transition: box-shadow 0.2s ease-in-out;
  
  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .card-text {
    font-size: 1rem;
    color: #555;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background-color: #0056b3;
    }
  }
}

</style>