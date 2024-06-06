import axios from "axios";
import { useState } from "react";
function Slide19_13() {
    const [repos, setRepos] = useState([]);
    const [status, setStatus] = useState();
    const getRepos = function () {
        axios({
            method: 'get',
            url: 'https://api.github.com/users/facebook/repos'
        }).then(resp => { setRepos(resp.data); })
            .then(setStatus("fetched"))
            .catch(error => console.error(error))
    }
    const logRepos = function () {
        console.log(repos);

    }
    return (
        <>
            <button onClick={getRepos}>{status ? "Fetched" : "Fetch Repos"}</button>
            <button onClick={logRepos}>Log Repos</button>
            {repos.length > 0 && (
                <ul>
                    {repos.map((repo) => (
                        <li key={repo.id}>{repo.description}</li>
                    ))}
                </ul>
            )}

        </>
    )
}
export default Slide19_13;
