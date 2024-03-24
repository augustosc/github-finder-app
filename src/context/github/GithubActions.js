
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

/** executa o fetch e salva em users */
export const searchUsers = async (text)=>{

    const params = new URLSearchParams({
        q: text
    })
    
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })
    const {items} = await response.json()

    return items
   
}

/** get a single user */
export const getUser = async (login)=>{

    const response = await fetch(`${GITHUB_URL}/users/${login}`,{
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    if (response.status === 404) {
        window.location = '/notfound'
    } else {
        const data = await response.json() 

        return data
    }

    
}

export const getRepos = async (login)=>{

    const params = new URLSearchParams({
        sort: "ceated_at",
        per_page: 10 
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,{
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })
    const data = await response.json()

    return data
   
}
