let globalExpression = [];
let globalState = '';

const globalDisplayState = () => {
    document.querySelector('.display-layout').innerHTML = globalState || '0';
}

window.onload = () => {
    document.querySelectorAll('button.operand').forEach((btnEl) => {
        btnEl.onclick = (ev) => {
            const value = ev.target.textContent;
            if (value === '0' && (globalState.length === 1 && globalState[0] === '0')) {
                return;
            } else if (value === '.' && globalState.includes('.')) {
                return;
            } else if (globalState.length === 1 && globalState[0] === '0') {
                globalState = value;
            } else {
                globalState += value;
            }

            globalDisplayState();
        };
    });

    document.querySelector('button.cancel-operator').onclick = (() => {
        globalState = '';
        globalExpression = [];
        globalDisplayState();
    });

    document.querySelector('button.sign-operator').onclick = (() => {
        globalState = -Number(globalState) + '';
        globalExpression = globalExpression.concat(['*', '-1']);
        globalDisplayState();
    });

    document.querySelector('button.percent-operator').onclick = (() => {
        const index = globalState.indexOf('.');
        if (index >= 0) {
            globalState = globalState.replace('.', '');
            if (index > 2) {
                globalState = globalState.substring(0, index - 2) + '.' + globalState.substring(index - 2)
            } else if (index === 2) {
                globalState = '0.' + globalState;
            } else {
                globalState = '0.0' + globalState;
            }
        } else {
            if (globalState.length === 1) {
                globalState = '00' + globalState;
            }
            globalState = globalState.substring(0, globalState.length - 2) + '.' + globalState.substring(globalState.length - 2)
        }
        globalExpression = globalExpression.concat(['/', '100']);
        globalDisplayState();
    });

    document.querySelectorAll('button.binary-operator').forEach((btnEl) => {
        btnEl.onclick = (ev) => {
            let oper = ev.target.textContent;
            oper = (oper === '×' ? '*' : oper === '÷' ? '/' : oper);
            globalExpression = globalExpression.concat([globalState]).concat([oper]);
            globalState = '';
        };
    });

    document.querySelector('button.equals-operator').onclick = (() => {
        globalExpression = globalExpression.concat([globalState]);
        const result = eval(globalExpression.join('')) + '';
        globalState = result;
        globalExpression = [];
        globalDisplayState();
    });
}
