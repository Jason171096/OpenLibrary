export const Header = () => {
    return (
        <header className="w-full h-screen">
            <div className="bg-header-image bg-no-repeat bg-center bg-cover w-full h-full relative">
                <div className="relative w-full h-36 top-1/3 bg-opacity-70 bg-brown-brown">
                    <h1 className="text-white text-6xl text-center relative top-5">Book's Store</h1>
                    <h2 className="text-white relative top-6 text-center text-3xl">Bookstore and Publishing House</h2>
                    <div className="absolute bg-white w-20 h-2 top-20"></div>
                    <div className="absolute bg-white w-20 h-2 top-20 right-0"></div>
                </div>
            </div>
        </header>
    )
}

