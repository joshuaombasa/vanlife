export async function getVans() {
    const response = await fetch("/api/vans")

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

