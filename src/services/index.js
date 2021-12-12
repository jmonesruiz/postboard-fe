import axios from "axios";

const baseUrl = "http://localhost:8080";

export async function postUser() {
	try {
		const res = await axios({
			url: `${baseUrl}/v1/users`,
			method: "POST",
		});
		return res;
	} catch (error) {
		console.error(error);
		return { status: 400 };
	}
}

export async function getUser(userId) {
	try {
		const res = await axios({
			url: `${baseUrl}/v1/users/${userId}`,
			method: "GET",
		});
		return res;
	} catch (error) {
		console.error(error);
		return { status: 400 };
	}
}

export async function postPb(userId, name) {
	try {
		const res = await axios({
			url: `${baseUrl}/v1/pb`,
			method: "POST",
			data: {
				name: name,
				creatorId: userId,
			},
		});
		return res;
	} catch (error) {
		console.error(error);
		return { status: 400 };
	}
}

export async function findPb(secretCode) {
	try {
		const res = await axios({
			url: `${baseUrl}/v1/pb/find/${secretCode}`,
			method: "GET",
		});
		return res;
	} catch (error) {
		console.error(error);
		return { status: 400 };
	}
}

export async function getPb(pbId) {
	try {
		const res = await axios({
			url: `${baseUrl}/v1/pb/${pbId}`,
			method: "GET",
		});
		return res;
	} catch (error) {
		console.error(error);
		return { status: 400 };
	}
}

export async function deletePostboard(pbId) {
	try {
		const res = await axios({
			url: `${baseUrl}/v1/pb/${pbId}`,
			method: "DELETE",
		});
		return res;
	} catch (error) {
		console.error(error);
		return { status: 400 };
	}
}

export async function postMessage(pbId, message, author, color, authorId) {
	try {
		const res = await axios({
			url: `${baseUrl}/v1/pb/${pbId}`,
			method: "POST",
			data: {
				message: message,
				author: author,
				color: color,
				authorId: authorId,
			},
		});
		return res;
	} catch (error) {
		console.error(error);
		return { status: 400 };
	}
}

export async function deleteMessage(pbId, messageId) {
	try {
		const res = await axios({
			url: `${baseUrl}/v1/pb/${pbId}/${messageId}`,
			method: "DELETE",
		});
		return res;
	} catch (error) {
		console.error(error);
		return { status: 400 };
	}
}
