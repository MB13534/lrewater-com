const express = require('express');
const { checkAccessToken, checkPermission } = require('../middleware/auth.js');
const { Examples } = require('../models');

// Create Express Router
const router = express.Router();

// Attach middleware to ensure that user is authenticated & has permissions
router.use(checkAccessToken(process.env.AUTH0_DOMAIN, process.env.AUDIENCE));
router.use(checkPermission(["read:database-management", "write:database-management"]));

// GET /api/examples
// Route for returning all examples
router.get(
  '/',
  (req, res, next) => {
    Examples.findAll()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        next(err);
      });
  },
);


// GET /api/examples/:id
// Route for retrieving a single example
router.get(
  '/:id',
  (req, res, next) => {
    Examples.findByPk(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        next(err);
      });
  },
);

// POST /api/examples
// Route for creating a new example
router.post(
  '/',
  (req, res, next) => {
    Examples.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        next(err);
      });
  },
);

// PUT /api/examples/:id
// Route for updating an existing example
router.put(
  '/:id',
  (req, res, next) => {
    Examples.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    })
      .then((data) => {
        res.json(data[1][0]);
      })
      .catch((err) => {
        next(err);
      });
  },
);

// DELETE /api/examples/:id
// Route for deleting an example
router.delete(
  '/:id',
  (req, res, next) => {
    Examples.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        next(err);
      });
  },
);

module.exports = router;
