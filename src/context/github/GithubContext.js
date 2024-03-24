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

export const GithubProvider = ({children})=>{
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state,dispatch] = useReducer(githubReducer,initialState)

    return <GithubContext.Provider
        value = {{
            ...state,
            dispatch,
        }}
    >
        {children}
    </GithubContext.Provider>

}

export default GithubContext