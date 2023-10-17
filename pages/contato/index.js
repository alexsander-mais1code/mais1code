import styles from './index.module.scss';
import api from '../../services/api';
import { useForm } from "react-hook-form";
import { exibirMensagem } from '../../services/toastr-service';

export default function Contato() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>  {
      api.post('/contato', { nome: data.nome, email: data.email })
        .then(res => {
            exibirMensagem('Mensagem enviada com sucesso!', 'success');
        }).catch(res => {
            let mensagem = 'Ocorreu um erro tente novamente!';
            if ( res.response && res.response.status && res.response.status === 400 ) {
                mensagem = res.response.data.errors.join(',');
            }
            exibirMensagem(mensagem, 'error');
        });
    };


    return  <div className={ `${styles['contato']} container`}>
        <div className={styles['contato-header']}>
            <h2 className='titulos'>Contato</h2>
        </div>
        <form onSubmit ={ handleSubmit(onSubmit) } >
            <div className={styles['contato-conteudo']}>
                <div className={styles['contato-conteudo-item']}>
                    <input type="text" name="nome" className={errors.nome ? styles['item-error'] : '' }
                                placeholder="Digite o nome" 
                                { ... register("nome", { required: true })} />
                    { errors.nome && <div className={styles['contato-conteudo-item-invalid']} > O nome é obrigatório!</div>}
                </div>

                <div className={styles['contato-conteudo-item']}>
                    <input type="text" name="email" className={errors.email ? styles['item-error'] : '' }
                                placeholder="Digite o email" 
                                { ... register("email", { required: true })} />

                    { errors.email && <div className={styles['contato-conteudo-item-invalid']} > O e-mail é obrigatório!</div>}
                </div>
                <div className={styles['contato-conteudo-item']}>
                    <button type="submit" className="botao-salvar">Salvar</button>
                </div>
            </div>
        </form>

    </div>
}