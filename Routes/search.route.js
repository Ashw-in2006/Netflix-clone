import express from "express";
import { searchperson,
     searchmovie,
      searchtv,
       getSearchHistory,
        removeItemFromSearchHistory } from "../controllers/search.controller.js";

const router = express.Router();

router.get("/person/:query", searchperson);
router.get("/movie/:query", searchmovie);
router.get("/tv/:query", searchtv);

router.get("/history", getSearchHistory);

router.delete("/history/:id", removeItemFromSearchHistory);

export default router;
