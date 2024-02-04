const router = require("express").Router();
const bookRouter = require("../modules/books/book.route");

router.use("/api/v1/books", bookRouter);

module.exports = router;
