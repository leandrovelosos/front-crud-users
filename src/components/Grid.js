import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-hot-toast";

/* ================== TABLE ================== */

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    table-layout: fixed;
`;

/* ================== STRUCTURE ================== */

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

/* ================== HEADERS ================== */

export const Th = styled.th`
    text-align: left;
    border-bottom: inset;
    padding-bottom: 5px;
`;

/* ================== CELLS ================== */

export const Td = styled.td`
    padding: 15px 8px 0 8px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: ${(props) => props.width || "auto"};
`;

export const TdAction = styled.td`
    width: 36px;
    text-align: center;
    white-space: nowrap;

    svg {
        cursor: pointer;
    }
`;

/* ================== COMPONENT ================== */

const Grid = ({ users, setUsers, setOnEdit }) => {

    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete("http://localhost:8800/" + id);
            setUsers(users.filter((user) => user.id !== id));
            toast.success(data);
        } catch (err) {
            toast.error(err.response?.data || "Erro ao excluir");
        }

        setOnEdit(null);
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th style={{ width: "40%" }}>Nome</Th>
                    <Th style={{ width: "40%" }}>E-mail</Th>
                    <Th style={{ width: "15%" }}>Telefone</Th>
                    <Th style={{ width: "36px" }}></Th>
                    <Th style={{ width: "36px" }}></Th>
                </Tr>
            </Thead>

            <Tbody>
                {users.map((item) => (
                    <Tr key={item.id}>
                        <Td width="40%">{item.nome}</Td>
                        <Td width="40%">{item.email}</Td>
                        <Td width="15%">{item.fone}</Td>

                        <TdAction>
                            <FaEdit size={14} onClick={() => handleEdit(item)} />
                        </TdAction>

                        <TdAction>
                            <FaTrash size={14} onClick={() => handleDelete(item.id)} />
                        </TdAction>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;
