require('dotenv').config();

function get_env(){
    return process.env
}
exports.get_env = get_env