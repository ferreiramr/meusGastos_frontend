import BotaoButtun from '../botao/botaoButton';
import Input from '../input/index';
import BotaoA from '../botao/botaoA';

interface Props{
    onClick: () => void;
}

export default function formLogin(props: Props){
    return (
        <form action="" method='post'>
            <Input tipo="text" nomeInput="login"/>
            <Input tipo="password" nomeInput="senha"/>
            <BotaoButtun onClick={props.onClick} texto="Entrar"/>
            <BotaoA url="./cadastro" texto="Cadastrar"/>
        </form> 
    )
}