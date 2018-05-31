<template>
    <svg version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    x="0px" 
    y="0px"
     width="24px" 
     height="22px" 
     viewBox="0 0 24 22" 
     enable-background="new 0 0 24 22" 
     xml:space="preserve" 
     class="hamburger" 
     :class="{'hamburger--open': menuOpen}">
        <rect class="hamburger__top-bar" y="0" fill="#FFFFFF" width="24" height="4"/>
        <rect class="hamburger__middle-bar" y="9" fill="#FFFFFF" width="24" height="4"/>
        <rect class="hamburger__middle-bar-2" y="9" fill="#FFFFFF" width="24" height="4"/>
        <rect class="hamburger__bottom-bar" y="18" fill="#FFFFFF" width="24" height="4"/>
    </svg>
</template>

<script>
export default {
    name: 'dept-hamburger',
    props: ['menuOpen']
}
</script>