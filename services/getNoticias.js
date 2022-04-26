import { endPoints } from "../utils/endpoints";

async function getNoticias(token) {
    const res = await fetch(endPoints.getNoticias(), {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `token=${token}`,

    });
    const data = await res.json();
    return data;
}

export default getNoticias;
