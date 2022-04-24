import { endPoints } from "../utils/endpoints";

async function getResume(token) {
    const res = await fetch(endPoints.getResume(), {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `token=${token}`,

    });
    const data = await res.json();
    return data;
}

export default getResume;
