
<h1 align="center">
    <img alt="GoBarber 2.0" src="https://res.cloudinary.com/dqiqmpz8u/image/upload/c_scale,w_312/v1591458497/gobarber-2.0_opjvy7.png" />
    <br>
    GoBarber 2.0
</h1>

<h4 align="center">
  Barbershop fullstack application as a product of Rocketseat Bootcamp Gostack 11
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/leandrosoares6/gobarber-2.0.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leandrosoares6/gobarber-2.0.svg">

  <a href="https://app.codacy.com/manual/leandrosoares6/gobarber-2.0?utm_source=github.com&utm_medium=referral&utm_content=leandrosoares6/gobarber-2.0&utm_campaign=Badge_Grade_Dashboard">
    <img alt="Codacy grade" src="https://api.codacy.com/project/badge/Grade/5ff7efbd40bc45098cae0566ad2ff1b2">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/leandrosoares6/gobarber-2.0.svg">
  <a href="https://github.com/leandrosoares6/gobarber-2.0/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/leandrosoares6/gobarber-2.0.svg">
  </a>

  <a href="https://github.com/leandrosoares6/gobarber-2.0/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/leandrosoares6/gobarber-2.0.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/leandrosoares6/gobarber-2.0">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p align="center">
<br/>
<h3>Web app demo</h3>
  <img alt="Web app Demo" src="https://res.cloudinary.com/dqiqmpz8u/image/upload/v1591462481/gobarber-2.0/Gifs/gobarber-2.0-web_mqh7kc.gif">
</p>
<h3>Mobile app in construction...</h3>

## :rocket: Technologies

### Backend

#### Environment packages:
-  [Node.js](https://nodejs.org)
-  [Dotenv](https://www.npmjs.com/package/dotenv)

#### Infrastructure packages:
-  [Express](https://expressjs.com/)
-  [TypeORM](https://typeorm.io/#/)
-  [MongoDB](https://www.mongodb.com/)
-  [Redis](https://redis.io/)
-  [aws-sdk](https://aws.amazon.com/sdk-for-node-js/)

#### Test packages:
-  [Jest](https://jestjs.io/)
-  [Supertest](https://github.com/visionmedia/supertest)

#### Security packages:
-  [Cors](https://www.npmjs.com/package/cors)
- [jsonwebtoken](https://jwt.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)

#### Code formatter, style guide and dependency injection:
-  [Prettier](https://prettier.io/)
-  [Eslint](https://eslint.org/)
-  [Tsyringe](https://github.com/microsoft/tsyringe)

### Frontend web
-  [React](https://reactjs.org/)
-  [Context API](https://pt-br.reactjs.org/docs/context.html)
-  [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)
-  [react-day-picker](https://react-day-picker.js.org/)
-  [React Icons](https://react-icons.github.io/react-icons/)
-  [Polished](https://polished.js.org/)
-  [styled-components](https://www.styled-components.com/)
- And more..



## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/leandrosoares6/gobarber-2.0

# Go into the repository
$ cd gobarber-2.0

# Install npm dependencies
$ yarn

# Rename to root file 'ormconfig.example.json' to 'ormconfig.json' and adapt it with your credentials
# Configure postgresql, mongo and redis before run migrations

# Run the migrations
$ yarn typeorm migration:run

# Run the server
$ cd server
$ yarn dev:server

# Run the web app
$ yarn start
```

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/leandrosoares6/gobarber-2.0/blob/master/LICENSE) for more information.

## Author

👤 **Leandro Neves**

* Website: gitshowcase.com/leandrosoares6
* Github: [@leandrosoares6](https://github.com/leandrosoares6)
* LinkedIn: [@leandrosoares6](https://linkedin.com/in/leandrosoares6)

## Show your support

Give a ⭐️ if this project helped you!

---