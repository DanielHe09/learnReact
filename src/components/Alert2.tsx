import { useState } from "react";


const Alert2 = () => {
const [visible, setVisible] = useState(true);

    if (visible == false) return null;

    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>setVisible(false)}></button>
        </div>
    )
}

export default Alert2