<template>
    <div class="fashion-six-wrapper">
        <TheHeader />
        <!-- <HeaderOffcanvasMenuWithTransparent /> -->
        <HeroSliderSix />
        <WelcomeMessage class="pt-95 pb-60" />
        <ProductWrapper />
        <!-- <NewsletterStyleOne /> -->
        <!-- <InstagramPostWrapper /> -->
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            HeaderOffcanvasMenuWithTransparent: () => import('@/components/HeaderOffcanvasMenuWithTransparent'),
            HeroSliderSix: () => import('@/components/hero/HeroSliderSix'),
            WelcomeMessage: () => import('@/components/WelcomeMessage'),
            ProductWrapper: () => import('@/components/product/ProductWrapper'),
            NewsletterStyleOne: () => import('@/components/NewsletterStyleOne'),
            InstagramPostWrapper: () => import('@/components/InstagramPostWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'Home Fashion Six'
            }
        },
    };
</script>



<!-- <template>
    <div class="home-page-wrapper">
        <TheHeader />
        <HeroSlider />
        <ServicePolicy />
        <ProductWrapper :isSectionTitle=true />
        <BlogWrapper />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            HeroSlider: () => import('@/components/hero/HeroSlider'),
            ServicePolicy: () => import('@/components/policy/ServicePolicy'),
            ProductWrapper: () => import('@/components/product/ProductWrapper'),
            BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'Home Fashion One'
            }
        },
    };
</script>


 -->