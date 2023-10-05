<template>
  <div class="home grid pt-3" v-if="!loading">
    <div class="col-6 offset-3 pb-3">
      <Form :usersForm="usersFormData" @submit-form="updateUser"></Form>
    </div>
    <div class="col-6 offset-3">
      <UsersTable :usersTable="usersData"></UsersTable>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Form from '@/components/Form.vue';
import UsersTable from '@/components/UsersTable.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      loading: true,
      users: [],
    };
  },
  components: {
    Form,
    UsersTable,
  },
  computed: {
    usersData() {
      const newData = this.users.map(user => ({
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        notification: user.notification
      }));
      return newData;
    },
    usersFormData() {
      const newData = this.users.map(user => ({
        id: user.id,
        username: user.username
      }));
      return newData;
    },
  },
  methods: {
    updateUser(formData) {
      this.users = this.users.map((item) => {
        if (item.username === formData.username) {
          return {
            id: item.id,
            username: item.username,
            email: item.email,
            name: item.name,
            notification: [
            ...item.notification,
            {
              title: formData.title, type: formData.type, content: formData.content
            }
            ]
          }
        } else {
          return item;
        }
      })
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem('users', JSON.stringify(this.users));
    },
    loadFromLocalStorage() {
      const savedUsers = localStorage.getItem('users');
      if (savedUsers) {
        this.users = JSON.parse(savedUsers);
        this.loading = false;
      }
    },
  },
  created() {
    this.loadFromLocalStorage();
    
    if (!this.users.length) {
      axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        this.users = response.data.map(user => ({
          id: user.id,
          username: user.username,
          name: user.name,
          email: user.email,
          notification: []
        }));
        this.saveToLocalStorage(); 
        this.loading = false;
      })
      .catch((e) => {
        this.errors.push(e);
        this.loading = false;
      });
    }
  },
};
</script>
