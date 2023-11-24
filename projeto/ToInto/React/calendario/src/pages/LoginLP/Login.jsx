import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
    return (
        <>
            <div className='body_log'>
                <form id="login"> {/*Logir que possui o email e senha do usuario */}
                    <h1 className="h1_login">Login</h1>

                    <div className="email_login">
                        <label className="label_email">Email</label>
                        <input className="input_email" type="email" name="email" id="email" data-email-validate data-required />
                    </div>

                    <div className="senha_login">
                        <label className="label_senha">Senha</label>
                        <input className="input_senha" type="password" name="senha" id="senha" data-password-validate data-required />
                    </div>
                    <p className="paragrafo">Esqueceu a senha?</p>

                    <div className="button_log">
                        <div className="log_entrar"> {/*Rota para o calendario */}
                            <Link to="/calendario" className="submit_btn-log" id="btn_logar">Entrar</Link>

                        </div>
                        <div className="log_cancel"> {/*Link para o botão cancelar */}
                            <Link className="submit_btn-log" id="btn_cancelar" onclick="limpaForm()">Cancelar</Link>
                        </div>
                    </div>
                </form>
                <p className="error-validation template"></p> {/*Validação com o java script */}
                <script src="js/validar.js"></script>
            </div>

        </>
    );
}

export { Login };