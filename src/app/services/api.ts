const call = async (method : string, path : string) => {
    const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + path,
        {
            method: method,
            headers: {
                'Accept': 'application/ld+json',
            },
            cache : process.env.NODE_ENV === "development" ? 'no-store' : 'default'
        }
    );

    const data = await res.json();

    if(res.ok)
    {
        return data;
    } else {
        console.log(data)
        return Promise.reject("Erreur dans la requete")
    }
}

const get = async (path : string) => {
    return await call('GET', path);
}

export default get;