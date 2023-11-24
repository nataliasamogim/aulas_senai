import { Link } from 'react-router-dom';
import './CadastroLP.css';

function CadastroLP() {
    return (
        <>
            <section className="form_cadastro">
                <form className="cadastro" id="cadastrar" action="" > {/*form do cadastro*/}
                    <h1 className="h1_cadastro">Cadastro</h1>

                    <div className="form_grupo"> {/*div para parte do nome*/}
                        <label className="nome">Nome</label>
                        <input className="input_1" type="text" name="nome" id="nome" placeholder="Digite seu nome" data-min-length="3" data-max-length="100" data-only-letters/>
                    </div>

                    <div className="form_grupo"> {/*div para parte do e-mail*/}
                        <label className="email">Email</label>
                        <input className="input_2" type="email" name="email" id="email" placeholder="Digite seu E-mail" data-email-validate data-min-length="10" data-max-length="40"/>
                    </div>

                    <div className="form_grupo"> {/*div para parte da senha*/}
                        <label className="senha">Senha</label>
                        <input className="input_3" type="password" name="senha" id="senha" placeholder="Digite sua senha" data-password-validate data-min-length="8" data-max-length="15"/>
                    </div>

                    <div className="form_grupo"> {/*div para a parte de confirmar senha*/}
                        <label className="confirmar">Confirmar senha </label>
                        <input className="input_4" type="password" name="password" id="password" placeholder="Digite novamente sua senha" data-equal="senha"/>
                    </div>

                    <div className="buttons">
                        <div className="cad"> {/*botão cadastrar do footer */}
                            <Link to="" className="submit_btn" id="btn_cadastrar">Cadastrar</Link>
                        </div>
                        <div className="can"> {/*botão cancelar do footer */}
                            <Link className="submit_btn" id="btn_cancelar" onClick="limpaForm()">Cancelar</Link>
                        </div>
                    </div>
                </form>

                <p className="error-validation template"></p> {/*implementação do java script */}
                <script src="JavaScript/validar.js"></script>

            </section>
        </>
    );
}

export { CadastroLP };