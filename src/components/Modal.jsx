import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
        open() {
            console.log("Modal open triggered");
        if (dialog.current) {
            dialog.current.showModal();
        }
    }
    }
  });

  return createPortal(
    <dialog
    ref={dialog}
    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-lg backdrop:bg-stone-900/40"
    >
        {children}
        <form method="dialog">
            <button className="bg-stone-800 text-white px-4 py-2 rounded-md hover:bg-stone-900">{buttonCaption}</button>
        </form>
        </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;