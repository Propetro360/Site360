export const URL = "https://intelli-bridge.azurewebsites.net/api/v1/pumps";
export const LOCAL_URL = "http://localhost:4000/api/v1/pumps";
export const PULL_DATA_URL = "http://127.0.0.1:8000/blender";

export async function getIntelliData(url = LOCAL_URL) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
  });
  return response.json();
}

export async function getPulledData(url = PULL_DATA_URL) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
  });
  return response.json();
}