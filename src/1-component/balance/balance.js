import React from "react";
import style from './balance.module.css';

const BalanceComponent = ({total, current}) => {
    return (
        <table className={style.balance}>
            <thead>
            <tr>
                <th>Saldo Total: R$
                    <span>
                        {total}
                    </span></th>
                <th>Saldo no Período: R$
                    <span>
                        {current}
                    </span></th>
            </tr>
            </thead>
        </table>
    );
}

export default BalanceComponent;