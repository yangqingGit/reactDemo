import 'whatwg-fetch';
const apiAdress = "https://mg.kmelearning.com/web-student/api/my";
const companyCode = "bjrcb";
const siteCode = "nxsxy";

export const poolId = "1475347988661407744";//经验池ID
export const projectId = "1475348425869455360"; //项目id

const code = "&companyCode=" + companyCode + "&siteCode=" + siteCode;
var token = ""
const fetchUrl = {
    get: function (url, callback) {
        url = apiAdress + url + code;
        fetch(url, { headers: { 'Authorization': token } })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('请求失败')
            })
            .then(data => {
                callback(data.data);
            })
            .catch(error => {
                console.log(error)
            })
    },
    post: function (url, data, callback) {
        fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": token
            },
            body: JSON.stringify(data)
        }
        ).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('请求失败')
        }).then(data => {
            callback(data.data);
        }).catch(error => {
            console.log(error)
        })
    }
}
export { fetchUrl };
