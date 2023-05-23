import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(22);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPos({ x: clientX, y: clientY });
    setIsCursorVisible(true);
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);

  useEffect(() => {
    const updateCursorSizeHandler = (event) => {
      const { target: { classList } } = event;
      if (classList.contains('mouse-lg')) setCursorSize(200);
      if (classList.contains('mouse-md')) setCursorSize(100);
      if (classList.contains('mouse-sm')) setCursorSize(60);
    }

    const resetCursorSizeHandler = (event) => {
      const { target: { classList } } = event;
      if (classList.contains('mouse-lg') || classList.contains('mouse-md') || classList.contains('mouse-sm')) {
        setCursorSize(22);
      }
    }

    document.body.addEventListener('mouseover', updateCursorSizeHandler);
    document.body.addEventListener('mouseout', resetCursorSizeHandler);

    return () => {
      document.body.removeEventListener('mouseover', updateCursorSizeHandler);
      document.body.removeEventListener('mouseout', resetCursorSizeHandler);
    }
  }, []);

  return (
    <div 
      className={`cursor ${!isCursorVisible ? 'cursor--hidden' : ''}`}
      style={{
        transform: `translate(${cursorPos.x - (cursorSize/2)}px, ${cursorPos.y - (cursorSize/2)}px)`,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        transition: 'width 0.2s, height 0.2s',
      }}
    />
  );
}

export default CustomCursor;
