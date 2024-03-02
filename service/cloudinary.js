const cloudinary = require("cloudinary").v2;
const { CLOUD_NAME, API_CLOUD_KEY, API_CLOUD_SECRET } = process.env;
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_CLOUD_KEY,
  api_secret: API_CLOUD_SECRET,
});

module.exports = cloudinary;
