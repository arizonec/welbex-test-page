import '../scss/components/Main.scss';

export function Main() {
    return (
        <div className='main'>
            <div className='main__about'>
                <h1>Зарабатывайте больше<span><br/>с WELBEX</span></h1>
                <h3>Развиваем и контролируем продажи за вас</h3>
            </div>
            <div className='main__promo'>
                <div className='promo__title'>Вместе с <span>бесплатной консультацией</span> мы дарим:</div>
                <div className='promo__about'>
                    <div className='grid1'>
                        <h3>Виджеты</h3>
                        <p>30 готовых решений</p>
                    </div>
                    <div className='grid2'>
                        <h3>Dashboard</h3>
                        <p>с показателями вашего бизнеса</p>
                    </div>
                    <div className='grid3'>
                        <h3>Skype Аудит</h3>
                        <p>отдела продаж и CRM системы</p>
                    </div>
                    <div className='grid4'>
                    <h3>35 дней</h3>
                        <p>использования CRM</p>
                    </div>
                </div>
                <button className='btn' type='submit'>
                    Получить консультацию
                </button>
            </div>
        </div>
    )
}