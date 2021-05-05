<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <SearchInput/>
                    <StarterMenuItem/>
                    <ProfilePill/>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import StarterMenuItem from './StarterMenuItem'
import ProfilePill from './ProfilePill'
import SearchInput from './SearchInput'
export default {
    name: 'NavBar',
    components: {
        StarterMenuItem,
        ProfilePill,
        SearchInput
    },
    data() {
        
    }
}
</script>

<style>
.img-thumbnail {
    background-color: #FFF !important;
}
.navbar.navbar-dark.bg-dark{
    background-color: #c30013 !important;
 }
</style>