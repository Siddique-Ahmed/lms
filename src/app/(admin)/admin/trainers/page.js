import { TrainerModal } from "@/components/Dialog/TrainerModal"
import {TrainerTable} from "../../../../components/DataTables/TrainerTable"


export default function Trainers (){
  return(
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
      <h1 className="text-4xl font-bold text-center">Trainers</h1>
      <TrainerModal/>
      </div>
    <TrainerTable/>
    </div>
  )
}