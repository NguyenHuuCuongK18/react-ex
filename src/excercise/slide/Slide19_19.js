import axios from "axios";
import { useState } from "react";
function Slide19_19() {
    const [data, setData] = useState(null);
    const [postResult, setPostResult] = useState("");
    const [putResult, setPutResult] = useState("");
    const [deleteResult, setDeleteResult] = useState("");
    const handleGet = () => {
        axios
            .get("https://api.example.com/posts")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handlePost = () => {
        axios
            .post("https://api.example.com/posts", { title: "New Post", body: "Hello, world!" })
            .then((response) => {
                setPostResult(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handlePut = () => {
        axios
            .put("https://api.example.com/posts/1", { title: "Updated Post", body: "Hello again!" })
            .then((response) => {
                setPutResult(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleDelete = () => {
        axios
            .delete("https://api.example.com/posts/1")
            .then((response) => {
                setDeleteResult(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };



    return (
        <>
            <button onClick={handleGet}>Fetch Data</button>
            {data && (
                <div><h2>Data:</h2>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            )}
            <button onClick={handlePost}>Create Post</button>
            <button onClick={handlePut}>Update Post</button>
            <button onClick={handleDelete}>Delete Post</button>

            <div>Post Result: {postResult}</div>
            <div>Put Result: {putResult}</div>
            <div>Delete Result: {deleteResult}</div>
        </>
    );
}
export default Slide19_19