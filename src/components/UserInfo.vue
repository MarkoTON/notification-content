<template>
  <div class="card">
    <img :src="logo" alt="user image">
    <div class="card-body">
      <h3 class="card-title">
        {{profile.name}}
      </h3>
        <ul>
          <li><span>Username:</span> {{ profile.username }}</li>
          <li><span>Email:</span>{{ profile.email }}</li>
          <li><span>Notification numbers:</span>{{ profile.notification.length }}</li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserInfo',
  props: {
    userData: {
      type: Object,
      require: true
    },
    logo: {
      type: String,
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
  margin-top: 1rem;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: #fff;
  margin-bottom: 20px;
  transition: box-shadow 0.2s ease-in-out;
  display: flex;
  width: 450px;
  
  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .card-body {
    padding-left: 1rem;
  }
  
  .card-text {
    font-size: 1rem;
    color: #555;
  }
  
  ul {
    list-style-type: none;
    li {
      span {
        font-weight: 600;
      }
    }
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