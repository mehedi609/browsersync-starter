var browsersync = require('browser-sync');

browsersync({
    server: "app",
    files: [
        "app/*.html",
        "app/css/*.css",
        "app/js/*.js",
        "app/image/*.jpg",
        "app/image/*.jpeg",
        "app/image/*.png",
    ]
})