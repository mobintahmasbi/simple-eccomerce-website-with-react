import React from 'react';

function Basketrow({id , title , count , price}) {
    return (
        <>
            <tr>
                <th scope="row">
                    {id}
                </th>
                <td>
                    {title}
                </td>
                <td>
                    {count}
                </td>
                <td>
                    {price}$
                </td>
                <td className="text-center">
                    <button className="btn btn-danger rounded-3 remove-item">
                        <i className="material-icons fs-6">delete</i>
                    </button>
                </td>
            </tr>
        </>
    );
}

export default Basketrow;