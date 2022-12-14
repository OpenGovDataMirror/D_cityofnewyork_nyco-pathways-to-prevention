#  ACS Pathways

This project was developed using Gatsby, a static site generator that uses React.

[Gatsby docs](https://www.gatsbyjs.org/docs/)

## Delivery notes

The recommended way to demo this prototype is running it as a Progressive Web App. To do this: 

1. Access the staging site at `https://stage-acs-pathways.bbox.ly/` (Google Chrome works best)
2. Click the `+` button that appears on the right edge of the address bar near the bookmark star icon
3. Click the `Install` button in the resulting dialog. At this point the prototype will be installed in your Chrome Apps folder and will launch a new browser that is now accessible offline. If you are on an iPad, you should now have an icon on your home screen for offline viewing.

Alternatively, there is a folder called `public` that contains all of the files from the built site, but it will need to be run on a web server. 


## For Developers
## Running this project

1.  **Using Gatsby CLI**

    If you haven't done so already, install gatsby CLI by running the following command:

    ```
    sudo npm install -g gatsby-cli
    ```

    Finally, clone this project and run

    ```
    cd acs-pathways/
    npm install
    gatsby develop
    ```

  Site is now running at `http://localhost:8000`

## What's inside?

Project structure

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md
