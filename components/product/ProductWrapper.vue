<template>
    <div class="product-area pb-90">
        <div class="container">
            <SectionTitleWithSubTitle title="OUR PRODUCTS!" classes="section-title" v-if="isSectionTitle ? true : false" />
            <SectionTitleWithSubTitle title="OUR PRODUCTS" classes="section-title"/>

            <ul class="nav product-tab-list pt-30 pb-55 justify-content-center">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#categoryone" role="tab">Industrial Housekeeping</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#categorytwo" role="tab">Freshner & Diffuser Oil</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#categorythree" role="tab">Swimming Pool Cleaning Material</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#categoryfour" role="tab">Safety Material</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#categoryfive" role="tab">Cleaning Chemicals</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#categoryfive" role="tab">New</button>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="categoryone" role="tabpanel">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-sm-4 col-4" v-for="(product, index) in categoryOne.slice(0, 8)" :key="index">
                            <ProductGridItem :product="product" :layout="layout" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade " id="categorytwo" role="tabpanel">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-sm-4 col-4" v-for="(product, index) in categoryTwo.slice(0, 8)" :key="index">
                            <ProductGridItem :product="product" :layout="layout" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="categorythree" role="tabpanel">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-sm-4 col-4" v-for="(product, index) in categoryThree.slice(0, 8)" :key="index">
                            <ProductGridItem :product="product" :layout="layout" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="categoryfour" role="tabpanel">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-sm-4 col-4" v-for="(product, index) in categoryFour.slice(0, 8)" :key="index">
                            <ProductGridItem :product="product" :layout="layout" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="categoryfive" role="tabpanel">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-sm-4 col-4" v-for="(product, index) in categoryFive.slice(0, 8)" :key="index">
                            <ProductGridItem :product="product" :layout="layout" />
                        </div>
                    </div>
                </div>
                <div class="view-more text-center mt-20 toggle-btn2">
                    <n-link to="/shop" class="loadMore2">VIEW MORE PRODUCTS</n-link>
                </div>
            </div>
        </div>
        <QuickView />
    </div>
</template>

<script>
    export default {
        props: ['isSectionTitle'],

        components: {
            ProductGridItem: () => import('@/components/product/ProductGridItem'),
            QuickView: () => import('@/components/QuickView'),
        },

        computed: {
            categoryOne() {
                return this.$store.getters.getCategoryOne
            },
            categoryTwo() {
                return this.$store.getters.getCategoryTwo
            },
            categoryThree() {
                return this.$store.getters.getCategoryThree
            },
            categoryFour() {
                return this.$store.getters.getCategoryFour
            },
            categoryFive() {
                return this.$store.getters.getCategoryFive
            },
            
        },
        data() {
            return {
                layout: "twoColumn"
            }
        },
    };
</script>