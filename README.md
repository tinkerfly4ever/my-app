This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Install npm https://www.npmjs.com/get-npm

 
Spin up server: 
1. Make changes to stripe_hw.js that are unique to each user.  
  A.   Update line 4 of stripe_hw.js to reflect the path where the client side code is stored. All client side code should be stored in the same directory. This directory is unique to each user.   
  B.   Update line 12 of stripe_hw.js with unique secret key (accessed via Dashboard)
2.  Spin up the server with the following command prompt:  node stripe_hw.js 
3.  The server is successfully started when you see this message on the terminal:  Node server listening on port 4242!

Client: 
1.  Collect all client side code and move them to the same directory.  
2.  Make changes to script.js that are unique to each user. Update line 39 with unique publishable key (accessed via Dashboard)
3.  Visit:  http://localhost:4242/  to view website that supports the PaymentIntents integration

