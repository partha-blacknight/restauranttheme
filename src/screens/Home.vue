<template>
    <div>
        <Carousel/>
        <TopItem/>
        <FeaturedItem/>
        <PopularItem/>
        <RecomendedItem/>
    </div>
</template>

<script>
    import Carousel from '../components/Carousel'
    import TopItem from '../components/TopItem'
    import FeaturedItem from '../components/FeaturedItem'
    import PopularItem from '../components/PopularItem'
    import RecomendedItem from '../components/RecomendedItem'

    export default {
        name: 'Home',
        components: {
            Carousel,
            TopItem,
            FeaturedItem,
            PopularItem,
            RecomendedItem
        }
    }
</script>