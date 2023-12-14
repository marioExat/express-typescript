# Pet Shelter Business API

We'll be building an API for a pet shelter business. This pet shelter needs to register the pets that are staying in the shelter, and for that we'll perform basic CRUD operations (create, read, update and delete).

## Architecture of the app

Our application will have five different layers, which will be ordered in this way:

![Application layers](https://www.freecodecamp.org/news/content/images/2023/04/image-110.png)

- The **application layer** will have the basic setup of our server and the connection to our routes (the next layer).

- The **routes layer** will have the definition of all of our routes and the connection to the controllers (the next layer).

- The **controllers layer** will have the actual logic we want to perform in each of our endpoints and the connection to the model layer (the next layer, you get the idea...)

- The **model layer** will hold the logic for interacting with our mock database.

- Finally, the **persistence layer** is where our database will be.