import { useParams } from "react-router-dom";

export default function Services() {
    let params = useParams();
    console.log(params);
    return(
        <p>{params.serviceId}</p>
    )
}