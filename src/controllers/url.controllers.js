import shortid from 'shortid';
import Url from '../models/url.models.js';

// functio for shortening a URL
export const shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const shortId = shortid.generate();
    await Url.create({ shortId, originalUrl });
    res.json({ shortUrl: `http://localhost:${process.env.PORT}/${shortId}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// redirect to original URL 
export const redirectToOriginal = async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await Url.findOne({ shortId });
    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }
    res.redirect(url.originalUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// get recent 5s shortened URLs
export const getRecentUrls = async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 }).limit(5);
    res.json(urls);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
