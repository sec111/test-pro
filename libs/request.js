import axios from 'axios'

/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function get (url, params = {}) {
  params.t = new Date().getTime()
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装delete方法
 * @param url
 * @param params
 * @param confirm 是否有确认弹框
 * @returns {Promise}
 */

export function doDelete (url, params = {}, confirm = true) {
  return new Promise((resolve, reject) => {
    if (confirm) {
      Modal.confirm({
        title: '提示',
        content: '<p>此操作将删除所选数据, 是否继续?</p>',
        onOk: () => {
          axios.delete(url, {
            params: params
          })
            .then(response => {
              resolve(response.data)
            })
            .catch(err => {
              reject(err)
            })
        },
        onCancel: () => {
          Message.info('已取消删除')
        }
      })
    } else {
      axios.delete(url, {
        params: params
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    }
  })
}

/**
 * 封装deleteOne方法
 * @param url
 * @param id
 * @param confirm 是否有确认弹框
 * @returns {Promise}
 */

export function deleteOne (url, id, confirm = true) {
  return new Promise((resolve, reject) => {
    let newUrl
    let data = null
    if (typeof id === 'object') {
      newUrl = url
      data = id
    } else if (typeof id === 'string' || typeof id === 'number') {
      newUrl = url + '/' + id
    }
    if (confirm) {
      Modal.confirm({
        title: '提示',
        content: '<p>此操作将永久删除该条数据, 是否继续?</p>',
        onOk: () => {
          axios.delete(newUrl, {data: data})
            .then(response => {
              resolve(response.data)
            })
            .catch(err => {
              reject(err)
            })
        },
        onCancel: () => {
          Message.info('已取消删除')
        }
      })
    } else {
      axios.delete(newUrl, {data: data})
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    }
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch(err => {
        reject(err)
      })
  })
}