const axios = require("axios");

const createRequest = async (opts) => {
	if (typeof opts !== "object") {
		throw new Error("Invalid body")
	}
	const { url, content } = opts;
	if (!url || !content) {
		throw new Error("Missing body > (url & content)")
	}
	const { data } = await axios.request({
		baseURL: "https://worker.itsrose.site",
		url: url,
		method: "POST",
		headers: {
			["User-Agent"]: "Frieren-Scraper (0.0.1x)"
		},
		data: content
	}).catch((e) => e === null || e === void 0 ? void 0 : e.response);
	return data;
}
exports.chatAI = async (content) => {
	if (typeof content !== "object" || !(Array.isArray(content) && content.length)) {
		throw new Error("Invalid body");
	}
	return await createRequest({
		url: "/api/turbo",
		content
	})
}
exports._get = async (url) => {
	return await axios.get(url, {
		headers: {
			["User-Agent"]: "okhttp/4.1.9"
		}
	}).catch((e) => e === null || e === void 0 ? void 0 : e.response)
}
