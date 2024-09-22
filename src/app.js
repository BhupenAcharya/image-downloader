exports.handler = async (event) => {
    const url = "https://www.iana.org/help/example-domains";
    return await processUrl(url);
};

async function processUrl(url) {
    console.log("Url is", url);
}

//Below code block is for testing purpose only supplying mock data:

if (require.main === module) {
    main();
}

async function main() {
    const url='https://www.iana.org/help/example-domains';
    return await processUrl(url);
}

