<template>
  <div class="home">
    Home
    <hr>
    <Form></Form>
    <hr>
    <UsersTable></UsersTable>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'
import UsersTable from '@/components/UsersTable.vue';

export default {
  name: 'HomeView',
  components: {
    Form,
    UsersTable
}
}
</script>
