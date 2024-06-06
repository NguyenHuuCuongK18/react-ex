import { useState } from "react";
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous request
        setTimeout(() => {
            const data = "Data has been loaded";
            const error = null;
            // Check the success or failure condition
            if (data) {
                resolve(data); // Resolve Promise with data
            } else {
                reject(error); // Promise rejected with error
            }
        }, 2000); // Simulate loading time
    });
};
const Slide19_9 = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const fetchDataHandler = async () => {
        setLoading(true);
        try {
            const response = await fetchData();
            setData(response);
            setError(null);
        } catch (error) {
            setData(null);
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <button onClick={fetchDataHandler} disabled={loading}>
                {loading ? "Đang tải..." : "Tải dữ liệu"}
            </button>
            {data && <div>{data}</div>}
            {error && <div>Error: {error}</div>}
        </div>
    );
};
export default Slide19_9;
