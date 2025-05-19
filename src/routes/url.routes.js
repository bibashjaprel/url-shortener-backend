import express from 'express';
import {
  shortenUrl,
  getRecentUrls,
  // redirectToOriginal,
} from '../controllers/url.controllers.js';
import limiter from '../middleware/rateLimiter.js';


const router = express.Router();

router.post('/shorten', limiter, shortenUrl);
// router.post('/shorten', shortenUrl);
router.get('/recent-shortened', getRecentUrls);
// router.get('/:shortId', redirectToOriginal);

export default router;
