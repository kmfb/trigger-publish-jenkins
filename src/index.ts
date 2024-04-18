import { build, getCrumbValue, getIndexPage, login } from "./util"

const cookieSet = new Set();

const addCookies = (setCookieHeader: any) => {
    const cookies = setCookieHeader.split(',');
    cookies.forEach((cookie: any) => cookieSet.add(cookie));
}

const getCookieStr = () => {
    return Array.from(cookieSet).join('; ');
}

const main = async () => {

    const sckLogin = await login()
    addCookies(sckLogin)

    const response = await getIndexPage({
        Cookie: getCookieStr(),
    })
    addCookies(response.headers.get("set-cookie"))
    const html = await response.text()
    const crumbValue = getCrumbValue(html)
    build({
        crumbValue: crumbValue,
        Cookie: getCookieStr(),
    })
    
}

main()