export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const response = await fetch(url)

    try {
        if (response.ok) {
           const data =  await response.json()
           return data
        } else {
            throw {
                message: "Failed to fetch vans", 
                statusText: res.statusText,
                status: res.status
            }
        }
    } catch(error) {
        return error
    }

}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const response = await fetch(url)

    try {
        if (response.ok) {
           const data =  await response.json()
           return data
        } else {
            throw {
                message: "Failed to fetch vans", 
                statusText: res.statusText,
                status: res.status
            }
        }
    } catch(error) {
        return error
    }
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}



