
function BankAccountManager() {
    const elements = {
        balance: document.getElementById('currentBalance'),
        amountInput: document.getElementById('amountInput'),
        message: document.getElementById('message'),
        depositBtn: document.getElementById('depositBtn'),
        withdrawBtn: document.getElementById('withdrawBtn'),
        transactionList: document.getElementById('transactionList'),
        limitProgress: document.getElementById('limitProgress'),
        limitRemaining: document.getElementById('limitRemaining')
    };

    // default values
    const state = {
        balance: 1000,
        transactions: [],
        WITHDRAWAL_LIMIT: 500,
        totalWithdrawn: 0
    };

    // This function displays updated values to the webpage

    function updateUI() {
        updateBalanceDisplay();
        updateTransactionHistory();
        updateWithdrawalLimit();
    }

    // Function to update display balance
    function updateBalanceDisplay() {
        elements.balance.textContent = `$${state.balance.toFixed(2)}`;
    }

    // Function to display the transaction history display
    function updateTransactionHistory() {
        elements.transactionList.innerHTML = state.transactions.map(transaction => `
            <div class="list-group-item ${transaction.type === 'deposit' 
                ? 'list-group-item-success' 
                : 'list-group-item-danger'}">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <strong>${transaction.type.toUpperCase()}</strong>
                    </div>
                    <div>
                        <span class="fw-bold">$${transaction.amount.toFixed(2)}</span>
                        <small class="text-muted ms-2">Balance: $${transaction.balance.toFixed(2)}</small>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // function to diplsay the withdrawal limit display and progress bar
    function updateWithdrawalLimit() {
        const remaining = state.WITHDRAWAL_LIMIT - state.totalWithdrawn;
        const percentage = (state.totalWithdrawn / state.WITHDRAWAL_LIMIT) * 100;

        elements.limitProgress.style.width = `${percentage}%`;
        elements.limitRemaining.textContent =
            `$${Math.max(remaining, 0).toFixed(2)} remaining ($${state.totalWithdrawn.toFixed(2)} used)`;
    }

    // function that displays success or error in transactions
    function showMessage(text, isError) {
        elements.message.textContent = text;
        elements.message.className = `alert alert-${isError ? 'danger' : 'success'} show`;
        
        // Timer for the notification
        setTimeout(function() {
            elements.message.classList.remove('show');
            setTimeout(function() {
                elements.message.textContent = '';
                elements.message.className = 'alert';
            }, 300);
        }, 3000);
    }

    // Function that handles the deposit process and this also filters unwanted value
    function handleDeposit() {
        const amount = parseFloat(elements.amountInput.value);

        if (isNaN(amount)) {
            showMessage('Please enter a valid amount', true);
            return;
        }

        if (amount <= 0) {
            showMessage('Deposit amount must be positive', true);
            return;
        }

        state.balance += amount;
        state.transactions.push({
            type: 'deposit',
            amount: amount,
            balance: state.balance
        });

        elements.amountInput.value = '';
        updateUI();
        showMessage(`Deposited $${amount.toFixed(2)} successfully`);
    }
    
    // function that handles withdrawal and this will check the inputs and the remaining balance
    function handleWithdraw() {
        const amount = parseFloat(elements.amountInput.value);

        if (isNaN(amount)) {
            showMessage('Please enter a valid amount', true);
            return;
        }

        if (amount <= 0) {
            showMessage('Withdrawal amount must be positive', true);
            return;
        }

        if (amount > state.balance) {
            showMessage('Insufficient funds', true);
            return;
        }

        if ((state.totalWithdrawn + amount) > state.WITHDRAWAL_LIMIT) {
            showMessage(`Withdrawal limit exceeded! Remaining: $${(
                state.WITHDRAWAL_LIMIT - state.totalWithdrawn
            ).toFixed(2)}`, true);
            return;
        }

        state.balance -= amount;
        state.totalWithdrawn += amount;
        state.transactions.push({
            type: 'withdraw',
            amount: amount,
            balance: state.balance
        });

        elements.amountInput.value = '';
        updateUI();
        showMessage(`Withdrew $${amount.toFixed(2)} successfully`);
    }

    elements.depositBtn.addEventListener('click', function(e) {
        handleDeposit();
    });

    elements.withdrawBtn.addEventListener('click', function(e) {
        handleWithdraw();
    });

    updateUI();
}

new BankAccountManager();