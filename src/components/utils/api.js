export const API_BASE = "http://localhost:7000";

export const getToken = () => localStorage.getItem("token");
export const getRole = () => localStorage.getItem("role");
export const setAuth = (token, role) => {
  if (token) localStorage.setItem("token", token);
  if (role) localStorage.setItem("role", role);
};
export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

export async function apiFetch(
  path,
  { method = "GET", body, auth = false } = {}
) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const token = getToken();
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data?.message || data?.error || "Request failed";
    throw new Error(msg);
  }
  return data;
}
