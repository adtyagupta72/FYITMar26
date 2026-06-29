import { useRef, useEffect } from "react";

export default function DialogPOC({ isOpen, onClose, title, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal(); // Opens as a native modal overlay
    } else {
      dialog.close(); // Closes the modal
    }
  }, [isOpen]);

  // Handle native backdrop clicks and 'Escape' key dismissals
  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <dialog 
      ref={dialogRef} 
      onCancel={handleCancel}
      style={{
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        maxWidth: "500px",
        width: "100%"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>{title}</h3>
        <button onClick={onClose} style={{ cursor: "pointer" }}>✕</button>
      </div>
      <div style={{ marginTop: "15px", marginBottom: "15px" }}>
        {children}
      </div>
    </dialog>
  );
}