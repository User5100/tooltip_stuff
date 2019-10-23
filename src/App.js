import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import "./App.css";

const Spacer = () => <div className="app__spacer"></div>

const CityTax = ({ copy }) => {
  let myRef = useRef(false);
  return (
    <>
      <button>
        <span>
          {copy}
        </span>
        <FontAwesomeIcon icon={faQuestionCircle} data-tip='tooltip' />
      </button> 
      <ReactTooltip />
    </>
  )
}

function App() {

  return (
    <div>
      <CityTax copy="British City Tax" />
      <Spacer />
      <CityTax copy="German City Tax"/>
      <Spacer />
      <CityTax copy="Bulgarian City Tax" />
      <Spacer />
      <CityTax copy="Kazakhstan City Tax" />
      <Spacer />
      <CityTax copy="Utah" />
    </div>
  );
}

export default App;
