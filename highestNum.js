const arrBtn = document.getElementById('newArr');

function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        var max1 = arr[0];
        var max2 = findMax(arr.slice(1));
        if (max1 > max2) {
            return max1;
        } else {
            return max2;
        }
    }

}

arrBtn.addEventListener('click', () => {
    var a = [];
    var arrDisplay = document.getElementById('displayArr');
    if (arrBtn.value === 'Create Array') {
        arrBtn.value = 'Clear Array';
        for (var i = 0; i < 10; i++) {
            var randomNum = Math.floor((Math.random() * 200) - 75);
            a.push(randomNum);
            arrDisplay.style.display = 'block';
            arrDisplay.innerHTML += a[i];
            if (i < 9) {
                arrDisplay.innerHTML += ' | ';
            }
        }
    } else {
        a = [];
        arrDisplay.innerHTML = a;
        arrDisplay.style.display = 'none';
        arrBtn.value = 'Create Array';
    }


    var maxDisplay = document.getElementById('maxNum');
    document.getElementById('findMax').addEventListener('click', (e) => {
        maxDisplay.style.display = 'block';
        maxDisplay.innerHTML = '';
        maxDisplay.innerHTML = findMax(a);
    }, 'false');
});
