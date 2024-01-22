import { useState } from "react";
import ModalPopup from "./modal";
const ModalTest = () => {

    const [showModalPopup,setShowModalPopup] = useState(false);

    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup);
    }

    function onClose(){
        setShowModalPopup(false);
    }

  return (
    <div>
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {
            showModalPopup && <ModalPopup onClose={onClose} />
        }
    </div>
  )
}

export default ModalTest;