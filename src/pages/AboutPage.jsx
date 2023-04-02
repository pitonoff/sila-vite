import hands from '../img/handsOnTree.png'

const AboutPage = () => {
    return (
        <div>
            <p>
                Цель проекта “Сила взаимопомощи” в развитие социальной сети взаимоподдержки. Здесь вы сможете искать партнеров для коммерческого или социального проекта, принять участие в группе психологической помощи, узнавать о новых интересных культурных событиях или предложить свое, а также получать полезную информацию по психологии и другим направлениям.
                Мы приглашаем к участию в проекте тех, кто разделяет гуманистические ценности, принципы терпимости и уважения к каждому человеку.
                В перспективе мы также планируем запустить кассу взаимопомощи, для участников проекта которые находятся в трудной ситуации и нуждаются в финансовой поддержке.
            </p>

            <img src={hands} alt="руки на дереве" />

        </div>
    )
}

export default AboutPage