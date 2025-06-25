import { useRouteError } from "react-router-dom";


export const Error = ()=>{

const err = useRouteError();
console.log("error=====>",err);
return (
<div>

    <h1>Ooops!</h1>
    <h2>{err.status}:{err.statusText}</h2>

</div>
)

}