function createPost() {
    /**
     * Set values for
     * @param {string} title
     * @param {string} body
     * @param {number} 1 , a default id for the user
     */
    const title = "A Top-Rated SEO Company";
    const body = "Work with an SEO services company that has experts in digital marketing, web design, development, and PPC advertising. Coalition Technologies is the agency to help drive traffic to your website and convert those visitors into customers or qualified leads.";

    /**
     * Post data to the API.
     * @param {string} excerpt is being passed as a custom key.
     */
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            excerpt: body.substring(0, 20), // Pick first 20 characters from the "body" value
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            // Unhide the post content div
            const postContent = document.querySelector('.post-content');
            postContent.style.display = 'block';

            // Display the response in the html elements respectively
            const titleElement = document.querySelector('.title');
            const excerptElement = document.querySelector('.excerpt');
            const bodyElement = document.querySelector('.body');

            titleElement.textContent = json.title;
            excerptElement.textContent = json.excerpt + '...';
            bodyElement.textContent = json.body;
        });
}