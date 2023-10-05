<template>
  <div class="alert">
    <div class="alert-content">
      <div class="alert-item">
        <div :class="{ 'info': data.type === 'info', 'warning': data.type === 'replay', 'danger': data.type === 'comment' }"></div>
        <p v-if="data.type === 'info'">
          <span>Info:</span>
        </p>
        <p v-else-if="data.type === 'replay'">
          <span>Replay:</span>
        </p>
        <p v-else>
          <span>Comment:</span>
        </p>
        <h5>{{ data.title | textLimit30 }}</h5>
      </div>
      <font-awesome-icon icon="times" @click="removeNotification(itemIndex)" />
    </div>
  </div>
</template>

<script>
export default {
  name:'NotificationItem',
  props: {
    data: {
      type: Object
    },
    itemIndex: {
      type: Number
    }
  },
  data(){
    return {

    }
  },
  watch:{
  },
  methods: {
    removeNotification(itemIndex){
      this.$emit('removeFromList', itemIndex);
    }
  },
  created(){
    console.log(this.data)
  }
}
</script>

<style lang="scss" scoped>
.alert {
  width: 350px;

  .alert-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .alert-item {
    display: flex;
    align-items: center;

    h5 {
      padding-left: 5px;
    }
    
    .info {
      background: green;
    }
    .warning {
      background: yellow;
    }
    .danger {
      background: red;
    }
  
    .info, .warning, .danger {
      width: 8px;
      height: 8px;
      margin-right: 5px;
      box-shadow: 1px 1px 1px grey;
      border-radius: 50%;
    }
  }

}
</style>