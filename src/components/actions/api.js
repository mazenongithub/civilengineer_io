export async function SaveContactUs(values) {
    const APIURL = `${process.env.REACT_APP_SERVER_API}/civilengineer/savecontactus`;

    try {
        const response = await fetch(APIURL, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (!response.ok) {
            const data = await response.json().catch(() => ({}));
            const message =
                data.message || 'Request failed or server is not responding';
            throw new Error(message);
        }

        return await response.json();

    } catch (err) {
        throw err instanceof Error ? err : new Error(String(err));
    }
}
