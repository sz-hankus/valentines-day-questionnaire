import { useState } from "react"

interface AuthenticationProps {
  children: React.ReactNode
}

const Authentication = ({ children }: AuthenticationProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState("");

  const authenticate = (name: string) => {
    console.log(name)
    if (name.toLowerCase() === "weronika") {
      setAuthenticated(true);
      return;
    }
    setAuthenticated(false);
  }

  return (
    <>
      {authenticated ? (<>{children}</>) : (
        <>
          {/* background */}
          <div className="absolute bg-gray-300 opacity-50 w-full h-screen flex flex-row justify-center items-center">
          </div>

          <div className="absolute w-full h-screen flex flex-row justify-center items-center">
            <div className="flex flex-col space-y-4 justify-center items-center rounded-xl xl:w-2/6 lg:w-2/5 md:w-2/5 w-4/5 h-2/5 min-h-64 bg-white p-6 border-4 border-gray-300">

              <div className="">
                <p className="text-2xl text-center">Kim jesteś? 🧐 <br/> Podaj swe imię </p>
              </div>

              <div className="flex flex-row divide-x divide-gray-400 space-x-3 bg-slate p-2 mt-2 border-2 border-gray-300 rounded-2xl">
                  <div className="" />
                  <input onChange={event => setName(event.target.value)} className="grow bg-transparent outline-none border-none text-slate-700"></input>
              </div>

              <button onClick={() => authenticate(name)} className="text-2xl text-white max-w-40 p-2 bg-blue-500 hover:bg-blue-600 rounded-lg border-2 border-blue-300">Potwierdzam</button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Authentication