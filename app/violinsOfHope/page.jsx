'use client';
import YouTube from 'react-youtube';

export default function ViolinsOfHope() {


    const videoOptions = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    }

    const videoId = "Wiv3d5C9Ng4"

    return (
        <div className="h-screen flex flex-col md:flex-row items-center justify-evenly">
            <div className="  md:w-1/2">
                <YouTube videoId={videoId}  opts={videoOptions} className='w-full h-80 2xl:h-[900px] 2xl:w-[900px] 2xl:mx-auto 2xl:px-10'/>
            </div>
        <div className=" md:w-1/2 py-4">
            <iframe 
                src="https://heyzine.com/flip-book/9b76a89d4b.html" 
                title="Violins of Hope"
                className="w-full h-80 2xl:h-[900px] 2xl:w-[900px] 2xl:mx-auto 2xl:px-10"
            />
        </div>
    </div>
    )
}


// "w-full h-screen 2xl:h-[1000px] 2xl:w-[1250px] 2xl:mx-auto"
