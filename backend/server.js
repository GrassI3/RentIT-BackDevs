const express = require('express');
const app = express();
const itemsRoutes = require('./routes/items');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

app.use(express.json());
app.get('/', (req, res) => {
  res.send(`Welcome to the Items API! Visit /api-docs for Swagger documentation.
    and /api/items for items`);
});
app.use('/api/items', itemsRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
