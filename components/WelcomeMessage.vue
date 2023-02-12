<template>
    <div class="welcome-area">
        <div class="container">
            <div class="welcome-content text-center">
                <h5>{{ subTitle }}</h5>
                <h1>{{ title }}</h1>
                <p>{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Welcome To A R Enterprises",
                subTitle: "Who Are We",
                desc: "We are the Leading Manufacturer and Supplier of household cleaning products and cleaner concentrates based in Vapi, Gujarat. We are a trusted manufacturer and supplier of high-quality cleaning products."
            }
        },
    };
</script>
