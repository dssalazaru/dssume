<template>
    <div id="screen-close" class="hide"></div>
</template>

<script>
export default {
    name: 'Trans-Close',
    mounted: {

    },
    method: {
        screenclose() {
        let scrn = document.querySelector('#screen-close')
        scrn.classList.remove('hide')
        scrn.classList.add('transition-down')
        setTimeout(function () {
        scrn.classList.remove('add')
        }, 2000)
        },
    }
    

}
</script>