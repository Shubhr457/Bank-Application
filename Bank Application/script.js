document.addEventListener('DOMContentLoaded', function() {
    const accountInfoBtn = document.getElementById('accountInfoBtn');
    const depositBtn = document.getElementById('depositBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const transferBtn = document.getElementById('transferBtn');
    const interestBtn = document.getElementById('interestBtn');
    const actionForm = document.getElementById('actionForm');
    const amountInput = document.getElementById('amount');
    const descriptionInput = document.getElementById('description');
    const recipientInput = document.getElementById('recipient');
    const interestRateInput = document.getElementById('interestRate');

    let accountBalance = 1000;
    let recipientBalance = 500;
    let transactionHistory = [];

    function displayAccountInfo() {
        let info = `Your current account balance is: $${accountBalance}\n\nTransaction History:\n`;
        transactionHistory.forEach(transaction => {
            info += `${transaction.date} - ${transaction.type}: $${transaction.amount}`;
            if (transaction.description) {
                info += ` (Description: ${transaction.description})`;
            }
            info += '\n';
        });
        alert(info);
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        const amount = parseFloat(amountInput.value);
        const description = descriptionInput.value;
        const recipient = recipientInput.value;

        const action = actionForm.getAttribute('data-action');

        let transaction = {
            date: new Date().toLocaleString(),
            type: '',
            amount: amount,
            description: description
        };

        if (action === 'deposit') {
            accountBalance += amount;
            transaction.type = 'Deposit';
            alert(`Deposited $${amount}. New balance: $${accountBalance}`);
        } else if (action === 'withdraw') {
            if (amount <= accountBalance) {
                accountBalance -= amount;
                transaction.type = 'Withdraw';
                alert(`Withdrew $${amount}. New balance: $${accountBalance}`);
            } else {
                alert('Insufficient funds for this withdrawal.');
                return;
            }
        } else if (action === 'transfer') {
            if (amount <= accountBalance) {
                accountBalance -= amount;
                recipientBalance += amount;
                transaction.type = 'Transfer';
                transaction.recipient = recipient;
                alert(`Transferred $${amount} to recipient. Your new balance: $${accountBalance}`);
            } else {
                alert('Insufficient funds for this transfer.');
                return;
            }
        }

        transactionHistory.push(transaction);

        actionForm.reset();
        actionForm.classList.add('hidden');
    }

    function handleInterest(event) {
        event.preventDefault();

        const rate = parseFloat(interestRateInput.value);
        if (isNaN(rate) || rate <= 0) {
            alert('Please enter a valid interest rate.');
            return;
        }

        const interest = accountBalance * (rate / 100);
        accountBalance += interest;

        let transaction = {
            date: new Date().toLocaleString(),
            type: 'Interest Added',
            amount: interest,
            rate: rate
        };

        transactionHistory.push(transaction);

        alert(`Interest of $${interest.toFixed(2)} added at a rate of ${rate}%. New balance: $${accountBalance.toFixed(2)}`);

        interestRateInput.value = '';
    }

    accountInfoBtn.addEventListener('click', displayAccountInfo);

    depositBtn.addEventListener('click', function() {
        actionForm.classList.remove('hidden');
        actionForm.setAttribute('data-action', 'deposit');
        recipientInput.classList.add('hidden');
        interestRateInput.classList.add('hidden');
    });

    withdrawBtn.addEventListener('click', function() {
        actionForm.classList.remove('hidden');
        actionForm.setAttribute('data-action', 'withdraw');
        recipientInput.classList.add('hidden');
        interestRateInput.classList.add('hidden');
    });

    transferBtn.addEventListener('click', function() {
        actionForm.classList.remove('hidden');
        actionForm.setAttribute('data-action', 'transfer');
        recipientInput.classList.remove('hidden');
        interestRateInput.classList.add('hidden');
    });

    interestBtn.addEventListener('click', function() {
        actionForm.classList.add('hidden');
        interestRateInput.classList.remove('hidden');
        interestRateInput.focus();
    });

    actionForm.addEventListener('submit', handleFormSubmit);

    interestRateInput.addEventListener('change', handleInterest);
});
