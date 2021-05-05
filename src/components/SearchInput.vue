<template>
    <div class="search-box">
        <b-nav-form>
            <b-form-input size="md" class="mr-md-2 round-inp" placeholder="Search"></b-form-input>
            <b-button variant="danger" size="sm" class="my-2 my-sm-0 sr-butt" type="button">
                <v-icon name="search" scale="1" spin/>
            </b-button>
        </b-nav-form>
    </div>
</template>

<script>
export default {
    name: 'SearchInput'
}
</script>

<style>
.search-box {
    margin-top: 3px;
    margin-right: 80px;
}
.round-inp {
    border-radius: 45px !important;
}
.sr-butt {
    border-radius: 45px !important;
    background-color: #c30013 !important;
}
</style>