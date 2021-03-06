module.exports = (req, res, db, uniqueId, qs) => {
  let body = ''

  req.on('data', (data) => {
    body += data
  })

  req.on('end', () => {
    let data = qs.parse(body)
    // console.log(data)
    for (let entry of db) {
      if (entry.Id === data.entryId) {
        if (entry.State === 'Done') entry.State = 'Pending'
        else entry.State = 'Done'
      }
    }
    res.end()
  })
}
