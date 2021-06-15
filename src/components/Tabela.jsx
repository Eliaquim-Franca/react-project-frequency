import React from 'react'
import { Container, Table, Card, CardHeader, CardBody } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CriaTabela from './criaTabela'
import '../style/Tabela.css'



function Tabela(props) {


    return (


        <Card  body inverse style={{backgroundColor:'#333',borderColor:'green'}} className="tabela mx-auto">
            <CardHeader className="text-capitalize align-middle text-center">
                        Novos Usuarios
                </CardHeader>
            <CardBody>
                <CriaTabela />
            </CardBody>
        </Card>


    )

}

export default Tabela
