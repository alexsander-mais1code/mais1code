import styles from './index.module.scss';

export default function Personagem() {
    return <div className={`${styles['personagem-item']}  container`} >
            <div className={styles['personagem-conteudo']}>
                <div className={styles['personagem-imgs']}>
                    <img src="assets/icones/bojack-icone.png" />
                    <img src="assets/icones/daiane-icone.png" />
                    <img src="assets/icones/tod-icone.png" />
                    <img src="assets/icones/peanutbutter-icone.png" />
                </div>
                <h2 className="titulos">Personagens</h2>
                <h3>Diane Nguyen</h3>
                <p>
                    Ela é a caneta de BoJack. Uma intelectual incompreendida que fugiu de sua família em Boston , ela se descreve como uma feminista da terceira onda . Ela e BoJack formam uma forte amizade , até que seu relacionamento se torna tenso depois que BoJack começa a ter sentimentos por ela.
                </p>
            </div>
            <div className={styles['personagem-imagem']}>
                <img alt="Diane Nguyen" src="assets/daiane-personagem.png" />
            </div>
        </div>
}

