import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';



mongoose.connect('mongodb://localhost:27017')
  .then(() => {

    const app = express();
    const port = 3001;


    app.use(express.json()); // Pega o JSON e transforma em OBJ JS, sempre colocar antes das rotas!!
    app.use(router);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

  })
  .catch((error) => console.log(error));
