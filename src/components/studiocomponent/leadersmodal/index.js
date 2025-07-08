import React, { useRef, useEffect } from 'react'
import "./leadersmodal.scss"
import Commonbutton from '../../commonbutton';
import useScrollLock from './../../scrolllock/index';

export default function Leadersmodal({ isOpen, onClose, leaderData }) {
  const modalRef = useRef();

  useScrollLock();

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
    function stopPropagation(e) {
      const atTop = modal.scrollTop === 0;
      const atBottom = modal.scrollTop + modal.clientHeight >= modal.scrollHeight;
      if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) {
        e.stopPropagation();
      }
    }
    modal.addEventListener('wheel', stopPropagation, { passive: false });
    return () => {
      modal.removeEventListener('wheel', stopPropagation);
    };
  }, []);

  if (!leaderData) return null;
  const modalData = leaderData.Modaldata && leaderData.Modaldata[0];

  return (
    <div>
      <div
        className={`leaders-modal-overlay${isOpen ? ' open' : ''}`}
        onClick={onClose}
      ></div>
      <div className={`leaders-modal-close-button${isOpen ? ' open' : ''}`}>
        <Commonbutton Buttontext="close" ButtonLink="none" onClick={onClose} />
      </div>
      <div className={`leaders-modal-main${isOpen ? ' open' : ''}`}>
        <div className='leaders-modal'>
          <div className='leaders-model-left'>
            <img src={modalData?.ModalLeaderImage || ''} alt={modalData?.ModalTitle || ''} />
          </div>
          <div className='leaders-model-right' ref={modalRef}>
            <div className='leaders-model-right-head blend-mode'>
              <h1 className='blend-mode'>{modalData?.ModalTitle || ''}</h1>
              <h2 className='blend-mode'>{modalData?.ModalLeaderpara || ''}</h2>
            </div>
            <div className='leaders-model-right-body blend-mode'>
              {modalData?.ModalContent?.map((para, idx) => (
                <p className='blend-mode' key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
