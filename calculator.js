; (() => {
  // 请在这里完成代码
  const first = document.querySelector('#first')
  const second = document.querySelector('#second')
  const operators = document.querySelectorAll('.operators input')
  const submit = document.querySelector('button')
  const result = document.querySelector('#result')

  function calculate() {
    if (operators[0].checked) {
      return Number(first.value) + Number(second.value)
    } else if (operators[1].checked) {
      return Number(first.value) - Number(second.value)
    } else if (operators[2].checked) {
      return Number(first.value) * Number(second.value)
    } else if (operators[3].checked) {
      if (second.value === '0') {
        return NaN
      } else {
        return Number(first.value) / Number(second.value)
      }
    }
  }

  function clickSubmit() {
    result.innerHTML = `结果：<br> ${calculate()}`
  }

  submit.addEventListener('click', function (e) {
    e.preventDefault()
  })
  submit.addEventListener('click', clickSubmit)
})()
