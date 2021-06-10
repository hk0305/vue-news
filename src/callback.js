/**
<script>
// Promise
function callAjax() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: '...',
            success: function (data) {
                resolve(data);
            }
        });
    });
}

// reslove 이후 Promise 실행
function fetchData() {
	...
    callAjax()
        .then(function (data) {
            console.log('데이터 호출 결과 :', data);
            result = data;
            console.log('함수 결과 :', result);
        })
}
</script>
 */