const Avatar = require('avatar-initials');
const { HttpCode } = require('../helpers/constants');
const axios = require('axios');
const gradientAvatar = require('gradient-avatar');

const github = async (req, res, next) => {
    try {
        let errCode=0;
        let errMessage='';
        let data = {};
        const {id, output} = req.query;
        if(!id) {
            errCode++;
            errMessage='id required';
        }

        if(errCode===0) {
            const githubAvatarUrl = Avatar.githubAvatar({
                id
            });
            const response = await axios.get(githubAvatarUrl, {
                responseType: 'arraybuffer'
            });
            if(output==='image') {
                const img = Buffer.from(response.data, 'base64');
                res.writeHead(200, {
                    'Content-Type': 'image/png',
                    'Content-Length': img.length
                });
                res.end(img);
                return res;
            }

            const base64 = Buffer.from(response.data, 'binary').toString('base64');


            data = {
                url: githubAvatarUrl,
                base64: base64,
            };

        }
        return res.status(HttpCode.OK).json({
            errCode,
            errMessage,
            data
        });
    } catch (e) {
        next(e);
    }
};



const gravatar = async (req, res, next) => {
    try {
        let errCode=0;
        let errMessage='';
        let data = {};
        const {email, output} = req.query;
        if(!email) {
            errCode++;
            errMessage='email required';
        }

        if(errCode===0) {
            const gravatarAvatarUrl = Avatar.gravatarUrl({
                email
            });
            const response = await axios.get(gravatarAvatarUrl, {
                responseType: 'arraybuffer'
            });
            if(output==='image') {
                const img = Buffer.from(response.data, 'base64');
                res.writeHead(200, {
                    'Content-Type': 'image/png',
                    'Content-Length': img.length
                });
                res.end(img);
                return res;
            }

            const base64 = Buffer.from(response.data, 'binary').toString('base64');


            data = {
                url: gravatarAvatarUrl,
                base64: base64,
            };

        }
        return res.status(HttpCode.OK).json({
            errCode,
            errMessage,
            data
        });
    } catch (e) {
        next(e);
    }
};


const initial = async (req, res, next) => {
    try {
        let errCode=0;
        let errMessage='';
        let data = {};
        let {initial, output, fg, bg, size, weight, font} = req.query;
        if(!initial) {
            errCode++;
            errMessage='email required';
        }

        font = font || "'Lato', 'Lato-Regular', 'Helvetica Neue'";
        fg = fg || '#888888';
        bg = bg || '#f4f6f7';
        size = size || 100;
        weight = weight || 100;

        if(errCode===0) {
            const initialAvatarUrl = gradientAvatar(initial, size);
            console.log(initialAvatarUrl);

            if(output==='image') {

                res.writeHead(200, {
                    'Content-Type': 'image/svg+xml',
                    'Content-Length': initialAvatarUrl.length
                });
                res.end(initialAvatarUrl);
                return res;
            }
            const response = await axios.get(initialAvatarUrl, {
                responseType: 'arraybuffer'
            });
            const base64 = Buffer.from(response.data, 'binary').toString('base64');


            data = {
                url: initialAvatarUrl,
                base64: base64,
            };

        }
        return res.status(HttpCode.OK).json({
            errCode,
            errMessage,
            data
        });
    } catch (e) {
        next(e);
    }
};


module.exports = {
    github,
    gravatar,
    initial,
};


/**
 * В контроллерах находится вся логика работы
 */
