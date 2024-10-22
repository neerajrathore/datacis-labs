import { useParams } from "react-router-dom";

export default function Technologies() {
    let params = useParams();
    console.log(params);
    return(
        <p>{params.technologiesId}</p>
    )
}