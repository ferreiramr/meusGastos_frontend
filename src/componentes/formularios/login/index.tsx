import BotaoButtun from '../botao/botaoButton';
import Input from '../input/index';
import BotaoA from '../botao/botaoA';

export default function formLogin(){
    return (
        <form action="" method='post'>
            <Input tipo="text" nomeInput="login"/>
            <Input tipo="password" nomeInput="senha"/>
            <BotaoButtun texto="Entrar"/>
            <BotaoA url="./cadastro" texto="Cadastrar"/>
        </form> 
    )
}