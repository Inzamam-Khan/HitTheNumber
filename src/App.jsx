import { useEffect, useRef } from "react";
import { useState } from "react"
import { randomNumber } from "./randomNumber";


function App() {

  const [numbers, setNumbers] = useState([])
  const [winningCounter, setWinningCounter] = useState([]);
  const [rounds, setRounds] = useState(1);
  const [won, setWon] = useState(0)


  var selectedNumber = numbers[Math.floor(Math.random() * 5)]




  const handleRounds = (e) => {

    const value = e.target.value

    if (rounds <= 5) {

      if (value == selectedNumber) {
        e.target.style.background = "green"
        setWinningCounter([...winningCounter, 'W'])
        setWon((state) => state + 1)
        setTimeout(() => {
          setRounds((state) => state + 1)
          e.target.style.background = ""

        }, 1000)

      }
      else {


        e.target.style.background = "red"
        setWinningCounter([...winningCounter, "L"])
        setWon((state) => state - 1)

        setTimeout(() => {

          setRounds((state) => state + 1)
          e.target.style.background = ""



        }, 1000)


      }

    }

    else {
      return;
    }

  }


  const handleGameOver = () => {
    setWinningCounter([])

    setRounds(1)

    setWon(0)

  }





  useEffect(() => {

    var temp = randomNumber()
    setNumbers(temp)






  }, [rounds])





  return (
    <div className="flex flex-col justify-center h-[70vH] border-black">



      {
        rounds <= 5 ? (
          <>

            {/* <div className="8xl">{selectedNumber}</div> */}
            <div className=" p-2 w-full flex items-center gap-2  justify-center">
              <h4 className="text-2xl p-2">Status:</h4>
              {winningCounter.map((item, index) => (



                <div key={index}>

                  {

                    item === 'W' ? (<svg width={'1.5rem'} height={"1.5rem"} fill="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" /></svg>)
                      :
                      (

                        <svg fill="red" width={'1.5rem'} height={"1.5rem"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" /></svg>)
                  }

                </div>

              ))}
            </div>



            <div className=" border-red-500 flex flex-col items-start justify-center">
              <h4 className="text-3xl p-4 text-center w-full">Round {rounds}</h4>


            </div>

            <div className="text-center  border-black text-xl p-3">Click the Random Number!</div>


            <div className="flex gap-4 items-center justify-center p-4">
              {numbers.map((item, index) => (
                <button onClick={(e) => { handleRounds(e) }} value={item} key={index} className="text-3xl flex justify-center border 
                                border-slate-300 min-w-[4rem] p-3 rounded-full  cursor-pointer hover:bg-neutral-700 text-center">
                  {item}
                </button>
              ))}

            </div>


          </>) : (<GameOverModal handleGameOver={handleGameOver} won={won} />)
      }

    </div>
  )
}

export default App




const GameOverModal = ({ handleGameOver, won }) => {

  return (

    <>
        <div className=" border-black w-full h-[70vH] flex flex-col items-center justify-center gap-4">

        <div>

          {won > 0 && <>
            <h4 className="p-2 leading-normal text-3xl bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">Congratulations You won!! </h4>
            <div className="p-2 leading-normal text-3xl text-center w-full border border-blue-50"> 🎉🎈🎁</div>
          </>
          }


          {won < 0 &&

            <>
              <h4 className="p-2 leading-normal text-3xl bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">Lost!! Better Luck Next Time </h4>
              <div className="p-2 leading-normal text-3xl text-center w-full  border-blue-50"> 👎  😭</div>
            </>

          }

        </div>

        <div className="flex gap-5 items-center justify-center">
          <button onClick={handleGameOver} className="border cursor-pointer hover:bg-green-500  p-2 rounded-xl ">Play Again </button>
          <button onClick={() => window.close()} className="border cursor-pointer hover:bg-red-500  p-2 rounded-xl ">Game Close </button>
        </div>

      </div>
    </>
  )


}
