const express = require("express");
const router = express.Router();
const { validation } = require("../middlewares/validation/validation");
const {
  addGameSchema,
  updateGameSchema,
} = require("../middlewares/validation/schemas/games");
const Games = require("../controllers/games");
const {
  showAllGames,
  getGameById,
  getGameDescription,
  addGame,
  deleteGame,
  updateGame,
  getGameByTitle,
  clearGames,
} = Games;

router
  .route("/")
  .get(showAllGames)
  .post(validation(addGameSchema), addGame)
  .delete(clearGames);
router
  .route("/:id")
  .get(getGameById)
  .delete(deleteGame)
  .patch(validation(updateGameSchema), updateGame);
router.route("/:id/description").get(getGameDescription);
router.get("/search/:title", getGameByTitle);
module.exports = router;
