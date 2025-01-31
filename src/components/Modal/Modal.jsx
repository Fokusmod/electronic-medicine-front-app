import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

import "./Modal.css";

import Button from "../Button/Button";

export default function Modal({ open, data, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog}>
      <div className="modal-title">Вы были записаны на приём.</div>
      <div className="modal-data">{data}</div>
      <div className="modal-message">Талон будет отправлен вам на почту</div>
      <div className="redirect-btn">
        <Button name="OK" func={onClose} />
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}
