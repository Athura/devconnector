const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @route     GET api/me
// @desc      Get current user's profile
// @access    private
router.get('/', auth, async (req, res) => {
    try {
        const profile = await Profile
    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error :D");
    }
})

module.exports = router;