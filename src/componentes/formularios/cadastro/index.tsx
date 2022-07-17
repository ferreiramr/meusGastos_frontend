import BotaoButtun from '../botao/botaoButton';
import Input from '../input/index';
import BotaoA from '../botao/botaoA';

export default function formCadastro(){
    return(
        <form action="" method="post">
            <Input tipo="email" nomeInput="e-mail"/>
            <Input tipo="text" nomeInput="login"/>
            <Input tipo="password"nomeInput="senha"/>
            <Input tipo="password" nomeInput="confirme a senha"/>
            <BotaoButtun texto="Cadastrar"/>
            <BotaoA url="./login" texto="Logar" />
        </form>
    )
}