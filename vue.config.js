module.exports = {
    pages: {
        index: {
            entry: './src/pages/Home/main.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        map: {
            entry: './src/pages/Map/main.js',
            template: 'public/index.html',
            title: 'Map',
            chunks: ['chunk-vendors', 'chunk-common', 'map']
        },
        recipe: {
            entry: './src/pages/Recipe/main.js',
            template: 'public/index.html',
            title: 'Recipe',
            chunks: ['chunk-vendors', 'chunk-common', 'recipe']
        }
    }
}