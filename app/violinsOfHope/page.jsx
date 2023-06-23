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
            <div className="flex flex-col items-center md:w-2/3">
                <h1 className="text-2xl font-semibold text-maroon mx-auto text-center p-4">Violins of Hope</h1>
                <YouTube videoId={videoId}  opts={videoOptions} className='w-full h-80 2xl:h-[720px] 2xl:w-[650px] 2xl:mx-auto 2xl:px-8'/>
            </div>
        <div className=" md:w-2/3 py-4">
         <h1 className="text-2xl font-semibold text-red-900 mx-auto text-center p-4">Doctoral Recital Booklet</h1>
            <iframe 
                src="https://heyzine.com/flip-book/9b76a89d4b.html" 
                title="Violins of Hope"
                className="w-full h-80 2xl:h-[750px] 2xl:w-[750px] 2xl:mx-auto 2xl:px-8"
            />
        </div>
    </div>
    )
}


// "w-full h-screen 2xl:h-[1000px] 2xl:w-[1250px] 2xl:mx-auto"
