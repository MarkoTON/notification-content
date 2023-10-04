<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/user">User</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.pb-3 {
  padding-bottom: 1rem;
}
.pt-3 {
  padding-top: 1rem;
}

$grid-columns: 12;  // Broj stupaca u gridu
$grid-gap: 20px;    // Razmak između elemenata u gridu

// Flexbox grid container
.grid {
  display: flex;
  flex-wrap: wrap;
  margin: -#{$grid-gap / 2}; // Pola razmaka kako bi se izjednačili
}

// Flexbox grid column
.col {
  flex: 1;
  padding: #{$grid-gap / 2}; // Pola razmaka kako bi se izjednačili
}

// Prilagodbe za različite veličine ekrana
@media screen and (max-width: 768px) {
  .col {
    flex: 1 1 100%; // Jedna kolona na manjim ekranima
  }
}

// Klasa za postavljanje širine stupca
@for $i from 1 through $grid-columns {
  .col-#{$i} {
    flex-basis: percentage($i / $grid-columns);
  }
}

// Klasa za dodavanje offseta (praznog prostora) prije kolone
@for $i from 1 through $grid-columns {
  .offset-#{$i} {
    margin-left: percentage($i / $grid-columns);
  }
}

</style>
