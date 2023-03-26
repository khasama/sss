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

    $("#updateCategory").click(() => {
        const category = $("#updateCategoryName").val().trim();
        const id = $("#updateCategoryId").val();
        if (category) {
            $.ajax({
                type: "PUT",
                url: `${domain}category/${id}`,
                data: { category },
                success: (result) => {
                    if (result.status == "success") {
                        alert(result.status);
                        location.reload();
                    } else {
                        alert(result.message);
                    }
                }
            });
        }
    });

    $("#addCategory").click(() => {
        const category = $("#addCategoryName").val().trim();
        if (category) {
            $.ajax({
                type: "POST",
                url: `${domain}category/`,
                data: {
                    category,
                },
                success: (result) => {
                    if (result.status == "success") {
                        alert(result.status);
                        location.reload();
                    } else {
                        alert(result.message);
                    }
                }
            });
        }
    });

    $("#addStaff").click(() => {
        const fullName = $("#addStaffFullname").val().trim();
        const age = $("#addStaffAge").val().trim();
        const phone = $("#addStaffPhone").val().trim();
        const gender = $("#addStaffGender").val().trim();
        const address = $("#addStaffAddress").val().trim();
        const email = $("#addStaffEmail").val().trim();
        const username = $("#addStaffUsername").val().trim();
        const password = $("#addStaffPassword").val().trim();
        const role = $("#addStaffRole").val().trim();
        if (fullName && age && phone && gender && address && email && role && username && password) {
            $.ajax({
                type: "POST",
                url: `${domain}staff/`,
                data: {
                    fullName,
                    age,
                    phone,
                    gender,
                    address,
                    email,
                    role,
                    username,
                    password,
                },
                success: (result) => {
                    if (result.status == "success") {
                        alert(result.status);
                        location.reload();
                    } else {
                        alert(result.message);
                    }
                }
            });
        }
    });

    $("#updateStaff").click(() => {
        const fullName = $("#updateStaffFullname").val().trim();
        const age = $("#updateStaffAge").val().trim();
        const phone = $("#updateStaffPhone").val().trim();
        const gender = $("#updateStaffGender").val().trim();
        const address = $("#updateStaffAddress").val().trim();
        const email = $("#updateStaffEmail").val().trim();
        const role = $("#updateStaffRole").val().trim();
        const id = $("#updateStaffId").val().trim();
        if (fullName && age && phone && gender && address && email && role) {
            $.ajax({
                type: "PUT",
                url: `${domain}staff/${id}`,
                data: {
                    fullName,
                    age,
                    phone,
                    gender,
                    address,
                    email,
                    role,
                },
                success: (result) => {
                    if (result.status == "success") {
                        alert(result.status);
                        location.reload();
                    } else {
                        alert(result.message);
                    }
                }
            });
        }
    });

    $("#addMember").click(() => {
        const name = $("#addMemberName").val().trim();
        const phone = $("#addMemberPhone").val().trim();
        const level = $("#addMemberLevel").val().trim();
        if (name && phone && level) {
            $.ajax({
                type: "POST",
                url: `${domain}membership/`,
                data: {
                    name,
                    phone,
                    level,
                },
                success: (result) => {
                    if (result.status == "success") {
                        alert(result.status);
                        location.reload();
                    } else {
                        alert(result.message);
                    }
                }
            });
        }
    });

    $("#updateMember").click(() => {
        const name = $("#updateMemberName").val().trim();
        const phone = $("#updateMemberPhone").val().trim();
        const level = $("#updateMemberLevel").val().trim();
        const id = $("#updateMemberId").val().trim();
        if (name && phone && level) {
            $.ajax({
                type: "PUT",
                url: `${domain}membership/${id}`,
                data: {
                    name,
                    phone,
                    level,
                },
                success: (result) => {
                    if (result.status == "success") {
                        alert(result.status);
                        location.reload();
                    } else {
                        alert(result.message);
                    }
                }
            });
        }
    });
});

function getCategory(ele) {
    const id = $(ele).attr("data-id");
    $.ajax({
        url: `${domain}category/${id}`,
        success: (result) => {
            if (result.status == "success") {
                const category = result.data;
                $("#updateCategoryName").val(category.category);
                $("#updateCategoryId").val(category.id);
            } else {
                alert(result.message);
            }
        }
    });
}

function deleteCategory(ele) {
    const id = $(ele).attr("data-id");
    if (confirm("Are you sure about that ???")) {
        $.ajax({
            type: "DELETE",
            url: `${domain}category/${id}`,
            success: (result) => {
                if (result.status == "success") {
                    alert(result.status);
                    $(`#category-${id}`).remove();
                } else {
                    alert(result.message);
                }
            }
        });
    }
}

function getStaff(ele) {
    const id = $(ele).attr("data-id");
    $.ajax({
        url: `${domain}staff/${id}`,
        success: (result) => {
            if (result.status == "success") {
                const staff = result.data;
                $("#updateStaffFullname").val(staff.full_name);
                $("#updateStaffAge").val(staff.age);
                $("#updateStaffPhone").val(staff.phone);
                $("#updateStaffGender").val(staff.gender);
                $("#updateStaffAddress").val(staff.address);
                $("#updateStaffEmail").val(staff.email);
                $("#updateStaffRole").val(staff.role);
                $("#updateStaffId").val(staff.id);
            } else {
                alert(result.message);
            }
        }
    });
}

function deleteStaff(ele) {
    const id = $(ele).attr("data-id");
    if (confirm("Are you sure about that ???")) {
        $.ajax({
            type: "DELETE",
            url: `${domain}staff/${id}`,
            success: (result) => {
                if (result.status == "success") {
                    alert(result.status);
                    $(`#staff-${id}`).remove();
                } else {
                    alert(result.message);
                }
            }
        });
    }
}

function getMembership(ele) {
    const id = $(ele).attr("data-id");
    $.ajax({
        url: `${domain}membership/${id}`,
        success: (result) => {
            if (result.status == "success") {
                const membership = result.data;
                $("#updateMemberName").val(membership.name);
                $("#updateMemberPhone").val(membership.phone);
                $("#updateMemberLevel").val(membership.level);
                $("#updateMemberId").val(membership.id);
            } else {
                alert(result.message);
            }
        }
    });
}

function deleteMembership(ele) {
    const id = $(ele).attr("data-id");
    if (confirm("Are you sure about that ???")) {
        $.ajax({
            type: "DELETE",
            url: `${domain}membership/${id}`,
            success: (result) => {
                if (result.status == "success") {
                    alert(result.status);
                    $(`#membership-${id}`).remove();
                } else {
                    alert(result.message);
                }
            }
        });
    }
}