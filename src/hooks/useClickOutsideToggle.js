import { useEffect, useRef, useState } from 'react'

const useClickOutsideToggle = () => {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
      const handeClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)){
          setExpanded(false)
        };
      };
      document.addEventListener('mouseup', handeClickOutside)
      return () => {
        document.removeEventListener('mouseup', handeClickOutside)
      };
    }, [ref]);

  return { expanded, setExpanded, ref};
  
};

export default useClickOutsideToggle;