# foodwebapp
Description- This foodwebapp will help restaurant owners to list their restaurants and dishes on the app and will help consumers to buy those dishes. Both restaurant owners and consumers
will have to register and login specifically in their profile. Restaurant Owners can't buy dishes while consumers can't create restaurants in the app. 

I have used MERN stack for this webapp.

Starting with backend, I have used mongoose for creeating schema for different models, to connect one schema with another, "ref" and "mongoose.Schema.ObjectId" was used.
JWT was used for authentication(registration, login and preventing non-logged in user). Synchronous functions are used in controller so that code executes step by step and catches any error.
To handle requests, express routers were used for handling request to different section.In server.js, mongodb database was connected which was pretty easy because of good UI of mongodb atlas.
While checking my API calls, I faced multiple errors due to wrong end points and wrong code but at the end it was all correct which took a large amount of time.

To connect frontend with backend, "createContext" was imported and connecting server and client side was a bit difficult and hectic, I used axios to get data from backend on the site.
useReducer was used to handle multiple switch cases. This part was completely new for me but it looked similar to useState so I figured it out with some youtube tutorials.
Developing layout was pretty easy using materialiseCSS (didn't use bootstrap so that the site isn't heavy and loads easily) except the in-line JS functions which was used to link to different sections.

For placing order as a user, Proptypes was used to validate the order property. And for viewing orders, getOrders was called from ResContext. This part was also new to me and I faced
difficulty in connecting this with mongoose models and Rescontext. But, this learning helped me in developing Restaurants&Dishes section.

I didn't knew how to set auth token, which is used to send access tokens to a server.In axios documentation, there is a way to set default header with every request you make, so 
that solved the issue of manually attaching token with each requests.Home,Login and Register pages were developed pretty easily.

To view the project, click on the link attached with the project...
