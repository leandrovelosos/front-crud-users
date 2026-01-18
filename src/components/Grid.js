import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Toaster, toast } from 'react-hot-toast';

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead`

`;

export const Tbody = styled.tbody`

`;

export const Tr = styled.tr`

`;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;


    @media (max-width:500px){
        ${(props) => props.onlyWeb && "display:none;"}
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.aligncenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500p){
        ${(props) => props.onlyWeb && "display: none"}
    }
`;


const Grid = ({ users }) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>E-mail</Th>
                    <Th onlyWeb>Telefone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>

            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td width="20%" onlyWeb>{item.telefone}</Td>
                        <Td aligncenter width="5%">
                            <FaEdit/>
                        </Td>
                        <Td aligncenter width="5%">
                            <FaTrash/>
                        </Td>
                    </Tr>
                ))}
            </Tbody>

        </Table>
    );
};


export default Grid;