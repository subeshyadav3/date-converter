import NepaliDate from 'nepali-date-converter';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState(null);
  const [showDate, setShowDate] = useState(null);
  const [nepaliDate, setNepaliDate] = useState(null);
  
  
  const handleNepaliDate = () => {
    if (date) {
      const nepaliDate2 = new NepaliDate(date);
      const symbols = Object.getOwnPropertySymbols(nepaliDate2);
      const finalDate = nepaliDate2[symbols.find(
        (symbol) => symbol.toString() === "Symbol(JsDate)"
      )].toString();
      
      setShowDate(finalDate.slice(0, 16)); 
    }
  };

  const handleEnglishToNepali = () => {
    if (date) {
      const englishDate = new Date(date);
      const nepaliConverted = new NepaliDate(englishDate);
      const symbols = Object.getOwnPropertySymbols(nepaliConverted);
      const month = nepaliConverted[symbols.find(
        (symbol) => symbol.toString() === "Symbol(Date)"
      )].toString();
      const day = nepaliConverted[symbols.find(
        (symbol) => symbol.toString() === "Symbol(Day)"
      )].toString();
      const year = nepaliConverted[symbols.find(
        (symbol) => symbol.toString() === "Symbol(Year)"
      )].toString();
      const finalDate = year + '/' + day + '/' + month;

      setNepaliDate(finalDate);
    }
  };

  return (
    <>
      <h1 className='bg-[#000080] text-center text-3xl text-white py-5'>
        Date Converter
      </h1>
      <div className="min-h-screen bg-[#f0f4f8] flex justify-center items-center pt-10">
        <div className="flex flex-wrap justify-center gap-12 w-full max-w-4xl">
          
          <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg w-[300px] text-center">
            <input
              type="text"
              placeholder='2060/01/01'
              className='p-3 mb-4 border border-gray-300 rounded-md'
              onChange={(e) => setDate(e.target.value)}
            />
            <button
              className='bg-orange-600 text-white p-3 rounded-md mb-4 hover:bg-orange-700 transition'
              onClick={handleNepaliDate}
            >
              Nepali To English
            </button>

            {showDate && (
              <h2 className='text-xl text-gray-800'>
                Converted Date: <span className="font-bold">{showDate}</span>
              </h2>
            )}
          </div>

          <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg w-[300px] text-center">
            <input
              type="text"
              placeholder='YYYY/MM/DD'
              className='p-3 mb-4 border border-gray-300 rounded-md'
              onChange={(e) => setDate(e.target.value)}
            />
            <button
              className='bg-orange-600 text-white p-3 rounded-md mb-4 hover:bg-orange-700 transition'
              onClick={handleEnglishToNepali}
            >
              English To Nepali
            </button>

            {nepaliDate && (
              <h2 className='text-xl text-gray-800'>
                Converted Date: <span className="font-bold">{nepaliDate}</span>
              </h2>
            )}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
