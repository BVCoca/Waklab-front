const call = async (method : string, path : string) => {
    const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + path,
        {
            method: method,
            headers: {
                'Accept': 'application/json',
            },
        }
    );

    const data = await res.json();

    if(res.ok)
    {
        return data;
    } else {
        return Promise.reject("Erreur dans la ")
    }
}

const get = async (path : string) => {
    return await call('GET', path);
}

export default get;