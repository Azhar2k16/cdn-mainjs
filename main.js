let clearBtn = $("#clear-btn")
let licenseFiled = $("#license")

clearBtn.on("click", function () {
  licenseFiled.val("")
})

// Change the button text & add active class on input radio
$(".jRadioDropdown").change(function () {
  var dropdown = $(this).closest(".dropdown")
  var thislabel = $(this).closest("label")

  dropdown.find("label").removeClass("active")
  if ($(this).is(":checked")) {
    thislabel.addClass("active")
    dropdown.find("ins").html(thislabel.text())
  }
})
// checkout modal button toggle
$("input[name='mode']").click(function () {
  var value = $(this).val()
  if (value === "hybrid" && this.checked) {
    $("#checkout_data").show()
    $("#checkout_modal_btn").hide()
  } else if (value === "multiple" && this.checked) {
    $("#checkout_modal_btn").show()
    $("#checkout_data").hide()
  }
})
$("#checkout_data").show()
$("#checkout_modal_btn").hide()

$('[data-toggle="tooltip"]').tooltip({
  trigger: "hover",
  animation: true
})
// for upload image inputs
function readURL(input) {
  var id = $(input).attr("id")

  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
      $('label[for="' + id + '"] .upload-icon').css("border", "none")
      $('label[for="' + id + '"] .icon').hide()
      $('label[for="' + id + '"] .prev')
        .attr("src", e.target.result)
        .show()
    }

    reader.readAsDataURL(input.files[0])
  }
}
// button js effect
let $window = window
function buttonTouchEffect() {
  let $buttonTouchEffect = $(".js-touch-effect")
  $buttonTouchEffect.on("click", function (e) {
    $(this).append("<span></span>")
    let $span = $(this).find("span"),
      offSet = $(this).offset(),
      offSetY = event.pageY - offSet.top,
      offSetX = event.pageX - offSet.left

    // console.log(offSetY, offSetX);
    $span.css({
      top: offSetY,
      left: offSetX
    })

    $window.setTimeout(function () {
      $span.remove()
    }, 800)
  })
}
buttonTouchEffect()
// for upload image inputs
function readURL(input) {
  var id = document.querySelector(input).attr("id")

  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
      document
        .querySelector('label[for="' + id + '"] .upload-icon')
        .css("border", "none")
      document.querySelector('label[for="' + id + '"] .icon').hide()
      document
        .querySelector('label[for="' + id + '"] .prev')
        .attr("src", e.target.result)
        .show()
    }

    reader.readAsDataURL(input.files[0])
  }
}

$("input[id^='file-input']").change(function () {
  readURL(this)
})
