import React, { ChangeEvent, useEffect, useState } from 'react';
import {Grid, TextField, Typography, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './CadastroUsuario.css';
import Usuario from '../../models/Usuario';
import { cadastroUsuario } from '../../services/Service';



function CadastroUsuario() {

    let navigate = useNavigate();

    const [confirmarSenha,setConfirmarSenha] = useState<String>("");
  
    const [usuario, setUsuario] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: ''
        }
    )
  
    const [usuarioResult, setUsuarioResult] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: ''
        }
    )
  
    useEffect(() => {
      if (usuarioResult.id !== 0) {
        navigate('/login');
      }
    }, [usuarioResult]);
  
    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
      setConfirmarSenha(event.target.value);
    }
  
    function updateModel(event: ChangeEvent<HTMLInputElement>) {
  
      setUsuario({
          ...usuario,
          [event.target.name]: event.target.value
      });
  
    }
  
    async function cadastrarUsuario(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault()
      if(confirmarSenha === usuario.senha && usuario.senha.length>=8){
        try{
          await cadastroUsuario('/usuarios/cadastrar', usuario, setUsuarioResult);
          toast.success("Usuário cadastrado com sucesso!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "dark",
            progress: undefined,
          });
        } catch (error){
          toast.error("Falha interna ao cadastrar", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "dark",
            progress: undefined,
          });
          console.log(error);
        }
      }else{
        toast.error("As senhas não conferem. Tente novamente.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
          progress: undefined,
        });
        setUsuario({ ...usuario, senha:''});
        setConfirmarSenha('');
       }
  
    }


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='img-cad'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                <form onSubmit={cadastrarUsuario}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={usuario.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={usuario.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal'fullWidth />
                        <TextField value={usuario.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} id='confirmarSenha' label='Confirme sua senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none' >
                                <Button  variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroUsuario;