import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import LibsContext from "./LibsContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoSelect from "../../comuns/CampoSelect";
import CampoEntradaResumo from "../../comuns/CampoEntradaResumo";
import Dialogo from "../../comuns/Dialogo";
import { MenuItem } from "@mui/material";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, abreDialogo, setAbreDialogo } =
        useContext(LibsContext);

    return (
        <>
            <Dialogo id="modalEdicao" titulo="Lib"
                open={abreDialogo} setOpen={setAbreDialogo}
                acaoCadastrar={acaoCadastrar} idform="formulario"
                maxWidth="sm">
                <Alerta alerta={alerta} />
                <CampoEntrada id="txtID" label="ID"
                    tipo="text" name="id" value={objeto.id}
                    onchange={handleChange} requerido={false}
                    readonly={true} />
                <CampoEntrada id="txtTitulo" label="Título"
                    tipo="text" name="titulo" value={objeto.titulo}
                    onchange={handleChange} requerido={true}
                    readonly={false} maxlength={50}
                    msgvalido="Titulo OK"
                    msginvalido="Informe o título" />
                <CampoEntradaResumo id="txtResumo" label="Resumo"
                    rows={5}
                    tipo="text" name="resumo"
                    value={objeto.resumo}
                    onchange={handleChange} requerido={true}
                    readonly={false} maxlength={100}
                    msgvalido="Resumo OK"
                    msginvalido="Informe o resumo" />
                <CampoEntrada id="txtUrl" label="URL"
                    tipo="text" name="url"
                    value={objeto.url}
                    onchange={handleChange} requerido={true}
                    readonly={false} maxlength={100}
                    msgvalido="URL OK"
                    msginvalido="Informe a URL" />
                <CampoSelect
                    id="selectTipo" label="Tipo"
                    idLabel="labelTipo"
                    tipo="text" name="tipo" value={objeto.tipo}
                    onchange={handleChange} requerido={false}
                    msgvalido="Tipo OK"
                    msginvalido="Informe o Tipo">                    
                    <MenuItem value='Livro'>Livro</MenuItem>
                    <MenuItem value='Conto'>Conto</MenuItem>    
                    <MenuItem value='Jornal'>Jornal</MenuItem>      
                    <MenuItem value='Revista'>Revista</MenuItem>                  
                </CampoSelect>
            </Dialogo>
        </>
    )

}

export default Form;