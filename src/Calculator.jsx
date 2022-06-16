import { useId, useState } from 'react'
import arrow from './arrow-left.svg'

export const Calculator = () => {
    const [hasOperator, setHasOperator] = useState(false)
    const [firstVisorValue, setFistVisor] = useState()
    const [secondVisorValue, setSecondVisor] = useState()
    const [newNum, setNewNum] = useState(false)

    const eraseAll = () => {
        setFistVisor()
        setSecondVisor()
        setHasOperator(false)

    }

    const eraseLastValue = () => {
        setFistVisor(prevState => prevState.slice(0, -1))
    }

    const invertSignal = () => {
        setFistVisor(prevState =>{
            if(prevState > 0){
                return `-${prevState}`
            }
            return Math.abs(prevState)
        })
    }

    const addDecimal = () => {
        setFistVisor(prevState => {
            if(prevState === undefined){
                return `0.`
            }
            return `${prevState}.`
        })
    }

    const calculate = () => {
        const result = eval(`${secondVisorValue}${firstVisorValue}`)
        setFistVisor(result)
        setSecondVisor()
        setHasOperator(false)
    }

    const addNum = (value) => {
        setFistVisor(prevState => {
            console.log(firstVisorValue)
            if (firstVisorValue === undefined || newNum) {
                setNewNum(false)
                return value
                
            }

            return `${prevState}${value}`

        })
        setHasOperator(false)
    }

    const addOperator = (value) => {
        if (hasOperator === false) {
            setSecondVisor(prevState => {

                if (prevState === undefined) {
                    return `${firstVisorValue} ${value} `
                }
                return `${prevState}${firstVisorValue} ${value} `
            })
            setNewNum(true)
            setHasOperator(true)
        }


    }

    return (
        <div className='bg-blue-900 w-80'>
            <div>
                <div className='text-2xl text-gray-400 pt-4 mb-1 visor h-12'>{secondVisorValue}</div>
                <div className='text-3xl pb-4 text-white visor h-12'>{firstVisorValue}</div>
            </div>

            <div className="grid grid-cols-4">
                <button className="btn" onClick={() => setSecondVisor()}>AC </button>
                <button className="btn" onClick={eraseAll}>C</button>
                <button className="btn" onClick={eraseLastValue}><img src={arrow} alt="" /></button>
                <button className="btn" onClick={() => addOperator("/")}>/</button>
                <button className="btn" onClick={() => addNum(7)}>7</button>
                <button className="btn" onClick={() => addNum(8)}>8</button>
                <button className="btn" onClick={() => addNum(9)}>9</button>
                <button className="btn" onClick={() => addOperator("*")}>*</button>
                <button className="btn" onClick={() => addNum(4)}>4</button>
                <button className="btn" onClick={() => addNum(5)}>5</button>
                <button className="btn" onClick={() => addNum(6)}>6</button>
                <button className="btn" onClick={() => addOperator("-")}>-</button>
                <button className="btn" onClick={() => addNum(1)}>1</button>
                <button className="btn" onClick={() => addNum(2)}>2</button>
                <button className="btn" onClick={() => addNum(3)}>3</button>
                <button className="btn" onClick={() => addOperator("+")}>+</button>
                <button className="btn" onClick={invertSignal}>+/-</button>
                <button className="btn" onClick={() => addNum(0)}>0</button>
                <button className="btn" onClick={addDecimal}>.</button>
                <button className='btn' onClick={calculate}>=</button>
            </div>
        </div>
    )
}
