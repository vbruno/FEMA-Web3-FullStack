import { useState } from "react";
import { api, server } from "./api/axios";

export default function App() {

  const [dataRequest, setDataRequest] = useState("")

  const style = "underline"

  async function handleButton() {
    console.log("Função");

    const resultAPI = await api.get("/")

    const user = resultAPI.data.results[0]

    const nomeFull = `${user.name.first} ${user.name.last}`

    const userEmail = user.email

    const resultSERVER = await server.post("user/", {
      name: nomeFull,
      email: userEmail
    })

    console.log(resultSERVER);

    console.log(user);

    setDataRequest(`${nomeFull} - ${userEmail}`)
  }

  return (
    <div className="bg-zinc-800 h-screen flex justify-center items-center">
      <div className="w-[451px] h-[451px] bg-gray-100 flex  justify-center items-center rounded-3xl
      space-y-5 flex-col">
        <h1 className={`text-2xl font-bold ${style} hover:bg-slate-500`} >Hello World!!!</h1>
        <button onClick={handleButton}>Request</button>
        <p>---------------------------</p>
        <p>{dataRequest}</p>
      </div>

    </div >
  )
}
