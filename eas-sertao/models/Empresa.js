import mongoose  from "mongoose";

const EmpresaSchema = new mongoose.Schema({
    numerosocio:{
        type: String,
        required: [true, "Insira um numero de Telefone"],
    },
    cnpj: {
        type: String,
        required: [true, "Insira um nome Valido"],
    },
    namejuridico: {
        type: String,
        required: [true, "Insira um nome Valido"],
    },
    namefantasia: {
        type: String,
        required: [true, "Insira um nome Valido"],
    },
    endereco: {
        type: String,
        required: [true, "Insira uma Cidade Valida"],
    },
    email: {
        type: String,
        required: [true, "Insira um E-Mail Valido"],
    },
    telefonefixo: {
        type: String,
    },
    telefonecelular: {
        type: String,
    },
    tipopessoa:{
        type: String,
        required: [true, "Insira um numero de Telefone"],
    },
    responsavel:{
        type: String,
        required: [true, "Insira um numero de Telefone"],
    },
    setor:{
        type: String,
        required: [true, "Insira um numero de Telefone"],
    },
    pagamento:{
        type: String,
        required: [true, "Insira um numero de Telefone"],
    },
    redessociais:{
        type: String,
    },
    foto:{
        type: String,
    },
    inscricaoestadual:{
        type: String,
        required: [true, "Insira um numero de Telefone"],
    },
    dataadmissao:{
        type: String,
        required: [true, "Insira um numero de Telefone"],
    },
    
}, {versionKey: false
});

export default mongoose.models.Empresa || mongoose.model("Empresa", EmpresaSchema)