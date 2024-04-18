type TRequest = (
  input: string | URL | Request,
  init?: FetchRequestInit
) => Promise<Response>;
export const getBaseServer = () => {
  return "test2";
  const args = Bun.argv.slice(2);
  const cEnv = args[1];
  return cEnv;
};

export const getBaseBranch = () => {
  return "feat/vite-build";
  const args = Bun.argv.slice(2);
  const branch = args[0];
  return branch;
};
const getBaseUrl = () => {
  const urls: any = {
    test: "http://10.15.100.164:8080",
    test2: "http://10.15.100.164:8080",
    prod: "http://10.15.3.165:8080",
  };
  return urls[getBaseServer()];
};
export const BASE_URL = Bun.env.PW_BASE_URL
const getHeader = (h?: HeadersInit) => {
  const headers = {
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja;q=0.6",
    "Cache-Control": "no-cache",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie:
      "screenResolution=1920x1080; JSESSIONID.0de241f9=node01fglchw0c5h1njlp0c2jc4qr34363.node0",
    Origin: BASE_URL,
    Pragma: "no-cache",
    "Proxy-Connection": "keep-alive",
    Referer: BASE_URL,
    "Upgrade-Insecure-Requests": "1",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    ...h,
  };
  return headers;
};

const request: TRequest = (input: URL | RequestInfo, init?: FetchRequestInit) => {
  const headers = {
    ...getHeader(init?.headers),
    
  };
  return fetch(input, {
    
    ...init,
    headers,
    proxy: "http://localhost:8888",
  });
};

export default request;