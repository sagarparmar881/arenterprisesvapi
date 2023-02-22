export default {
    generate: {
        fallback: true,
        dir: 'dist'
    },

    target: 'server', // default is 'server'
    
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'A R Enterprises Vapi',
        titleTemplate: 'A R Enterprises Vapi',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Welcome to A R Enterprises, a go-to retailer for all products, like detergent powder, multipurpose liquids, and other cleaning materials. ' },
            { name: 'robots', content: 'all, follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large' },
            { name: 'keywords', content: 'ar,arenterprises,arenterprisesvapi,cleaning, industrial,housekeeping,dustbin,cleaning,carry,basket,cleaningkit,kit,drymop,mop,diffuser-oil,freshner,diffuser,diffusermachine,diffuseroil,toiletbrush,chemical,dustpan,pan,wetmop,wet,mat,wringertrolley,trolley,urinalscreen,urinal,ladder,swimmingpool,granules,hose,vaccum,brush,net,swimmingnet,tcca,tablets,tabletdrum,drum,toilet,cleaner,floor,wiper,liquid,detergent,multisurface,dishwash industrial,phenyl,alphox,capb,surfactants,cdea,cmea,glycerin,labsa,surfactant,pineoil,fragrance,polysurbate80,sles,sorbitan,red-oil,oil,air,glass,fabric,softner,bleach,powder, household cleaning products,household cleaning supplies,cleaning chemical manufacturer,housekeeping, industrial,swimmingpool,pool' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/scss/style.scss',
        '~/assets/css/animation.css',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-pagiante.js',
        '~/plugins/observe-visibility.js',
        { 
            src: '~/plugins/bootstrap.js', 
            mode: 'client'
        },
        {
            src: '~/plugins/vue-js-modal', 
            mode: 'client'
        },
        { 
            src: '~/plugins/notifications-client.js', 
            mode: 'client' 
        },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/sitemap'
    ],

    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        extend (config, ctx) {
        },
        babel: {
            compact: true,
        },
    },
}
