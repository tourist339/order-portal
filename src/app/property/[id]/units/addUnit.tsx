import ReactModal from "react-modal"
type AddUnitProps = {
    isOpen : boolean
}
export default function AddUnit({isOpen}:AddUnitProps) {
    return (
        <>
            <ReactModal isOpen={isOpen} className={"addUnitModal"}>
                <button className={"absolute right-3 top-3"}>X</button>
                <h1>#21321</h1>
            </ReactModal>
        </>
    )
}