import app from './app.js';
import config from './config.js';

app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`);
  console.log(`http://localhost:${config.PORT}`);
});