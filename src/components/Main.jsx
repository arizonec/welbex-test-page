import '../scss/components/Main.scss';

export function Main() {
    return (
        <main className='main'>
            <div className='main__about'>
                <h1>Зарабатывайте больше<span>с WELBEX</span></h1>
                <h3>Развиваем и контролируем продажи за вас</h3>
            </div>
            <div className='main__promo'>
                <div className='promo__title'>Вместе с <span>бесплатной консультацией</span> мы дарим:</div>
                <div className='promo__about'>
                    <div className='widgets'>
                        <title>Виджеты</title>
                        <p>30 готовых решений</p>
                    </div>
                    <div className='dash'>
                        <title>Dashboard</title>
                        <p>с показателями вашего бизнеса</p>
                    </div>
                    <div className='skype'>
                        <title>Skype Аудит</title>
                        <p>отдела продаж и CRM системы</p>
                    </div>
                    <div className='days'>
                    <title>35 дней</title>
                        <p>использованияCRM</p>
                    </div>
                </div>
                <button className='btn' type='submit'>
                    Получить консультацию
                </button>
            </div>
        </main>
    )
}