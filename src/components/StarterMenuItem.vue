<template>
    <div class="menu-box">
        <b-nav-item-dropdown text="Starter" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
    </div>
</template>

<script>
export default {
    name: 'StarterMenuItem'
}
</script>

<style>
.menu-box {
    margin-right: 80px;
}
</style>