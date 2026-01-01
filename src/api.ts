// src/api.ts
import axios from "axios";

interface WopiResponse {
    officeUrl: string;
    token: string;
}

const BASE_URL = "https://docxviewer-be-production.up.railway.app"

export const getWopiUrl = async (): Promise<WopiResponse> => {
    const res = await axios.get<WopiResponse>(
        `${BASE_URL}/api/wopi-url`
    );
    //   const res = await axios.get<WopiResponse>(
    //     "http://localhost:4000/api/wopi-url"
    //   );
    return res.data;
};
