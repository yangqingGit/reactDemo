import 'whatwg-fetch';
const apiAdress = "https://mg.kmelearning.com/web-student/api/my";
const companyCode = "bjrcb";
const siteCode = "nxsxy";

export const poolId = "1475347988661407744";//经验池ID
export const projectId = "1475348425869455360"; //项目id

const code = "&companyCode=" + companyCode + "&siteCode=" + siteCode;
var token = "eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJpYXQiOjE2NDEzNzM2MjUsInN1YiI6ImRvbmdoeEBrbWVsZWFybmluZy5jb20iLCJpc3MiOiJlbGVhcm4iLCJjb21wYW55Q29kZSI6ImJqcmNiIiwiYWNjb3VudElkIjoiODgyNjUxOTExMDA3ODQ3IiwiY29tcGFueUlkIjoiMTA5NjMxNTEwMjExMTg0MjMwNCIsImNvbXBhbnlOYW1lIjoi5YyX5Lqs5Yac5ZWG6ZO26KGMIiwiY29udGV4dCI6IntcImFjY291bnRGdWxsTmFtZVwiOlwiXCIsXCJhY2NvdW50SWRcIjo4ODI2NTE5MTEwMDc4NDcsXCJhY2NvdW50TmFtZVwiOlwiXCIsXCJhZG1pblwiOmZhbHNlLFwiYXV0aENvZGVcIjpcIlwiLFwiY29tcGFueUNvZGVcIjpcImJqcmNiXCIsXCJjb21wYW55SWRcIjoxMDk2MzE1MTAyMTExODQyMzA0LFwiY29tcGFueU5hbWVcIjpcIuWMl-S6rOWGnOWVhumTtuihjFwiLFwiaGVhZFBvcnRyYWl0XCI6XCJcIixcImlzQ29tbXVuaXR5TWFuYWdlclwiOmZhbHNlLFwiaXNPbmx5Q29tbXVuaXR5XCI6ZmFsc2UsXCJtYW5hZ2VySWRzXCI6W10sXCJvcmdJZFwiOjEzMDk3MzM4OTkyOTExMjc4MDgsXCJvcmdJZHNcIjpbXSxcIm9yZ05hbWVcIjpcIlwiLFwicGNCaW5kTG9naW5cIjpmYWxzZSxcInJlbW90ZUFkZHJcIjpcIjEwLjQyLjE4MS41XCIsXCJyZXF1ZXN0SWRcIjpcIjliNDZiODIzLTg1ODctNDk5Zi1hMzc5LTkyOGViM2U5NDNmOVwiLFwicmVxdWVzdFR5cGVcIjpcIlwiLFwic2l0ZUNvZGVcIjpcIm54c3h5XCIsXCJzaXRlSWRcIjoxMTA4NTU0OTkwMDk4MzcwNTYwLFwic2l0ZU1lbWJlclwiOjAsXCJzaXRlTmFtZVwiOlwi5YaF6K6t5biI5a2m6IuRLeS6uuWKm-i1hOa6kFwifSIsInNpdGVJZCI6IjExMDg1NTQ5OTAwOTgzNzA1NjAiLCJleHAiOjE2NDE5Nzg0MjUsIm5iZiI6MTY0MTM3MzYyNX0.jJ_ErPbC-dfB7HvlB816NqQWT6ZX0fa6tujwOqeScfY"
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