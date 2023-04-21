"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonotcallClient = void 0;
const axios_1 = __importDefault(require("axios"));
class DonotcallClient {
    async savePhoneRegistration({ email, language = "en-US", phone1 = "", phone2 = "", phone3 = "" }) {
        return await axios_1.default.post('https://www2.donotcall.gov/save-phone-registration', {
            email,
            language,
            phone1,
            phone2,
            phone3
        }, {
            headers: {
                Referer: 'https://donotcall.gov',
                Accept: 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/json;charset=UTF-8',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-US,en;q=0.9'
            },
            responseType: 'json'
        });
    }
}
exports.DonotcallClient = DonotcallClient;
//# sourceMappingURL=donotcall.js.map