$(document).ready(function () {
    $("#login-btn").click(() => {
        const username = $("#username").val();
        const password = $("#password").val();
        if (username && password) {
            $.ajax({
                type: "POST",
                url: `${domain}login`,
                data: {
                    username,
                    password
                },
                success: (result) => {
                    if (result.status == "success") {
                        alert(result.status);
                        window.location = '/';
                    } else {
                        alert(result.message);
                    }
                },
                error: (err) => {
                    console.log(err);
                    alert(err.statusText);
                },
            });
        } else {
            alert("Not emty !!!");
        }
    });
});