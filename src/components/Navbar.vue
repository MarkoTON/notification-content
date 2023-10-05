<template>
  <nav class="navbar">
    <a href="/">Notification app</a>
    <div class="notification-items">
      <a href="#"><font-awesome-icon icon="envelope" /></a>
      <a href="#" @click="showDropdown">
        <font-awesome-icon icon="bell"/>
        <span class="badge" v-if="notification.length">{{notification.length}}</span>
        <div class="dropdown" v-if="isDropdownVisible">
          <ul class="dropdown-list">
            <li v-for="(item, index) in notification" :key="index">
              <notification-item :data="item"></notification-item>  
            </li>
          </ul>
        </div>
      </a>
      <i class="fas fa-envelope"></i>
      <img :src="logo" alt="logo" class="img-logo">
    </div>
  </nav>
</template>

<script>
import NotificationItem from './NotificationItem.vue';
export default {
  components: { NotificationItem },
  name: 'Navbar',
  props: {
    logo: {
      type: String,
      require: true
    },
    notification: {
      type: Array
    }
  },
  data() {
    return {
      isDropdownVisible: false
    };
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    }
  }
};
</script>

<style scoped lang="scss">
$nav-bg-color: #efefef;
$nav-text-color: #0e0e0e;
$nav-link-hover-color: #0056b3;
$nav-link-padding: 10px 15px;
$badge-bg-color: #007bff;    // Boja pozadine za badge
$badge-text-color: #fff;     // Boja teksta za badge
$badge-padding: 3px 6px;    // Padding za badge
$badge-border-radius: 12px; // Radijus zaobljenja za badge

nav {
  background-color: $nav-bg-color;
  padding: 0 15px;
  height: 75px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
  .badge {
    background-color: $badge-bg-color;
    color: $badge-text-color;
    padding: $badge-padding;
    border-radius: $badge-border-radius;
    font-size: 0.75rem; // Prilagodite veličinu fonta prema potrebi
  }
  
  .dropdown {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
    
    & .dropdown-list {
      display: flex;
      flex-direction: column;
    }
  }
  
  a:hover .dropdown {
    display: block;
  }
  
  .dropdown ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .dropdown li {
    padding: 8px 16px;
    margin: 0;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  .dropdown li:hover {
    background-color: #f0f0f0;
  }
  
  
  img {
    border-radius: 50%;
    width: 50px;
  }
  
  .notification-items {
    display: flex;
    align-items: center;
    
    & a:nth-child(2){
      position: relative;
      span {
        position: absolute;
        left: 22px;
        top: 0;
      }
    }
  }
  
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  & li {
    margin-right: 10px;
  }
  
  & a {
    text-decoration: none;
    color: $nav-text-color;
    padding: $nav-link-padding;
    transition: color 0.2s ease-in-out;
    
    &:hover {
      color: $nav-link-hover-color;
    }
  }
}


</style>
