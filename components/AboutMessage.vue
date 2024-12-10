<template>
    <div class="welcome-area">
        <div class="container">
            <div class="welcome-content text-center">
                <h5>{{ subTitle }}</h5>
                <h1>{{ title }}</h1>
                <p v-html="desc" style="text-align: justify;"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Welcome To A R Enterprises",
                subTitle: "Who Are We?",
                desc: "Welcome to A R Enterprises, a go-to industrial for all products, like detergent powder, multipurpose liquids, and other cleaning materials. We are committed to providing you with the best products possible, with a focus on three qualities: dependability, customer service, and distinctiveness.<br><br>A R Enterprises, established in January 2005 by Ashraf Agwan and Reshma Agwan, has come a long way from employing maids in Vapi. When Ashraf Agwan first got started, his love for creating cleaning equipment inspired him to do everything himself and provided him the motivation to develop his labour of love and inspiration into a successful online company. <br><br>Our goal is to give our customers the finest products possible. We truly hope you find pleasure in our offerings equally as we do. Please get in touch with us if there are any queries or comments.<br><br>Yours sincerely,<br>Ashraf Agwan,<br>Co-founder (AR Enterprises)."
            }
        },
    };
</script>
