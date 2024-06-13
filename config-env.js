
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID:  process.env.PRABATH-MD~ZutEBbYB#KKcwQbcw2VX5KSx1LMduauPR2I0CiyvSxw2Q71dy5Tc,    
    BOT_NUMBER:  process.env.94765749332,
    GITHUB_USERNAME: username,Tirosh1
    GITHUB_AUTH_TOKEN: process.env.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,
};
