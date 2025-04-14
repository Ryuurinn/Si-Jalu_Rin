// Modal Component
function Modal({ children, onClose }) {
  const { useEffect, useRef } = React;
  const { createPortal } = ReactDOM;

  const modalRef = useRef();

  useEffect(() => {
    // Close modal when clicking outside content
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    // Close modal on escape key
    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="modal-backdrop" data-id="r6o7l6115" data-path="components/Modal.js">
      <div
        className="modal-content"
        ref={modalRef} data-id="17w2yz6v2" data-path="components/Modal.js">

        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal" data-id="oujqoj83l" data-path="components/Modal.js">

          <i className="fas fa-times" data-id="8q7rehq15" data-path="components/Modal.js"></i>
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}