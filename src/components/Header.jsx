import '../scss/components/Header.scss';

export function Header () {
    return (
        <header className='header'>
            <div className='logo'>
                <div className='logo__img'>
                    <div className='logo__icon'></div>
                    <div className='logo__icon-title'></div>
                </div>
                <h2 className='logo__title'>крупный интегратор CRM в Росcии и ещё 8 странах</h2>
            </div>
            <nav className='nav'>
                <a href="#">Услуги</a>
                <a href="#">Виджеты</a>
                <a href="#">Интеграции</a>
                <a href="#">Кейсы</a>
                <a href="#">Сертификаты</a>
            </nav>
            <div className='info'>
                <div className='phone'>+7 555 555-55-55</div>
                <div className='icons'>
                       <div></div>
                       <div></div>
                       <div></div>
                </div>
            </div>
        </header>
    )
}