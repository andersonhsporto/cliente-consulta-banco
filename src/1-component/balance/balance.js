import React from "react";

const BalanceComponent = ({total, current}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Saldo total:
                    <span>
                        {total}
                    </span></th>
                <th>Saldo no período:
                    <span>
                        {current}
                    </span></th>
            </tr>
            </thead>
        </table>
    );
}

export default BalanceComponent;