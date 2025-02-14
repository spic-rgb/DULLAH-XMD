const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VU2Y6jOBT9F78m1WEJW6SShi0kgYTs26g1MmDA7AFDQkr59xa1qOphuqeGJwvw8fFZ7gvIclwhE7Vg9AKKEjeQoG5J2gKBEVBq30cl6AMPEghGYD6JHTKs3N04K6tkV7PqPRofGglhL90lNjqn9yG1dsjGmD6DRx8UtZNg9w+ANaSjmcCJtc/FTFjOGbON3Yr0RNw0fMVMsWxdsakIobp7Bo8OEeISZ4FehChFJUxM1C4hLr9H/7I02LUqHXNzoto3PR/kl2Kniko0h3BxhbODqkS7uK4t5vQ9+np4Gu6Wu8amxmeJKKZ33h3qszMx0lNew3qym44dDRdWL5Tf6Fc4yJA39VBGMGm/rXutsBOdyrZ0Jt44j7/kyWClQc0YTHK/PkaDmUbWO0+IF+NvEufdGZNDWFriYSNSuX3aybq/Hq7WjQzt/XiWnaIhz27lixp/Jb4sP7IS/x/dd8v0tlqx0aJnXoKpcLyEgb33YyW8trqW+0kexCdB0qZU9s3YSOsF9tmUouLehbE3ttamonzdUEm1WRgHOzLX6pJmbaegxU/6kNTln1gKRy493zl2vDGmtoQ0YmrnZB0MilmTldEqNJmlOdzeIVXb+r72zUkmzFoT085KmUt8YVsHKfJbwrslOgj3rWDMRSO6Pr/eKEbt1AMj+tEHJQpwRUpIcJ517xiqD6DXbJBbIvKqLkjLSEQ9mmlO+VJSDyhtZoObQ+J1e/SdsGJduF/4raVwqfwM+qAocxdVFfImuCJ52c5RVcEAVWD0988+yNCNvPnWncbSfeDjsiK7rC6SHHofpn58hK6b1xnZtJmrdgtUghH1+RoRgrOg6mSsM1i6IW6QGkJSgZEPkwo9+sBDDXZRhweUef3PNTcWG8i44pHXJjdWSa8d5TDP3n6hfJEb8p775EHBexqKEvUEHRc9iUOG9gRBEHnPB32A3yvT7fmtgwYMaC7e75g86dVIWzUicnXnGk4u+qsLb9KjEnlgRMoa9YED3bgutnmMsj/gJneRnrIUG3PcIA7a3nJR1L1lHLck+IL7ZikYvXyOKTX3OjxmtbbWljwHfZC+JhB3N2d4VqClocRRvDAS2b+qH9dOSFgUPzJEOtx30bsdHiIQJxUYAXXKMlSTT/SZEDYlZRjyKpDVQAafJn2E/S1NN/d86qlLOq+q06WW/cAaCuv7eHgsi7CepSsOp1KQJoveRH/+FxAwAsWVtxayyIaBzW4XYb1o1SOmbofBImUv/saaWz1qrGbtvb5X+60EVelg926nS4DmC1pbRVs7x7Bxbkq9P2y2errxOVfpmvERlq+HJVNFp3UtrfSSbc5cc2R0U1szilQ73t5Zreazseouye1gGD68bBpRaw/0bTseiJptmRzjnso2WlfjjE7Pdr4JdOo8DeS3Gr6OgeR9/OLXhry8R8vH6HWaZTBF/23O15RTj/4XjPf5+JskKe7ROCyDSIKWZZhlMBmqPZtyb2jM8ycHn2P7VDSnWbH1wxt4PH72QZFA4udlCkYAZl6ZYw/0QQIrIn8WdYtTVBGYFmBEC6zE8QIjcH2QtnJRbAgkH/0GcvdYtyl4/ALngw8T+gcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
