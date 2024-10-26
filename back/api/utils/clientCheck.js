const { default: axios } = require('axios')
const apiConfig = require('../apiConfig')
const {randomBytes} = require('crypto')
const clientCheck = async (token)=>{
    console.log(token)
    if(!token){
        token=randomBytes(16).toString('hex');
        
    }
    return token

}
module.exports={clientCheck}