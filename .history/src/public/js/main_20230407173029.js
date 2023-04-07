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
          password,
        },
        success: (result) => {
          if (result.status == "success") {
            // alert(result.status);
            window.location = "/";
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
      alert("Do Not empty!");
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
        },
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
        },
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
    if (
      fullName &&
      age &&
      phone &&
      gender &&
      address &&
      email &&
      role &&
      username &&
      password
    ) {
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
        },
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
        },
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
        },
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
        },
      });
    }
  });

  $("#addProduct").click(() => {
    const name = $("#addProductName").val().trim();
    const image = $("#addProductImage").val().trim();
    const price = $("#addProductPrice").val();
    const idCategory = $("#addProductCategory").val();
    const sizeChecked = $("input[name=addSize]:checked");
    const sizeArr = [];
    if (name && image && price && sizeChecked.length > 0 && idCategory) {
      sizeChecked.each(function () {
        sizeArr.push($(this).val());
      });
      const size = sizeArr.join("|");
      $.ajax({
        type: "POST",
        url: `${domain}product/`,
        data: {
          name,
          image,
          price,
          idCategory,
          size,
        },
        success: (result) => {
          if (result.status == "success") {
            alert(result.status);
            location.reload();
          } else {
            alert(result.message);
          }
        },
      });
    }
  });

  $("#updateProduct").click(() => {
    const id = $("#updateProductId").val().trim();
    const name = $("#updateProductName").val().trim();
    const image = $("#updateProductImage").val().trim();
    const price = $("#updateProductPrice").val();
    const idCategory = $("#updateProductCategory").val();
    const sizeChecked = $("input[name=updateSize]:checked");
    const sizeArr = [];
    if (name && image && price && sizeChecked.length > 0 && idCategory) {
      sizeChecked.each(function () {
        sizeArr.push($(this).val());
      });
      const size = sizeArr.join("|");
      $.ajax({
        type: "PUT",
        url: `${domain}product/${id}`,
        data: {
          name,
          image,
          price,
          idCategory,
          size,
        },
        success: (result) => {
          if (result.status == "success") {
            alert(result.status);
            location.reload();
          } else {
            alert(result.message);
          }
        },
      });
    }
  });

  $("#addStorage").click(() => {
    const idProduct = $("#addStorageProductId").val().trim();
    const quantity = $("#addStorageQuantity").val().trim();
    if (idProduct && quantity) {
      $.ajax({
        type: "POST",
        url: `${domain}storage/`,
        data: {
          idProduct,
          quantity,
        },
        success: (result) => {
          if (result.status == "success") {
            alert(result.status);
            location.reload();
          } else {
            alert(result.message);
          }
        },
      });
    }
  });

  $("#updateStorage").click(() => {
    const id = $("#updateStorageId").val().trim();
    const quantity = $("#updateStorageQuantity").val();
    if (id && quantity) {
      $.ajax({
        type: "PUT",
        url: `${domain}storage/${id}`,
        data: {
          quantity,
        },
        success: (result) => {
          if (result.status == "success") {
            alert(result.status);
            location.reload();
          } else {
            alert(result.message);
          }
        },
      });
    }
  });
});

function modal(modal, button, close) {
  var Modal = document.getElementById(modal);
  var Button = document.getElementById(button);
  var Close = document.getElementsByClassName(close)[0];
  Button
    ? (Button.onclick = function () {
        Modal.style.display = "block";
      })
    : 0;
  Close
    ? (Close.onclick = function () {
        Modal.style.display = "none";
      })
    : 0;
  window.onclick = function (event) {
    if (event.target == Modal) {
      Modal.style.display = "none";
    }
  };
}

modal("addModal", "add", "closeAdd");

modal("editModal", "edit", "closeEdit");

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
    },
  });
}

function deleteCategory(ele) {
  const id = $(ele).attr("data-id");
  if (confirm("Are you sure about that ?")) {
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
      },
    });
  }
}

function getStaff(ele) {
  const id = $(ele).attr("data-id");
  var Modal = document.getElementById("editModal");
  Modal.style.display = "block";
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
    },
  });
}

