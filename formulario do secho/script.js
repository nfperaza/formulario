function valedateform(){
    var secho = document.getElementById('fname').value.trim()
    var secho2 = document.getElementById('fmail').value.trim()
    var secho3 = document.getElementById('messagem').value.trim()

    if(fname === ''){
        alert('preencha o campo nome')
        return false;
    }
    if(fmail === ''){
        alert('preencha o campo E-mail')
        return false;
    }
    if(mensagem === ''){
        alert('preencha o campo Mensagem')
        return false;
    }
    return true;
    
}