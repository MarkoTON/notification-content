<template>
  <form @submit.prevent="submitForm" class="form">
    <div>
      <label for="username">Username:</label>
      <input
      type="text"
      id="username"
      v-model="formData.username"
      @input="filterUsers"
      required
      >
      <ul v-if="filteredUsers.length">
        <li v-for="user in filteredUsers" :key="user.id" @click="selectUser(user)">
          {{ user.username }}
        </li>
      </ul>
    </div>
    <div>
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="formData.title" required>
    </div>
    <div>
      <label for="content">Content:</label>
      <textarea id="content" v-model="formData.content" required></textarea>
    </div>
    <div>
      <label for="messageType">Type of Message:</label>
      <select id="messageType" v-model="formData.type" required>
        <option value="info">Info</option>
        <option value="replay">Replay</option>
        <option value="comment">Comment</option>
      </select>
    </div>
    <div>
      <button class="btn" type="submit">Pošalji</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    usersForm: {
      type: Array,
      required: true 
    }
  },
  data() {
    return {
      formData: {
        username: '',
        title: '',
        content: '',
        type: ''
      },
      users: this.usersForm,
      filteredUsers: []
    };
  },
  methods: {
    submitForm() {
      this.$emit('submit-form', this.formData);
      this.formData = {
        username: '',
        title: '',
        content: '',
        type: ''
      }
    },
    filterUsers() {
      this.filteredUsers = this.users.filter(user =>
      user.username.toLowerCase().includes(this.formData.username.toLowerCase())
      );
    },
    selectUser(user) {
      this.formData.username = user.username;
      this.filteredUsers = [];
    }
  }
};
</script>

<style lang="scss" scoped>
$bg-white: #fff;
$form-bg-color: #f8f9fa;         
$form-border-color: #dee2e6;  
$form-font-family: Arial, sans-serif; 

.form {
  background-color: $form-bg-color;
  border: 1px solid $form-border-color;
  padding: 20px;
  font-family: $form-font-family;
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"],
  select,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid $form-border-color;
    border-radius: 4px;
  }

  ul {
    background: $bg-white;
    border: 1px solid $form-border-color;
    margin-bottom: 0.5rem;

    li {
      text-decoration: none;
      padding: 0.5rem;
      list-style-type: none;

      &:hover {
        background-color: #e2e6ea; 
      }
    }

  }
  
  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background-color: #0056b3;
    }
  }
}

</style>