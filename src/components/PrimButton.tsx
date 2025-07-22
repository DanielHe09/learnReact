import { ReactNode } from "react"

interface PrimButtonProps {
    children: ReactNode;
    onSelectItem: (item: string) => void;
}

function PrimButton({children, onSelectItem}: PrimButtonProps){

    return   (
        <>
            <button type="button" className="btn btn-primary"
                onClick={() => {
                    onSelectItem("ButtonClicked")
                }}
            >{children}</button>  
            
        </>
    )
}
export default PrimButton