# blog-post-backend

## Prerequisites

- [Node.js](https://yarnpkg.com/en/docs/install) - 10.13.0
- [Yarn](https://yarnpkg.com/en/docs/install) - v0.15.1
- [NPM](https://docs.npmjs.com/getting-started/installing-node) - 6.4.1
- [MongoDb](https://www.mongodb.com/download-center/community) - 4.0.8

## Setup

Clone the repository, install the dependencies and get started right away.

    $ git clone git@github.com:aishwarya4shrestha/blog-post-frontend.git
    $ cd blog-post-backend
    $ yarn # or npm install

Make a copy of `.env.example` as `.env` and update your application details and database credentials. 

    $DB_HOST ='mongodb://localhost:27017/fusemachine'

Keep password and username if required to access mongo db 

Start mongo server.

Finally, start the application.

    $ yarn start:dev (For development)
