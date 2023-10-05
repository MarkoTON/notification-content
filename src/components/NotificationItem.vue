<template>
  <div class="alert">
    <div class="alert-item">
      <div :class="data.type === 'info2' ? 'info2' : 'info1'"></div>
        <span>{{ data.title }}</span>
      {{ data.type }}
    </div>
    <div class="brake-line"></div>
  </div>
</template>

<script>
export default {
  name:'NotificationItem',
  props: {
    data: {
      type: Object
    }
  },
  data(){
    return {

    }
  },
  methods: {
    getAlertColor(type) {
      console.log(type)
      switch (type) {
        case 'info':
          return 'info'; // Postavite boju za info type
        case 'info1':
          return 'info1'; // Postavite boju za replay type
        case 'info2':
          return 'info2'; // Postavite boju za comment type
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  width: 350px;

  .brake-line {
    height: 1px;
    background: #e1e1e1;
  }
  .alert-item {
    display: flex;
    align-items: center;

    .info {
      background: green;
    }
    .info1 {
      background: yellow;
    }
    .info2 {
      background: red;
    }
  
    .info, .info1, .info2 {
      width: 8px;
      height: 8px;
      margin-right: 5px;
      box-shadow: 1px 1px 1px grey;
      border-radius: 50%;
    }
  }

}
</style>