import express from 'express';
import 'dotenv/config';
import './database';
import './config/database';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './swagger.json';
import routes from './routes/index';

const options = {
  // customCssUrl: path.resolve(__dirname, 'style.css'),
  customCss: `
    .swagger-ui .topbar { background-color: #705ec1; }
    .swagger-ui .topbar .wrapper .topbar-wrapper a > img {
      display: block;
      position: relative;
      top: 5px;
      left: 75px;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background: url(https://eyemobile.com.br/wp-content/uploads/2017/09/Logo_Eyemobile.svg) no-repeat;
      width: 180px; /* Width of new image */
      // height: 236px; /* Height of new image */
      padding-left: 180px; /* Equal to width of new image */
    }
  `,
  customSiteTitle: 'Eyemobile'
  // customCss: '.swagger-ui .topbar',
};

const app = express();

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerConfig, options));

app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
  routes
]);

app.listen(process.env.APP_PORT, () =>
  console.log(`🚀 server started on port ${process.env.APP_PORT}`)
);
