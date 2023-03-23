const express = require('express');
const possport = require('passport');

const router = express.Router();

router.post(
  '/login',
  possport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      res.json(req.user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
