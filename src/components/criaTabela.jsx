import React from 'react'
import users from '../data/Users'
import { Progress, Table } from "reactstrap"
import '../style/Tabela.css'

/*export default function criaTabela(props) {
    let nomes = [];
    for (let i = 0; i < props.linhas; i++) {
        nomes.push(
            <div>
                <tr>
                    <td>
                        <NewUser nome="Teste" />
                    </td>
                </tr>
            </div>

        )
    }

    return (
        <div>
            {nomes}
        </div>
    )

}*/

export default function criaTabela() {

    function conteudoTable() {
        return users.map(user => {
            return <tr key={user.nome}>
                <td className="align-middle text-center fonte">
                    {user.nome}
                </td>

                <td className="align-middle text-center fonte">
                    {user.data}
                </td>
                <td className="align-middle text-center fonte">
                    <Progress color="success" value={user.participacao} />
                </td>

                <td className="align-middle text-center fonte">
                    {user.participacao}  %
                </td>
            </tr>

        })
    }
    return (
        <Table>
            <thead>
                <tr>
                    <th className="text-capitalize align-middle text-center fonte">Nome</th>
                    <th className="text-capitalize align-middle text-center fonte">Data</th>
                    <th className="text-capitalize align-middle text-center fonte">Participação</th>
                    <th className="text-capitalize align-middle text-center fonte">%</th>
                </tr>
            </thead>
            <tbody>
                {conteudoTable()}
            </tbody>
        </Table>

    )


}