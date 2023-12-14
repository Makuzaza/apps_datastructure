import { useRouteError } from "react-router-dom";

export default function ErrorPage () {
    const error = useRouteError(); 
    return (
        <>
        <h1>Ups, something went again</h1>
        <p>{error.statusText || error.message}</p>
        </>
    )
};

