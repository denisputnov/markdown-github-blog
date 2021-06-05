const { default: axios } = require("axios")

async function get() {
  try {
    await axios.get('https://api.github.com/repos/grnbows/temporay-test/git').then(res => {
      console.log(atob(res.data.content.split('\n').join('')))
    })
  } catch (e) {
    console.log(e)
  }
}

console.log(get())