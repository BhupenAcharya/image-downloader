const { createApi } = require('unsplash-js');

const unsplash = createApi({
    accessKey: 'lpQ-f1-K-B2ailZkaWeMSKMG8lzR78wr7GVMx2ACuYo',
});

exports.handler = async (event) => {
    const url = "https://www.iana.org/help/example-domains";
    return await processUrl(url);
};

//urls.map(url => photo.urls.full.split('?')[0]);

async function processUrl(url) {
    unsplash.search.getPhotos({
        query: 'education, class',
        page: 1,
        perPage: 10,
        orientation: 'landscape',
    })
        .then(result => {
            const results = result.response.results;
            const urls = results.map(photo => photo.urls.full.split('?')[0]);
            console.log(urls);
        })
        .catch(error => {
            console.error(error);
        });

    unsplash.search.getPhotos({
        query: 'cat',
        page: 1,
        perPage: 10,
        color: 'green',
        orientation: 'portrait',
    });
}

//Below code block is for testing purpose only supplying mock data:

if (require.main === module) {
    main();
}

async function main() {
    const url = 'https://www.iana.org/help/example-domains';
    return await processUrl(url);
}

