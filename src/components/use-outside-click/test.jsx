import React, { useRef, useState } from 'react'
import useOutsideClick from '.';

const UseOnClickOutsideTest = () => {

    const ref = useRef();

    useOutsideClick(ref, () => setShowContent(false));
    const [showContent,setShowContent] = useState(false);

  return (
    <div className='App'>
        {
            showContent ? <div ref={ref}>
                <h1>Random Content</h1>
                <p>Please click outside of this to close it</p>
            </div> : <button onClick={() => setShowContent(true)}>Show Content</button>
        }
    </div>
  )
}

export default UseOnClickOutsideTest