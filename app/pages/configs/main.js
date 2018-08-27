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
        // headerMob: {
        //     copies: 1,
        //     file: 'header\\headerMob.html',
        //     placeholders: {}
        // },
        // pagesContentMob: {
        //     file: 'main\\firstBankrotMob.html',
        //     placeholders: {
        //     }
        // }
    }
};
module.exports = config;
