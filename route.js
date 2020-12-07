const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    message: 'Hello Express',
  });
})

module.exports = router;
