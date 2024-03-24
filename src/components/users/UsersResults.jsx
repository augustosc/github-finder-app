import { useContext } from "react"
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"
import GithubContext from "../../context/github/GithubContext"

function UsersResults() {

  /** PARA USAR O CONTEXT
   * 1- importar useContext
   * 2- importar o context: import GithubContext
   * 3- obter os states do context:
   *    const {users,loading} = useContext(GithubContext)
   */
  const {users,loading} = useContext(GithubContext)

  // useEffect(()=>{
  //   fetchUsers()
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])

  /** na primeira renderizacao carrega o spinner, pois
   * loading=true.
   * Ao final desta o useEffect eh chamado e faz o fetch.
   * Na renderizacao subsequente os dados sao apresentados
   * na tela.
   */
  if (!loading) {
    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
           {users.map((user)=>(
                <UserItem key={user.id} user={user} />       
        ))}
          
        </div>
      )
  } else {
    return <Spinner />
  }
}

export default UsersResults
