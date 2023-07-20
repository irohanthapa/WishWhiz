const express = require('express');
const { summaryController, paragraphController, chatbotController, sciImageController } = require('../controllers/openaiController');

const router = express.Router();

//route
router.post('/summary', summaryController)
router.post('/paragraph', paragraphController)
router.post('/chatbot', chatbotController)
router.post('/sci-image', sciImageController)

module.exports = router;