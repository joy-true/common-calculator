const calculatorTestRun = () => {
    const displayEl = document.getElementsByClassName('display-layout').item(0);
    const init = () => {
        globalState = '';
        globalExpression = [];
        globalBinary = '';
        displayEl.textContent = '';
    }
    const getBtn = (val) => Array.from(document.querySelectorAll('button'))
        .find(el => el.textContent.trim() === val);

    console.log('테스트 시작');
    init();

    document.querySelectorAll('button.operand').forEach(el => {
        el.click();
    });

    if (displayEl.textContent.trim() != '7894561230.') {
        console.error('모든 숫자 버튼 한 번씩 입력: ', displayEl.textContent.trim())
    }

    init();

    getBtn('1').click();
    getBtn('+').click();
    getBtn('2').click();

    if (displayEl.textContent.trim() != '2') {
        console.error('1+2 입력 시 2 출력: ', displayEl.textContent.trim())
    }

    getBtn('=').click();

    if (displayEl.textContent.trim() != '3') {
        console.error('1+2 결과 3 출력: ', displayEl.textContent.trim())
    }

    init();

    getBtn('1').click();
    getBtn('÷').click();
    getBtn('2').click();
    getBtn('=').click();

    if (displayEl.textContent.trim() != '0.5') {
        console.error('1÷2= 입력 시 0.5 출력: ', displayEl.textContent.trim())
    }

    getBtn('×').click();
    getBtn('1').click(); getBtn('0').click();
    getBtn('=').click();

    if (displayEl.textContent.trim() != '5') {
        console.error('×10= 입력 시 5 출력: ', displayEl.textContent.trim())
    }

    getBtn('-').click();
    getBtn('9').click();
    getBtn('=').click();

    if (displayEl.textContent.trim() != '-4') {
        console.error('-9= 입력 시 -4 출력: ', displayEl.textContent.trim())
    }

    getBtn('C').click();

    if (displayEl.textContent.trim() != '0') {
        console.error('연산 결과 초기화: ', displayEl.textContent.trim())
    }

    if (globalState != '' && globalExpression.length != 0 && globalBinary != '') {
        console.error('전역 변수 초기화: ', globalState, globalExpression.join(''), globalBinary);
    }

    getBtn('1').click();
    getBtn('+/-').click();

    if (displayEl.textContent.trim() != '-1') {
        console.error('+/- 버튼 클릭 시 -1 출력: ', displayEl.textContent.trim())
    }
    getBtn('+/-').click();

    if (displayEl.textContent.trim() != '1') {
        console.error('+/- 버튼 클릭 시 1 출력: ', displayEl.textContent.trim())
    }

    getBtn('%').click();

    if (displayEl.textContent.trim() != '0.01') {
        console.error('% 버튼 클릭 시 0.01 출력: ', displayEl.textContent.trim())
    }

    init();

    getBtn('1').click(); getBtn('2').click(); getBtn('3').click();
    getBtn('%').click();

    if (displayEl.textContent.trim() != '1.23') {
        console.error('% 버튼 클릭 시 1.23 출력: ', displayEl.textContent.trim())
    }

    getBtn('%').click();
    getBtn('%').click();
    getBtn('%').click();

    if (displayEl.textContent.trim() != '0.00000123') {
        console.error('% 버튼 클릭 시 0.000123 출력: ', displayEl.textContent.trim())
    }

    init();

    getBtn('1').click(); getBtn('2').click(); getBtn('3').click();
    getBtn('+').click();
    getBtn('1').click(); getBtn('2').click(); getBtn('3').click();
    getBtn('+').click();
    getBtn('1').click(); getBtn('2').click(); getBtn('3').click();
    getBtn('=').click();

    if (displayEl.textContent.trim() != '369') {
        console.error('123+123+123= 입력시 369 출력: ', displayEl.textContent.trim())
    }

    init();
    console.log('테스트 종료');
}