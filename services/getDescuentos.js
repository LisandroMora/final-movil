import { endPoints } from "../utils/endpoints";

async function getDescuentos(token) {
    const res = await fetch(endPoints.getDescuentos(), {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `token=${token}`,

    });
    const data = await res.json();
    return data;
}

export default getDescuentos;
