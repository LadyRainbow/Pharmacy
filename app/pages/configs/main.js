const config = {
    file: 'index.html',
    placeholders: {
        menu: {
            copies: 1,
            file: 'menu\\menu.html',
            placeholders: {}
        },
        header: {
            copies: 1,
            file: 'header\\header.html',
            placeholders: {}
        },
        pagesContent: {
            file: 'main\\main.html',
            placeholders: {
            }
        },
        popUp: {
            file: 'popup\\popUp.html',
            placeholders: {
                popUpOrder: {
                    file: 'popup\\popUpOrder.html',
                    placeholders: {}
                },
            }
        },
        menuMob: {
            copies: 1,
            file: 'menu\\menuMob.html',
            placeholders: {}
        },
        headerMob: {
            copies: 1,
            file: 'header\\headerMob.html',
            placeholders: {}
        },
        pagesContentMob: {
            file: 'main\\mainMob.html',
            placeholders: {
            }
        },
        popUpMob: {
            file: 'popup\\popUpMob.html',
            placeholders: {
                popUpOrder: {
                    file: 'popup\\popUpOrderMob.html',
                    placeholders: {}
                },
            }
        },
    }
};
module.exports = config;
