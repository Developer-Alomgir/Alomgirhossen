import Head from 'next/head'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IMAGES = [
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/071/582/814/large/alomgirs-art-dimension-419482742-3686901844862658-6423547798894802573-n.jpg?1705495449', alt: '240K GT Car 3D Assets' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/071/594/196/large/alomgirs-art-dimension-416055485-229086306906762-1764985316877850287-n.jpg?1705511648', alt: 'Japan Street Artwork' },
  { src: 'https://cdnb.artstation.com/p/assets/images/images/070/765/501/large/alomgirs-art-dimension-412097291-2301895530021277-6381011595412999417-n.jpg?1703431258', alt: 'Nissan GT-R' }
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  { src: 'https://cdna.artstation.com/p/assets/images/images/070/000/174/large/alomgir-train.jpg?1701506323', alt: 'Train Station' },
  
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <Head><title>My Project Gallery</title></Head>
      <main className="container">
        <h2>Gallery — Game Engine & Web Apps</h2>
        <p className="muted">Click an image to open lightbox. Hover to zoom.</p>

        <div className="gallery-grid">
          {IMAGES.map((img,i)=>(
            <motion.div key={i} whileHover={{scale:1.03}} className="img-wrap" onClick={()=>setSelected(img)}>
              <img src={img.src} alt={img.alt} loading="lazy"/>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}>
              <motion.img src={selected.src} alt={selected.alt} initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  )
}
