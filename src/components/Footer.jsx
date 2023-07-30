import '../scss/components/Footer.scss';

export function Footer() {
    return (
        <div className="footer">
           <div className='footer__about'>
            <h2>о компании</h2>
            <div className='links'>
                <a href="">Партнерская программа</a>
                <a href="">Вакансии</a>
            </div>
           </div>
           <div className='footer__menu'>
            <h2>меню</h2>
            <div className='footer__columns'>
                <div className='firstColumns'>
                    <a href="">Расчет стоимости</a>
                    <a href="">Услуги</a>
                    <a href="">Виджеты</a>
                    <a href="">Интеграции</a>
                    <a href="">Наши клиенты</a>
                </div>
                <div className='secondColumns'>
                    <a href="">Кейсы</a>
                    <a href="">Благодарственные письма</a>
                    <a href="">Сертификаты</a>
                    <a href="">Блог на YouTube</a>
                    <a href="">Вопрос / Ответ</a>
                </div>
            </div>
           </div>
           <div className='footer__contacts'>
            <h2>контакты</h2>
            <div className='footer__phone'>+7 555 555-55-55</div>
            <div className='footer__icons'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='footer__adress'>Москва, Путевой проезд 3с1, к 902</div>
            <p className='footer__license'>©WELBEX 2022. Все права защищены. <br/> Политика конфиденциальности</p>
           </div>
        </div>
    )
}