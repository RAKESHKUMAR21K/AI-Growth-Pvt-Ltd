import express from 'express';
import { subscribeNewsletter, submitConsultation, getLiveTelemetry, runAIChatbot } from '../controllers/agencyController.js';

const router = express.Router();

router.post('/subscribe', subscribeNewsletter);
router.post('/consultation', submitConsultation);
router.get('/telemetry', getLiveTelemetry);
router.post('/ai-agent', runAIChatbot);

export default router;