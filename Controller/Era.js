import { Url } from "../models/Url.js";
import shortid from "shortid";

export const urlShort = async (req, res) => {
    try {
        const longUrl  = req.body.longUrl;
        const shortCode = shortid.generate();
        
        // Save URL to database
        await Url.create({ shortCode, longUrl });
        
        const shortUrl = `http://localhost:4001/${shortCode}`;
        console.log("url short successfully", { shortCode, longUrl });
        
        res.render("Rama", { shortUrl });
    } catch (error) {
        console.log("Error shortening URL:", error);
        res.status(500).send("Error shortening URL");
    }
};

export const getOriginalUrl = async (req, res) => {
    try {
        const shortCode = req.params.shortCode;
        
        // Find URL in database
        const urlRecord = await Url.findOne({ shortCode });
        
        if (urlRecord) {
            res.redirect(urlRecord.longUrl);
        } else {
            res.status(404).send("URL not found");
        }
    } catch (error) {
        console.log("Error retrieving URL:", error);
        res.status(500).send("Error retrieving URL");
    }
};