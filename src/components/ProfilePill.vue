<template>
    <b-nav-item-dropdown right>
        <!-- Using 'button-content' slot -->
        <template #button-content>
            <b-img rounded="circle" alt="Profile image"
                thumbnail fluid src="https://picsum.photos/25/25/?image=59"></b-img>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
export default {
    name: 'ProfilePill'
}
</script>