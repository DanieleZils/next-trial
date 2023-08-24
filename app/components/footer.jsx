


export default function Footer({hideOnMobile}){
    const footerClass = hideOnMobile ? 'hidden sm:block' : '';

    return(
        <div className={`bottom-0 z-50 w-full flex flex-row items-start h-16 px-4 pt-4 md:px-16 bg-transparent ${footerClass}`}>
            <div className="">
                <p className="text-xs text-black">
                © 2023 Becca Kasdan. All Rights Reserved.<br/> Developed by Crescendo Studios.
                </p>

            </div>
        </div>

    )
}