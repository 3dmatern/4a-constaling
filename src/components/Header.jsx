const Header = () => {
    return (
        <header
            className={`w-full flex items-center justify-center gap-[15.32px]`}
        >
            <p>Скидка действует:</p>
            <div>
                <div>
                    <p>09</p>
                    <p>:</p>
                    <p>59</p>
                </div>
                <div>
                    <p>минут</p>
                    <p>секунд</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
