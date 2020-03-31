class Tabelas {
    init(conexao) {
        console.log("tabelas foram chamadas")
        this.conexao = conexao;
        this.criarAtendimentos();
    }
    criarAtendimentos () {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20),  servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datatime NOT NULL , status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            }
        })
    }
}

module.exports = new Tabelas