import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const UseGsap = () => {

    useGSAP(()=> {
        gsap.to('#blue-box', {
            x: 250,
            duration: 2,
            repeat: -1,
            ease: 'circ.in',
            rotation: 360,
            yoyo: true
        })


    }, [])


    useGSAP(()=> {
        gsap.fromTo('.para', {
            opacity: 0,
            y: 20
        },{
            opacity: 1,
            y: 0, 
            delay: 1,
            stagger: 0.1
        }
    )

    }, [])
    




  return (
    <div className=''>
        <div>
            <h1 className='para'>Hello World</h1>
            <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat, nostrum doloribus, iste molestiae tempore enim est distinctio architecto magni saepe eos quos eaque libero tempora quisquam optio ipsum reiciendis laborum aliquid earum minus.</p>
        </div>


    </div>
  )
}

export default UseGsap;