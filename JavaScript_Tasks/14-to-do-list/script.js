function initializeApp() {
    const form = document.querySelector('form');
    const input = document.querySelector('input[type="text"]');
    const taskList = document.querySelector('ul');
    const notifications = document.getElementById('notifications');

    // Initialize existing list items
    function initializeListItem(li) {
        const span = document.createElement('span');
        span.textContent = li.textContent;
        li.textContent = '';
        li.appendChild(span);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times;';
        li.appendChild(deleteBtn);
    }

    Array.prototype.forEach.call(
        document.querySelectorAll('li'),
        initializeListItem
    );

    // Handle form submit
    form.onsubmit = function (event) {
        event.preventDefault();

        const taskText = input.value.trim();
        if (!taskText) return;

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times;';

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        input.value = '';
        showNotification('Task added: ' + taskText);
    };

    // Handle task list clicks
    taskList.onclick = function (event) {
        var target = event.target;

        if (target.classList.contains('delete-btn')) {
            var li = target.closest('li');
            var taskText = li.querySelector('span').textContent;
            li.parentNode.removeChild(li);
            showNotification('Task removed: ' + taskText);
        } else if (target.closest('li')) {
            target.closest('li').classList.toggle('assignment');
        }
    };

    // Show notification
    function showNotification(message) {
        if (!notifications) throw new Error('Notification container not found');

        var notification = document.createElement('div');
        notification.className = 'notification';

        var text = document.createElement('span');
        text.textContent = message;

        var closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';

        notification.appendChild(text);
        notification.appendChild(closeBtn);
        notifications.appendChild(notification);

        closeBtn.onclick = function () {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        };

        setTimeout(function () {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }
}

initializeApp();
