# Post request using JSONPlaceholder API
This simple application allows the user to create a post using the JSONPlaceholder API. The keys in use are title, body, userId and a custom key called excerpt which takes the first 20 characters from body.

The response returned is then displayed on the page.

## Deployment and installation

To run this project, just clone the repository and open the webpage.

```bash
  git clone https://github.com/mkahara/post-request-using-json-placeholder-api.git
```

## Usage

After opening the webpage, click the `Create Post` button. This triggers the `createPost` JavaScript function which sends the post data to the JSONPlaceholder API.

I have used sample data from the [Coalition Technologies](coalitiontechnologies.com) home page to create a post with the following data:
- Title - "A Top-Rated SEO Company"
- Body - "Work with an SEO services company that has experts in digital marketing, web design, development, and PPC advertising. Coalition Technologies is the agency to help drive traffic to your website and convert those visitors into customers or qualified leads."
- Excerpt - This is automatically generated from "Body" above.

## Author

Your Name
- GitHub: [mkahara](https://github.com/mkahara)

## Thank you!