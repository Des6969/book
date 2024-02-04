const router = require("express").Router();
const bookController = require("./book.controller");

router.get("/", (req, res) => {
  res.json({ msg: "Hello from book routes" });
});

router.get("/", async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    result = await bookController.create(data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await bookController.updateById(id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await bookController.updateById(id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await bookController.removeByid(id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
