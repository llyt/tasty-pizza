# Tasty Pizza Project

https://tasty-pizza.vercel.app/

This is my test project for the Frontend Developer vacancy. According to the terms of the assignment, I had to make a simple web application for a pizzeria using one of the fresh frameworks.

**This is frontend part only.** You can find backend API [there](https://github.com/llyt/tasty-pizza-api).

# How to use

Clone project to local machine
```
git clone git@github.com:llyt/tasty-pizza-api.git
```
Add `.env.local` file to root folder
```
touch .env.local
```
Add to `.env.local` NEXT_PUBLIC_API_URL variable with backend URL. _First you need to deploy the [backend part](https://github.com/llyt/tasty-pizza-api)._ 

Run a project in development mode
```
npm run dev
```
**or** build a project firstly
```
npm run build
```

and run a product version
```
npm run start
```

# Build with

- [Next.js](https://github.com/vercel/next.js) (Prerendered React)
- [Redux](https://github.com/reduxjs/redux) (State managment)
- [Redux-Saga](https://github.com/redux-saga/redux-saga/) (Redux side effects)
- [Sass](https://sass-lang.com/) (CSS Preprocessor)
### API
- [Express](https://github.com/expressjs/express)
- [Mongoose ODM](https://github.com/Automattic/mongoose)
- [MongoDB Atlas](https://www.mongodb.com/)

# Deploying

I used a free cloud solution – [Vercel](https://vercel.com/)

# Design and Pictures

For simplicity, I took the design and pictires of [Dodo Pizza](https://dodopizza.ru/) as a basis.