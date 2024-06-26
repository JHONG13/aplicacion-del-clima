import { useEffect, useState } from "react";

const ScreenLoad = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [])

  const loadingClass = isLoading ? "load" : "hide";

  return (
    <div className={`${loadingClass}`}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48.92 56.48"
        >
        <g>
            <g>
            <path
                d="M24.45,56.48,0,42.36V14.12L24.46,0,48.92,14.12V42.36ZM1.89,41.26l22.56,13L47,41.26v-26l-22.56-13-22.56,13Z"
            ></path>
            <path
                d="M28.58,15.39H25.16L35.78,36H31.49L20.67,15.71,8.23,38.82H18.94l3-5.43h-3.4l-1.47,2.54h-4l2.69-5.09H25.85l4.28,8H40.67ZM17.23,28.21l3.57-6.6,3.57,6.6Z"
            ></path>
            </g>
        </g>
        </svg>
    </div>
  )
}

export default ScreenLoad