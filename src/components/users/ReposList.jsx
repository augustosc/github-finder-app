import RepoItem from "./RepoItem"

function ReposList({repos}) {

    if (repos.length === 0) return <p>repos not found</p>

  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
            <h2 className="text-3xl my-4 font-bold card-title">
                Latest Respositories
            </h2>
                {repos.map((repo)=>(
                        <RepoItem key={repo.id} repo={repo}/>
                ))} 
        </div>
    </div>
  )
}

export default ReposList
