import express from "express";

const router = express.Router();
router.route("/").get((req, res) => {
  return res.status(200).json({
    message: "API is up and running",
    success: true,
  });
});
export default router;
