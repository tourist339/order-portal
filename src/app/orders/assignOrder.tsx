import ReactModal from "react-modal";
import {WorkerData} from "@/model/workerdata";
import  "./styles.css"
type AssignOrderProps = {
    isOpen: boolean;
    workerData: WorkerData[];
}
const AssignOrder:React.FC<AssignOrderProps> = ({isOpen, workerData})=>{
    return (
        <ReactModal isOpen={isOpen} className={"assignOrderModal"}>
            <p >hey</p>
            <input type={"text"} placeholder={"Search"}/>
            {
                workerData?workerData.map(data=>{
                    return (
                        <div className={"flex"}>
                            <p>{data.Name}</p>
                            <p>{data.Distance}</p>
                        </div>
                    )
                }):<></>
            }
        </ReactModal>
    )
}

export default AssignOrder;