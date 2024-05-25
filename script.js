const fname = $("#fname");
const lname = $("#lname");
const email = $("#email");
const radioBtns = $("input[type='radio']");
const message = $("#message");
const consent = $("#consent");

function handleFirstName() {
  let errTxt = $(".errTxt").eq(0);
  if (fname.val().length == 0) {
    fname.addClass("err");
    errTxt.text("This field is required");
    errTxt.show();
    return false;
  }
  if (!fname.val().match(/^[a-zA-Z]+$/)) {
    fname.addClass("err");
    errTxt.text("Only letters are allowed");
    errTxt.show();
    return false;
  }
  fname.removeClass("err");
  errTxt.hide();
  return true;
}

function handleLastName() {
  let errTxt = $(".errTxt").eq(1);
  if (lname.val().length == 0) {
    lname.addClass("err");
    errTxt.text("This field is required");
    errTxt.show();
    return false;
  }
  if (!lname.val().match(/^[a-zA-Z]+$/)) {
    lname.addClass("err");
    errTxt.text("Only letters are allowed");
    errTxt.show();
    return false;
  }

  lname.removeClass("err");
  errTxt.hide();
  return true;
}

function handleEmail() {
  let errTxt = $(".errTxt").eq(2);
  if (email.val().length == 0) {
    email.addClass("err");
    errTxt.text("Email is required");
    errTxt.show();
    return false;
  }
  if (!email.val().match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    email.addClass("err");
    errTxt.text("Please enter a valid email address");
    errTxt.show();
    return false;
  }

  email.removeClass("err");
  errTxt.hide();
  return true;
}

function handleQuery() {
  let errTxt = $(".errTxt").eq(3);
  if (radioBtns.eq(0).prop("checked") || radioBtns.eq(1).prop("checked")) {
    errTxt.hide();
    return true;
  }

  errTxt.text("Please select a query type");
  errTxt.show();
  return false;
}

function handleMessage() {
  let errTxt = $(".errTxt").eq(4);
  if (message.val().trim().length == 0) {
    message.addClass("err");
    errTxt.text("This field is required");
    errTxt.show();
    return false;
  }

  message.removeClass("err");
  errTxt.hide();
  return true;
}

function handleConsent() {
  let errTxt = $(".errTxt").eq(5);
  if (consent.prop("checked")) {
    errTxt.hide();
    return true;
  }

  errTxt.text("To submit this form, please consent to being contacted");
  errTxt.show();
  return false;
}

$(".option").each(function () {
  $(this).on("click", () => {
    const radioBtn = $(this).find("input[type='radio']");
    radioBtn.prop("checked", true);
    handleQuery();
  });
});

fname.on("input", handleFirstName);
lname.on("input", handleLastName);
email.on("input", handleEmail);
message.on("input", handleMessage);
consent.on("input", handleConsent);

const toast = $(".toast");

$("#form").on("submit", (e) => {
  e.preventDefault();
  if (e.target.checkValidity()) {
    fname.val("");
    lname.val("");
    email.val("");
    message.val("");
    radioBtns.prop("checked", false);
    consent.prop("checked", false);
    toast.addClass("active");
    setTimeout(() => toast.removeClass("active"), 4000);
  } else {
    handleFirstName();
    handleLastName();
    handleEmail();
    handleQuery();
    handleMessage();
    handleConsent();
  }
});
