<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Username</th>
          <th scope="col">First Name</th>
          <th scope="col">Email</th>
          <th scope="col">Number of notification</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(user, index) in usersTableInfo" :key="user.id" >
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <router-link :to="{name: 'User', params: {id: user.id }}">
              {{ user.username }}
            </router-link>
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <span v-if="user.notification.length">{{ user.notification.length }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UsersTable',
  props: {
    usersTable: {
      type: Array, 
      require: true
    }
  },
  data(){
    return {
      users: this.usersTable
    }
  },
  watch: {
    usersTable() {
      console.log('Nirvana')
      this.usersTableInfo
    },
  },
  computed: {
    usersTableInfo(){
      this.users = this.usersTable
      return this.users;
    }
  },
}
</script>

<style lang="scss" scoped>
$table-bg-color: #f8f9fa;         
$table-border-color: #dee2e6;     
$table-font-family: Arial, sans-serif;

.table {
  width: 100%;
  margin-bottom: 1rem;
  background-color: $table-bg-color;
  border-collapse: collapse;
  font-family: $table-font-family;
  
  th, td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid $table-border-color;
  }
  
  thead {
    th {
      background-color: #343a40;  
      color: white;
    }
  }
  
  tbody {
    tr {
      &:hover {
        background-color: #e2e6ea; 
      }
    }
  }
  
  &.table-bordered {
    th, td {
      border: 1px solid $table-border-color;
    }
  }
  
  &.table-striped {
    tbody {
      tr:nth-child(odd) {
        background-color: #f2f3f4;
      }
    }
  }
  
  &.thead-dark {
    th {
      background-color: #343a40;
      color: #adb5bd;
    }
  }
  
  a {
    color: #007bff;
    &:hover {
      color: #0056b3;
      text-decoration: underline;
    }
  }
}

</style>
