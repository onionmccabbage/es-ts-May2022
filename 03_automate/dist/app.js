// this will become dist/app.js (for use in index.html)
// we will accecss https://jsonplaceholder.typicode.com/photos
{
    // a method to fetch data from the API - we use 'async' in Javascript to 'await' an outcome
    const fetchPhotos = async () => {
        const API = 'https://jsonplaceholder.typicode.com/photos';
        try {
            // 'fetch' is part of Javascript (only available in a browser)
            const response = await fetch(API); // defaults to 'get'
            console.log(`${response}, ${typeof (response)}`); // we only have the headers here....
            // we now have a response object, we can parse the data from the response
            return response.json(); // this is the Promise
        }
        catch (err) {
            if (err) { // always check
                return err.message;
            }
        }
        finally { } // here we might tidy up - always runs even if ther is an exception
    };
    const other = () => {
        return 'early';
    };
    // call the function then handle the Promise
    fetchPhotos().then((d) => {
        console.log(`We received ${d[0].title}`);
    });
    // async-await is not-blocking
    console.log('prior to return of async');
    console.log(other());
}
