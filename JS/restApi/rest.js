/*
API (Application Programming Interface)

An API is a way for two or more applications to communicate
or interface with each other.

Examples:
- Android Bluetooth API (used for Bluetooth communication)
- Node.js File System (fs) API (used to read/write files)

An API provides the rules and guidelines for communication.


REST API

REST = Representational State Transfer
API = Application Programming Interface

A REST API allows different devices or applications to
communicate over the internet using HTTP or HTTPS
(HyperText Transfer Protocol).


1. Applications That Can Be Interfaced

The application must be running an HTTP client.

An HTTP client runs on a client device.

Examples of client devices:
- Laptop
- Mobile phone / Smartphone
- IoT devices
- Tablet


2. HTTP Clients

Examples:
- Browser
- cURL
- Postman
- POS devices
- etc.


3. Communication

Communication is between a client and a server.

- The client makes a request.
- The server receives the request.
- The server processes it.
- The server sends a response back to the client.

(Request → Response)


4. How to Make an HTTP Request

A request typically contains:

1. URL (Uniform Resource Locator) - Required
2. Method - Required
   - GET
   - POST
   - PATCH
   - DELETE
3. Headers
   - Security information (depends on the API)
4. Body
   - Form data
   - Image
   - JSON
5. Parameters
   - Metadata
   - Search values
   - Filtering information


Assignment

1. Install Postman.
2. Go to your favourite website.
3. Open Developer Tools (Inspect).
4. Go to the Network tab.
5. Identify:
   - The request method
   - The request URL
   - Any parameters
   - The request time
6. Repeat the same request using:
   - Postman
   - cURL


postman

Request Method:	GET
Request URL:	https://www.jumia.co.ke/banagat-mens-black-pu-leather-casual-oxfords-shoes-317205452.html
Parameters:	None
Request Time:	555.53 ms
*/

/*
HTTP METHOD:

GET: <getting data, fetching data, searching>

POST: <posting data> <body: JSON, file, HTML>

PATCH: <updating data>

PUT: <updating data>

DELETE: <deleting data>


HTTP RESPONSE <wait for response>

Status code:

-> 100 to 199: <informational status codes>

-> 200 to 299: <successful status codes>
    - 200 OK
    - 201 Created

-> 300 to 399: <redirection status codes>
    - eg twitter.com -> x.com

-> 400 to 499: <client made a mistake>
    - 404 -> Page Not Found -outlier
    - 401 -> Not Authorized
    - 403 -> Forbidden , authorised but forbidden eg ifyou want to access admin page

-> 500 to 599: <server error>
    - There is nothing you can do on your end


7. RESPONSE BODY 
you get a response if it goes through or fails

   1. Blob: <binary data>: pictures, videos
   2. html: <mazimobility.com>
   3. json: <>

8. how does a rest api relate to js.
   ->github users list <>
   ->search github users.
   ->github api https://api.github.com/users
   POSTMAN <->


   //keylogger- evrything user types gets sends to you remotrly

   */
