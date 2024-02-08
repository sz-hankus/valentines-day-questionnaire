import { useState } from 'react'
import { AppearingText } from './AppearingText'

const rejectedGifs = ["https://media1.tenor.com/m/JgJ9BQVFT8MAAAAC/shocked-cat.gif", "https://media1.tenor.com/m/CNI1fSM1XSoAAAAd/shocked-surprised.gif", "https://media1.tenor.com/m/mG2C4qgNU3EAAAAC/happy-birthday.gif"]
const acceptedGifs = ["https://media1.tenor.com/m/arqlNu8gyJYAAAAC/cat-cat-jumping.gif", "https://media1.tenor.com/m/06026DSpi60AAAAd/happy-cat.gif", "https://media1.tenor.com/m/aKFaZBrZFYcAAAAC/excited-spin.gif"]

function Questionnaire() {
  const [chosenGif, setChosenGif] = useState("");
  const [rejectBtnDisabled, setRejectBtnDisabled] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [intervalId, setIntervalId] = useState<number>(0);  // used for the "slideshow"

  const nextGif = (current: string, gifArray: string[]) => {
    const next = gifArray[(gifArray.indexOf(current) + 1) % gifArray.length];
    return next;
  }

  const swapGifOnReject = () => {
    setChosenGif(current => nextGif(current, rejectedGifs));
  }


  const startAcceptedGifSlides = () => {
    clearInterval(intervalId);
    setRejectBtnDisabled(true);
    setChosenGif(current => nextGif(current, acceptedGifs));

    const id = setInterval(() => {
      setChosenGif(current => nextGif(current, acceptedGifs));
    }, 2000)
    setIntervalId(id);
  }

  const onAccept = () => {
    startAcceptedGifSlides();
    setAccepted(true);
  }
  
  return (
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <div className="flex flex-col items-center space-y-4 px-6">
          <AppearingText text="Czy zostaniesz moją walentynką?"/>
          <img src={chosenGif} className={chosenGif === "" ? "hidden" : "h-80" }/>
          <div className='flex flex-row space-x-3 items-center'>
            <button 
            type="button" 
            className="flex flex-row items-center space-x-2 focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
            onClick={onAccept}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              </svg>
              <span>Tak</span>
            </button>

            <button 
            type="button"
            className={
              rejectBtnDisabled ? 
              "flex flex-row items-center space-x-2 focus:outline-none text-white bg-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2"
              :
              "flex flex-row items-center space-x-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"}
            onClick={swapGifOnReject}
            disabled={rejectBtnDisabled}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
              </svg>
              <span>Nie</span>
            </button>
          </div>
          <div>
            <button 
            type="button"
            className={
              accepted ? 
              "flex flex-row items-center space-x-2 focus:outline-none text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2"
              :
              "hidden"}
            onClick={swapGifOnReject}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <span>Oblokuj niespodziankę</span>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Questionnaire
