const server = require('./src/server/server.js');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
server.listen(port, () => console.log(`Servidor ouvindo na porta ${port}`));