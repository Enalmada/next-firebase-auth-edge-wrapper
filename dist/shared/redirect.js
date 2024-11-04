// src/shared/redirect.ts
function appendRedirectParam(url, redirectUrl) {
  if (redirectUrl) {
    return `${url}?redirect=${redirectUrl}`;
  }
  return url;
}
export {
  appendRedirectParam
};