function deleteStaff(ele) {
  const id = $(ele).attr("data-id");
  if (confirm("Are you sure about that ?")) {
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
      },
    });
  }
}

function getMembership(ele) {
  const id = $(ele).attr("data-id");
  var Modal = document.getElementById("editModal");
  Modal.style.display = "block";
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
    },
  });
}

function deleteMembership(ele) {
  const id = $(ele).attr("data-id");
  if (confirm("Are you sure about that ?")) {
    $.ajax({
      type: "DELETE",
      url: `${domain}membership/${id}`,
      success: (result) => {
        if (result.status == "success") {
          alert(result.status);
          location.reload();
        } else {
          alert(result.message);
        }
      },
    });
  }
}

function getProduct(ele) {
  const id = $(ele).attr("data-id");
  var Modal = document.getElementById("editModal");
  Modal.style.display = "block";
  $.ajax({
    url: `${domain}product/${id}`,
    success: (result) => {
      if (result.status == "success") {
        const product = result.data;
        $("#updateProductName").val(product.name);
        $("#updateProductImage").val(product.image);
        $("#productImage").attr("src", product.image);
        $("#updateProductPrice").val(product.price);
        $("#updateProductCategory").val(product.id_category);
        $("#updateProductId").val(product.id);
        const allSize = product.size.split("|");
        checkSize(allSize);
      } else {
        alert(result.message);
      }
    },
  });
}

function deleteProduct(ele) {
  const id = $(ele).attr("data-id");
  if (confirm("Are you sure about that ?")) {
    $.ajax({
      type: "DELETE",
      url: `${domain}product/${id}`,
      success: (result) => {
        if (result.status == "success") {
          alert(result.status);
          location.reload();
        } else {
          alert(result.message);
        }
      },
    });
  }
}

function getStorage(ele) {
  const id = $(ele).attr("data-id");
  $.ajax({
    url: `${domain}storage/${id}`,
    success: (result) => {
      if (result.status == "success") {
        const storage = result.data;
        $("#updateStorageProduct").val(storage.name);
        $("#updateStorageQuantity").val(storage.quantity);
        $("#updateStorageId").val(storage.id);
      } else {
        alert(result.message);
      }
    },
  });
}

function deleteStorage(ele) {
  const id = $(ele).attr("data-id");
  if (confirm("Are you sure about that ?")) {
    $.ajax({
      type: "DELETE",
      url: `${domain}storage/${id}`,
      success: (result) => {
        if (result.status == "success") {
          alert(result.status);
          location.reload();
        } else {
          alert(result.message);
        }
      },
    });
  }
}

function selectProduct(ele) {
  const id = $(ele).attr("data-id");
  const name = $(ele).attr("data-name");
  $("#addStorageProduct").val(name);
  $("#addStorageProductId").val(id);
}

function getOrderDetail(ele) {
  const id = $(ele).attr("data-id");
  $.ajax({
    url: `${domain}order/${id}`,
    success: (result) => {
      if (result.status == "success") {
        const order = result.data.order;
        const details = result.data.detail;
        $("#orderDetailCtn").html("");
        for (const detail of details) {
          $("#orderDetailCtn").append(
            `
                        <tr>
                            <td class="limit-wordStaff">
                                ${detail.name}
                            </td>
                            <td >
                                ${detail.quantity}
                            </td>
                            <td >
                                ${detail.price}
                            </td>
                        </tr>
                        `
          );
        }
        $("#updateOrderCustomer").val(order.customer);
        $("#updateOrderTotal").val(order.total);
      } else {
        alert(result.message);
      }
    },
  });
}

function checkSize(size) {
  $("input[name=updateSize]").attr("checked", false);
  size.forEach((element) => {
    $(`#size-${element}`).attr("checked", true);
  });
}

function getBranch(ele) {
  const id = $(ele).attr("data-id");
  $.ajax({
    url: `${domain}branch/${id}`,
    success: (result) => {
      console.log(result.data);
      if (result.status == "success") {
        const branch = result.data;
        $("#updateBranchName").val(branch.branch);
        $("#updateBranchAddress").val(branch.address);
        $("#updateBranchId").val(branch.id);
      } else {
        alert(result.message);
      }
    },
  });
}
