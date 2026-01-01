import { useState } from "react";
import { getWopiUrl } from "../api";

const DocViewer = () => {
    const [iframeUrl, setIframeUrl] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const openDocument = async () => {
        try {
            setLoading(true);
            const data = await getWopiUrl();
            setIframeUrl(data.officeUrl);
        } catch {
            setError("Failed to load document");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={openDocument}>Open Document</button>

            {loading && <p>Loading document...</p>}
            {error && <p>{error}</p>}

            {iframeUrl && (
                <iframe
                    src={iframeUrl}
                    title="DOCX Viewer"
                    width="100%"
                    height="600px"
                />
            )}
        </div>
    );
};

export default DocViewer;
