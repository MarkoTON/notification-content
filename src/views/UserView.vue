<template>
  <div class="user col">
    <Navbar :logo="randomImage" :notification="notificationData"></Navbar>
    <UserInfo :userData="user[0]" :logo="randomImage"></UserInfo>
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';
import NotificationView from '@/views/NotificationView.vue';
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

export default {
  name: 'UserView',
  data() {
    return {
      userID: this.$route.params.id,
      user: [],
      randomImage: undefined
    };
  },
  components: {
    UserInfo,
    NotificationView,
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
      console.log(this.userID);
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
    axios.get('https://randomuser.me/api/').then(response => (this.randomImage = response.data.results[0].picture.large))
    this.loadUsersFromLocalStorage();
  }
};
</script>
