<template>
  <div class="user">
    <h1>This is an about page</h1>
    <hr>
    <UserInfo></UserInfo>
    <hr>
    <NotificationView></NotificationView>
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';
import NotificationView from '@/views/NotificationView.vue';


export default {
  name: 'UserView',
  components: {
    UserInfo,
    NotificationView
}
}

</script>
