const Joi = require('joi');
const HTTPError = require('../HTTPError');

const validator = (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().alphanum().required(),
    });
    const data = req.body;
    const { _, error } = schema.validate(data);
    if (error) {
      throw new HTTPError('Bad request', 400);
    }
    next();
  } catch (error) {
    if (error instanceof HTTPError) {
      res.send(error);
    } else {
      res.send(error.message).status(500);
    }
  }
};

module.exports = { validator };
