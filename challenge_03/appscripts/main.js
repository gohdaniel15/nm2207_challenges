// main.js
(function() {
  console.log(`initializing...`);

  function _getArticleAndSetHTML(innerHTML) {
    let article = document.getElementById('article')
    article.innerHTML += innerHTML
  }

  function challenge3() {
    _getArticleAndSetHTML(`<p><b>Challenge 3:</b> Welcome to my web page</p>`)
  }

  let challenge5 = () => {
    let foo = (num1, num2) => {
      console.log("I am in challenge 4")
      return num1 - num2
    }
    let x = 7
    let y = 5

    _getArticleAndSetHTML(`<p><b>Challenge 5:</b> The difference between ${x} and ${y} is ${foo(x, y)}</p>`)
  }

  let challenge9 = () => {
    let multi = (num1, num2) => {
      let sum = num1 + num2
      let difference = num1 - num2
      let product = num1 * num2

      return {
        "sum": sum,
        "difference": difference,
        "product": product
      }
    }

    let result = multi(7, 9)
    let resultString = `<p><b>Challenge 9:</b> multi(7, 9) results</p>`
                          + `<p>Sum: ${result.sum}</p>`
                          + `<p>Difference: ${result.difference}</p>`
                          + `<p>Product: ${result.product}</p>`
    _getArticleAndSetHTML(resultString)
  }

  let challenge12 = () => {
    let point1 = {
      x: 10,
      y: -5
    }
    let point2 = {
      x: 15,
      y: 35
    }

    let pointsum = (pt1, pt2) => {
      return {
        x: pt1.x + pt2.x,
        y: pt1.y + pt2.y
      }
    }

    _getArticleAndSetHTML(`<b>Challenge 12:</b> ${JSON.stringify(pointsum(point1, point2))}`)
  }

  challenge3()
  challenge5()
  challenge9()
  challenge12()
})()
