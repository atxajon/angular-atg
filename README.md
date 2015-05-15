# angular-atg
A client using AngularJS to communicate over HTTP with a versioned RESTful API.

As described at http://api.challenge.advancetogo.com/ 

The client should implement:

an interface to signing up a tenant by email
an interface to signing up a tenant via facebook
an interface to signing up an agent via email
an interface to creating a property and advert for an agent
an interface to viewing all adverts for a tenant
Technology

A good submission:

Uses AngularJS for implementing the client
Uses Git for version control
A GREAT submission:

Follows TDD with unit and integration tests
Uses Jasmine for unit tests
Uses Protractor for integration tests
Uses one or all of Coffeescript, HAML, and SASS
The API is built on Rails and uses Devise Token Auth for user creation and session management. 
Accordingly you should use Angular Token Auth in the client.

Versioning

The API uses a HTTP header to specify versions. This is mandatory when accessing any versioned resource. 
All resources are versioned except user sign up/in.

Documentation

Documentation for the API is visible at http://docs.atgchallengeapi.apiary.io

Submission

Submit source code by uploading to github and sending a link. 
Bonus points for clean commit messages and understandable history!
