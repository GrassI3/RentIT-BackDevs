const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Items API',
      version: '1.0.0',
      description: 'Simple CRUD API with Swagger documentation',
    },
    components: {
      schemas: {
        Item: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: '1',
            },
            apartment: {
              type: 'string',
              example: 'taj',
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

module.exports = swaggerJSDoc(options);
