<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

$grid-columns: 12;  
$grid-gap: 20px;   

.pb-3 {
  padding-bottom: 1rem;
}
.pt-3 {
  padding-top: 1rem;
}


.grid {
  display: flex;
  flex-wrap: wrap;
  margin: #{$grid-gap / 2}; 
}


.col {
  flex: 1;
  padding: #{$grid-gap / 2}; 
}


@media screen and (max-width: 768px) {
  .col {
    flex: 1 1 100%; 
  }
}


@for $i from 1 through $grid-columns {
  .col-#{$i} {
    flex-basis: percentage($i / $grid-columns);
  }
}


@for $i from 1 through $grid-columns {
  .offset-#{$i} {
    margin-left: percentage($i / $grid-columns);
  }
}

</style>
