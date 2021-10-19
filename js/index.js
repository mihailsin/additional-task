const totalBalanceRef = document.querySelector('.js-total-balance');
const totalIncomeRef = document.querySelector('.js-total-income');
const totalExpensesRef = document.querySelector('.js-total-expenses');
const formRef = document.querySelector('#form');
const operationNameInput = document.querySelector('.js-operation-name');
operationNameInput.setAttribute('name', 'operation');
const operationAmountInput = document.querySelector('.js-operation-amount');
operationAmountInput.setAttribute('name', 'amount');
const operationHistoryList = document.querySelector('.js-history-list');
const operationsArray = [];
const onSubmit = e => {
	event.preventDefault();
	const {
		elements: { operation, amount },
	} = e.currentTarget;
	const spent = `<li class="list-group-item d-flex align-items-center text-capitalize border border-1 border-danger rounded bg-danger px-4 py-2 text-dark bg-opacity-10 mb-3">
<span class="fs-5 history__money user-select-all">${operation.value} на сумму ${amount.value}; &#8372;</span>
<button type="button" class="btn-close ms-auto history_delete" aria-label="Close"></button>
</li>`;
	const earned = `<li class="	list-group-item d-flex align-items-center text-capitalize border border-1 border-success rounded bg-success px-4 py-2 text-dark bg-opacity-10 mb-3">
<span class="fs-5 history__money user-select-all">${operation.value} на сумму ${amount.value}; &#8372;</span>
<button type="button" class="btn-close ms-auto history_delete" aria-label="Close"></button>
</li>`;

	if (Number(amount.value) < 0) {
		operationHistoryList.insertAdjacentHTML('beforeend', spent);
	} else if (Number(amount.value) > 0) {
		operationHistoryList.insertAdjacentHTML('beforeend', earned);
	}

	const transaction = {
		id: Date.now(),
		value: Number(amount.value),
	};

	operationsArray.push(transaction);

	operationsArray.reduce((acc, transaction) => {
		return (totalBalanceRef.innerHTML = acc + transaction.value);
		console.log(acc);
		console.log(transaction.value);
	}, 0);
	renderEarnOrSpent(operationsArray);
	e.currentTarget.reset();
};

formRef.addEventListener('submit', onSubmit);

function renderEarnOrSpent(array) {
	let expenses = 0;
	let income = 0;
	array.forEach(element => {
		element.value < 0 ? (expenses += element.value) : (income += element.value);
	});
	totalIncomeRef.innerHTML = `${income} &#8372`;
	totalExpensesRef.innerHTML = `${expenses} &#8372;`;
}
