import React, {useState} from 'react'

export const MusicPlayerContext = React.createContext([{},()=>{}])
const transformation = 'e_ordered_dither:11,ar_1:1,c_fill,q_auto,f_auto/e_grayscale/e_tint:100:515151:0p:438FF4:100p'
export const MusicPlayerProvider = ({children}) => {
const [state,setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
        {
            name: 'Go For Landing',
            file: 'https://res.cloudinary.com/makingthings/video/upload/v1568881368/mp3/go_for_landing.mp3',
            artwork: `https://res.cloudinary.com/makingthings/image/upload/${transformation}/v1579080574/mp3/photo-1446941611757-91d2c3bd3d45.jpg`

        },
        {
            name: 'Some Day',
            file: 'https://res.cloudinary.com/makingthings/video/upload/v1591284467/mp3/someday.mp3',
            artwork: `https://res.cloudinary.com/makingthings/image/upload/${transformation}/v1593619494/mp3/photo-1591055749071-927e6ddffc82.jpg`,
        },
        {
            name: 'Birthday',
            file: 'https://res.cloudinary.com/makingthings/video/upload/v1576483365/mp3/jg_bd_2018.mp3',
            artwork: `https://res.cloudinary.com/makingthings/image/upload/${transformation}/v1593619660/mp3/photo-1525351159099-81893194469e.jpg`
        }
    ],
    currentTrackIndex: null,
    isPlaying: false
})

    return(
        <MusicPlayerContext.Provider value={[state,setState]}>
            {children}
        </MusicPlayerContext.Provider>
    )
}