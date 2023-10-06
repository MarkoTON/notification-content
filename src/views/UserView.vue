<template>
  <div class="user">
    <Navbar :logo="randomAvatar" :notification="notificationData"></Navbar>
    <div class="col-4 offset-4">
      <UserInfo :userData="user[0]" :logo="randomAvatar"></UserInfo>
    </div>
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

export default {
  name: 'UserView',
  data() {
    return {
      userID: this.$route.params.id,
      user: [],
      randomAvatar: undefined
    };
  },
  components: {
    UserInfo,
    Navbar
  },
  watch: {
    $route: 'updateId'
  },
  computed:{
    notificationData(){
      return this.user[0].notification
    }
  },  
  methods: {
    updateId() {
      this.userID = this.$route.params.id;
    },
    loadUsersFromLocalStorage() {
      const savedUsers = localStorage.getItem('users');
      if (savedUsers) {
        const users = JSON.parse(savedUsers);
        this.user = users.filter(user => user.id === this.userID)
      }
    },
  },
  created() {
    axios.get('https://randomuser.me/api/').then(response => (this.randomAvatar = response.data.results[0].picture.large))
    this.loadUsersFromLocalStorage();
  }
};
</script>
