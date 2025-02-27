import express from 'express';
import colors from 'colors';
import type { Express } from 'express';

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
    console.info(
        colors.magenta(`[SERVER] Server is started: ${3001}`)
    );
});

export { app }
