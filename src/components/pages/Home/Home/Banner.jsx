
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/vd32F8Q/photo-1588580000645-4562a6d2c839.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-xl text-white">
                        <h1 className="mb-5 text-5xl font-bold ">Welcome to <br /> Book-Mania(c)</h1>
                        <p className="mb-5">This system offers a comprehensive solution for organizing, managing, and accessing library resources efficiently. Whether you&apos;re a librarian, a student, or an avid reader, our platform simplifies the process of cataloging, borrowing, and returning books, ensuring a seamless experience for all users.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;