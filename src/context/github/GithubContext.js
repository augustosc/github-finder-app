/** PARA CRIAR O CONTEXT
 * 1- importar createContext
 * 2- criar o context: const GithubContext = createContext()
 * 3- criar o Provider: 
 * 
 *      export const GithubProvider = ({children})=>{
 * 
 * 4- incluir no provider os states e as funcoes a serem exportadas
 * 5- atribuir os valores aos states: setUsers(data)
 * 6- retornar o context provider retornando os states (como values) e children:
 * 
 * return <GithubContext.Provider
        value = {{
            users,
            loading
        }}
    >
        {children}
    </GithubContext.Provider>
    
 * 7- exportar o context: export default GithubContext

 */

import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children})=>{
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state,dispatch] = useReducer(githubReducer,initialState)

    /** executa o fetch e salva em users */
    const searchUsers = async (text)=>{

        setLoading()

        const params = new URLSearchParams({
            q: text
        })
        
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const {items} = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
       
    }

    /** get a single user */
    const getUser = async (login)=>{

        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`,{
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json() 

            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }

        
    }

    const getRepos = async (login)=>{

        setLoading()

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

        dispatch({
            type: 'GET_REPOS',
            payload: data
        })
       
    }



    const setLoading = ()=>{
        dispatch({
            type: 'SET_LOADING',
        })
    }

    const clearUsers = ()=>{
        dispatch({
            type: 'CLEAR_USERS'
        })
    }


    return <GithubContext.Provider
        value = {{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getRepos
        }}
    >
        {children}
    </GithubContext.Provider>

}

export default GithubContext