<template>
  <div>
    Ovde ce biti pirkazan Notification View sa Itemom
    <hr>
    <NotificationItem></NotificationItem>
    <NotificationItem></NotificationItem>
    <NotificationItem></NotificationItem>
  </div>
</template>

<script>
// @ is an alias to /src
import NotificationItem from '@/components/NotificationItem.vue'

export default {
  name: 'NotificationView',
  components: {
    NotificationItem
}
}
</script>