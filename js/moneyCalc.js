const totalBalanceRef = document.querySelector('.js-total-balance');
const totalIncomeRef = document.querySelector('.js-total-income');
const totalExpensesRef = document.querySelector('.js-total-expenses');
const formRef = document.querySelector('#form');
const operationNameInput = document.querySelector('.js-operation-name');
operationNameInput.setAttribute('name', 'operation');
const operationAmountInput = document.querySelector('.js-operation-amount');
operationAmountInput.setAttribute('name', 'amount');
const operationsHisoryList = document.querySelector('.js-history-list');
const positiveOperationsHistory =
	operationsHisoryList.firstElementChild.firstElementChild;
const negativeOperationsHistory =
	operationsHisoryList.lastElementChild.firstElementChild;
const operationsArray = [];
console.dir(formRef);

const onSubmit = e => {
	event.preventDefault();
	const {
		elements: { operation, amount },
	} = e.currentTarget;

	if (Number(amount.value) < 0) {
		negativeOperationsHistory.textContent = `${operation.value} на сумму ${amount.value}`;
	} else if (Number(amount.value) > 0) {
		positiveOperationsHistory.textContent = `${operation.value} на сумму ${amount.value}`;
	}
	operationsArray.push(Number(amount.value));
	console.log(operationsArray);

	operationsArray.reduce((acc, value) => {
		return (totalBalanceRef.textContent = acc + value);
		console.log(acc);
		console.log(value);
	}, 0);

	e.currentTarget.reset();
};

formRef.addEventListener('submit', onSubmit);
console.log(totalBalanceRef.textContent);
