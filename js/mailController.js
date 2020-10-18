
const [campos, setCampos] = useState({
    nome: '',
    email: '',
    mensagem: '',
    anexo: ''
});
function handleInputChange(event){
    campos[event.target.name] = event.target.value;
    setCampos(campos);
}