import axios from 'axios'

const configuracoes = {
  baseURL: 'https://cripto-carteira-reprograma.herokuapp.com'
};

const json = localStorage.getItem('usuario')
if (json) {
  const usuario = JSON.parse(json);
  configuracoes.headers = {
    'Authorization': usuario
  };
};

const api = axios.create(configuracoes);

//login
export function logaUsuario(dados) {
  return (dispatch) => {
    api
      .post('/api/auth/authenticate', dados)
      .then(response => {
        api.defaults.headers.common['Authorization'] = 'Bearer '+response.data.token;
        dispatch({ type: 'LOGA_USUARIO', dados:'Bearer '+response.data.token, status: response.status});
      }, error => {
        dispatch({type: 'ERROR_LOGAR_USUARIO', error: error});
      });
  }
};

export function deslogaUsuario() {
  return {
    type: 'DESLOGA_USUARIO'
  }
};

export function resetWallet() {
  return {
    type: 'RESET_WALLETS'
  }
};



//criar um novo usuario
export function cadastrarUsuario(dados){
  return(dispatch)=>{
    api
    .post('/api/auth/register', dados)
    .then(response => {
      dispatch({type:'CADASTRA_USUARIO', response});
    }, error => {
      dispatch({type: 'ERROR_CADASTRAR_USUARIO', error: error});
    });
  }
}

//confirma o usuario
export function confirmEmail(hash){
  return(dispatch) =>{
    api
    .post('/api/auth/confirm/'+hash)
    .then(response =>{
      dispatch({type:'CONFIRMAR_EMAIL', response});
    }, error => {
      dispatch({type:'ERROR_CONFIRMAR_EMAIL', error: error});
    });
  }
}

//forgot password
export function forgotPassword(dados){
  return(dispatch) =>{
    api
    .post('/api/auth/forgot_password',dados).then(response =>{
      dispatch({type:'FORGOT_PASSWORD', response});
    });
  }
}

// reset senha
export function resetPassword(dados){
  return(dispatch) =>{
    api
    .put('/api/auth/reset_password',dados).then(response =>{
      dispatch({type:'RESET_SENHA', response});
    });
  }
}

//tras a lista de wallets
export function obterWallets() {
  return (dispatch) => {
    api
      .get('/api/wallet/list')
      .then(response => {
        dispatch({ type: 'OBTER_WALLETS', response });
      }, error =>{
        dispatch({ type: 'ERROR_OBTER_WALLETS', error });
      })
  }
}

//cria uma wallet
export function criarWallets() {
  
  return (dispatch) => {
    api
      .post('/api/wallet')
      .then(response => {
        dispatch({ type: 'CRIAR_WALLETS', response });
      },error =>{
        dispatch({ type: 'ERROR_CRIAR_WALLETS', error });
      });
  }
}

export function deletarWallet(id) {
  return (dispatch) => {
    api
      .delete('/api/wallet/' + id)
      .then(response => {
        dispatch({ type: 'DELETE_WALLETS', id });
      },error =>{
        dispatch({ type: 'ERROR_DELETE_WALLETS', error });
      });
  }
}














