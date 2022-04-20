import { endPoints } from "../utils/endpoints";

async function postLogIn(usuario, clave) {
	const res = await fetch(endPoints.postLogin(), {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: `usuario=${usuario}&clave=${clave}`,
	});
	const userInfo = await res.json();
	return userInfo;
}

export default postLogIn;
