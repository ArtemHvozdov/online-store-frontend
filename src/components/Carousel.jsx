
import {useState, useEffect, Children, cloneElement} from "react";

const Carousel = ({children}) => {

    const styles = {
        arrowL: {
            transform: "rotate(180deg)"
        }
    }

    const [pages, setPages] = useState([])
   const [offset, setOffset] = useState(0)

   const handleLeftArrowClick = () => {
     setOffset((currentOffset) => {
       const newOffset = currentOffset + 417
       return Math.min( newOffset, 0)
     })
   }
   const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 417
      const maxOffset = -(417 * (pages.length - 1))
      return Math.max( newOffset, maxOffset)
    })
   }

   useEffect(() => {
     setPages(
       Children.map(children, (child) => {
         return cloneElement(child, {
           style: {
             minWidth: "20%",
             maxWidth: "20%",
             height: "12%"
           }
         })
       })
     )
   }, [])

  

  return (
    <div className='main_container'>
        <img style={styles.arrowL} className='arrow' src='public/icons/arrow-right.svg' onClick={handleLeftArrowClick}/>
             <div className='window'>
        <div className='all_pages_container' style={{
        transform: `translateX(${offset}px)`,
        }}>
        {pages}
    </div>

    </div>
        <img src='public/icons/arrow-right.svg' className='arrow_r' onClick={handleRightArrowClick}/>
    </div>
    )
    }


export default Carousel;



 // {/*<Carousel>*/}



 {/*</Carousel>*/}