<template>
  <div class="user col">
    <NotificationView></NotificationView>  
    <UserInfo :userData="user"></UserInfo>
    <hr>
    <p>{{ userID }}</p>
    <p>{{ user }}</p>
    <p>{{ randomImage }}</p>
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';
import NotificationView from '@/views/NotificationView.vue';
import axios from 'axios'

export default {
  name: 'UserView',
  data() {
    return {
      userID: this.$route.params.id,
      user: [],
      randomImage: undefined
    };
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
  watch: {
    $route: 'updateId'
  },
  created() {
    this.loadUsersFromLocalStorage();
    axios.get('https://randomuser.me/api/').then(response => (this.randomImage = response.data.results[0].picture.large))
  },
  components: {
    UserInfo,
    NotificationView,
  },
};
</script>
