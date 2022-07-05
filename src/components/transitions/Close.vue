<template>
  <div class="overlay">
    <div class="block b1"></div>
    <div class="block b2"></div>
    <div class="block b3"></div>
    <div class="block b4"></div>
   </div>
</template>

<script>
export default {
    name: 'close',
}
</script>

<style lang="scss" scoped>

.overlay {
    z-index: 500;
    cursor: none;
    height: 100vh;
    position: fixed;
    background-color: var(--term);
    opacity: 0;
    animation: fade 3s ;


    .block {
        position: fixed;
        height: 50%;
        width: 50%;  
        opacity: 0;
        z-index: 550;
    }
    .b1, .b3{
        background-color: var(--complement-b1);
    }

    .b2, .b4{
        background-color: var(--complement-b2);
    }

    .b1 {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        animation: slideL 3s ;
        
    
    }
    .b2 {
        top: 0;
        left: 1;
        right: 0;
        bottom: 0;
        animation: slideD 3s ;

    }
    .b3 {
        top: 1;
        left: 1;
        right: 0;
        bottom: 0;
        animation: slideR 3s ;

    }
    .b4 {
        top: 1;
        left: 0;
        right: 1;
        bottom: 0;
        animation: slideU 3s ;
    }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slideU {
0% {
    opacity: 0;
    transform: translateY(50%);
}
50% {
    opacity: 1;
    transform: translateY(0);
}
100% {
    opacity: 0;
    transform: translateY(50%);
}
}

@keyframes slideR {
0% {
    opacity: 0;
    transform: translateX(50%);
}
50% {
    opacity: 1;
    transform: translateY(0);
}
100% {
    opacity: 0;
    transform: translateX(50%);
}
}
@keyframes slideL {
0% {
    opacity: 0;
    transform: translateX(-50%);
}
50% {
    opacity: 1;
    transform: translateY(0);
}
100% {
    opacity: 0;
    transform: translateX(-50%);
}
}
@keyframes slideD {
0% {
    opacity: 0;
    transform: translateY(-50%);
}
50% {
    opacity: 1;
    transform: translateY(0);
}
100% {
    opacity: 0;
    transform: translateY(-50%);
}
}

</style>