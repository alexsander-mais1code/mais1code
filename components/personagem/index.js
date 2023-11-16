import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { exibirMensagem } from '../../services/toastr-service';

export default function Personagem() {
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        listarPersonagens();
    }, []);

    const listarPersonagens = () =>  {
      api.get('personagens')
        .then(res => {
            setPersonagens(res.data.data);
        }).catch(res => {
            let mensagem = 'Ocorreu um erro tente novamente!';
            if ( res.response && res.response.status && res.response.status === 400 ) {
                mensagem = res.response.data.errors.join(',');
            }
            exibirMensagem(mensagem, 'error');
        });
    };

    return <>
        { 
            personagens.map(personagem => {
                return <div className={`${styles['personagem-item']}  container`} key={personagem.id} >
                    <div className={styles['personagem-conteudo']}>
                        <div className={styles['personagem-imgs']}>
                            <img src="assets/icones/bojack-icone.png" />
                            <img src="assets/icones/daiane-icone.png" />
                            <img src="assets/icones/tod-icone.png" />
                            <img src="assets/icones/peanutbutter-icone.png" />
                        </div>
                        <h2 className="titulos">Personagens</h2>
                        <h3>{personagem.nome}</h3>
                        <p>
                            {personagem.descricao}
                        </p>
                    </div>
                    <div className={styles['personagem-imagem']}>
                        <img alt="Diane Nguyen" src={personagem.icone} />
                    </div>
                </div>
            })
        }
    </>
}

