import app from './app.js';
import { creatingConnectionWithDB } from './db.config.js';
creatingConnectionWithDB();
app.listen(process.env.PORT || 8081, () => {
    console.log(`listening on ${process.env.PORT || 8081}`);
});
